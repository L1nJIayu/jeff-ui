import { series } from 'gulp'
import { withTaskName, run } from './utils'

export default series(
  withTaskName('remove dist', async () => run('rm -rf ./dist')),
  withTaskName('build packages', async () => run('pnpm run --filter ./packages --parallel build'))
)
/*

  pnpm add -D
  @types/gulp-autoprefixer
  @types/gulp-clean-css
  @types/gulp-sass
  @types/sass 
  gulp-autoprefixer
  gulp-clean-css
  gulp-sass
  -w
   
*/
