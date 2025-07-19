import { outDir } from "./path"
import path from 'path'

export const buildConfig = {
  esm: {
    module: 'ESNext',   // tsconfig输出的结果
    format: 'esm',      // 格式化后的模块规范
    output: {
      name: 'es',       // 输出后的文件夹名
      path: path.resolve(outDir, 'es')  // 输出路径
    },
    bundle: {
      path: 'jeff-ui/es'
    }
  },
  cjs: {
    module: 'CommonJS',
    format: 'cjs',
    output: {
      name: 'lib',
      path: path.resolve(outDir, 'lib')
    },
    bundle: {
      path: 'jeff-ui/lib'
    }
  }
}

export type BuildConfig = typeof buildConfig