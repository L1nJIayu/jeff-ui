import { series } from 'gulp'
import { withTaskName, run } from './utils'
import { rimraf } from 'rimraf'
import { projectRoot } from './utils/path'

export default series(
  withTaskName('remove dist', async () => await rimraf(`${projectRoot}/dist`)),
  // withTaskName('build packages', async () => run('pnpm run --filter "./packages/*" --parallel build'))
)