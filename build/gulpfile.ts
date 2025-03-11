import { series, parallel } from 'gulp'
import { withTaskName, run } from './utils'

export default series(
  withTaskName('start', async () => console.log('start build task.')),
  withTaskName('remove dist', async () => run('rm -rf ./dist')),
  withTaskName('complete', async () => console.log('build complete.')),
)