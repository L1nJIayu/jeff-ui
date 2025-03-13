
import { buildConfig } from './config'
import { src, dest, series, parallel } from 'gulp'
import path from 'path'
// TODO: pnpm add gulp-typescript -D -w
import ts from 'gulp-typescript'
import { projectRoot, outDir } from './path'
import { withTaskName } from './index'


export const buildPackages = (dirname: string, packageName: string) => {

  const tasks = Object.entries(buildConfig).map(([module, config]) => {
    
    const output = path.resolve(dirname, config.output.name)
  
    return series(
      withTaskName(`build:${dirname}`, () => {
        const tsConfig = path.resolve(projectRoot, 'tsconfig.json')
        const inputs = ['**/*.ts', '!gulpfile.ts', '!node_modules']
        return src(inputs)
          .pipe(ts.createProject(tsConfig, {
            declaration: true,
            strict: false,
            module
          })())
          .pipe(dest(output))
  
      }),
      withTaskName(`copy:${dirname}`, async () => { 
        return src(`${output}/**`)
          .pipe(dest(path.resolve(outDir, config.output.name, packageName)))
      })
    )
  })

  return parallel(...tasks)
} 