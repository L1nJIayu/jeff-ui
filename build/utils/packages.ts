
import { buildConfig } from './config'
import { src, dest, series, parallel } from 'gulp'
import path from 'path'
import ts from 'gulp-typescript'
import { projectRoot, outDir } from './path'
import { withTaskName } from './index'
import { run } from './index'


export const buildPackages = (dirname: string, packageName: string) => {

  const inputs = ['**/*.ts', '!gulpfile.ts', '!node_modules']
  const tsConfig = path.resolve(projectRoot, 'tsconfig.json')

  const tasks = Object.entries(buildConfig).map(([module, config]) => {
    
    const packOutputPath = path.resolve(dirname, 'dist', config.output.name)

    const tsProject = ts.createProject(tsConfig, {
      declaration: true,	// 需要生成配置文件
      strict: false,			// 关闭【严格模式】主要是为了不要产生那么多报错信息，影响我们学习
      module: config.module	// 输出的模块类型
    })
  
    return series(
      withTaskName(`编译TypeScript`, () => {
        return src(inputs)
          .pipe(tsProject())
          .pipe(dest(packOutputPath))
  
      }),
      withTaskName(`拷贝`, () => {
        const from = `${packOutputPath}/**`
        const to = path.resolve(outDir, config.output.name, packageName)

        return src(from).pipe(dest(to))
      })
    )
  })

  return series(
    parallel(...tasks),
    withTaskName('移除utils包构建产物', async () => {
      const rmPath = path.resolve(projectRoot, 'packages/utils')
      run('rm -rf dist', rmPath)
    })
  )
} 