import { outDir } from "./path"
import path from 'path'

export const buildConfig = {
  esm: {
    module: 'ESNext',
    format: 'esm',
    output: {
      name: 'es',
      path: path.resolve(outDir, 'es')
    },
    bundle: {
      path: 'je-ui/es'
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
      path: 'je-ui/lib'
    }
  }
}

export type BuildConfig = typeof buildConfig