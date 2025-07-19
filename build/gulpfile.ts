import { series } from 'gulp'
import { withTaskName, run } from './utils'

export default series(
  withTaskName('remove dist', async () => run('rm -rf ./dist')),
  withTaskName('build packages', async () => run('pnpm run --filter "./packages/*" --parallel build'))
)