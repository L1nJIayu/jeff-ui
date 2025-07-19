
import { buildConfig } from './config'
import { src, dest, series, parallel } from 'gulp'
import path from 'path'
import ts from 'gulp-typescript'
import { projectRoot, outDir } from './path'
import { withTaskName } from './index'


export const buildPackages = (dirname: string, packageName: string) => {

  const tasks = Object.entries(buildConfig).map(([module, config]) => {
    
    const inputs = ['**/*.ts', '!gulpfile.ts', '!node_modules']
    const tsConfigPath = path.resolve(projectRoot, 'tsconfig.json')
    const output = path.resolve(dirname, config.output.name)

    const tsProject = ts.createProject(tsConfigPath, {
      declaration: true,
      strict: false,
      module
    })
  
    return series(
      withTaskName(`build:${dirname}/${packageName}`, async () => {
        return src(inputs)
          .pipe(tsProject())
          .pipe(dest(output))
  
      }),
      withTaskName(`copy: ${output} ===> ${path.resolve(outDir, config.output.name, packageName)}`, async () => {
        const from = `${output}/**`
        const to = path.resolve(outDir, config.output.name, packageName)

        return src(from).pipe(dest(to))
      })
    )
  })

  return parallel(...tasks)
} 