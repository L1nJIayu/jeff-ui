import { series, src, dest } from 'gulp'
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import GulpAutoPrefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'
import path from 'path'

function compile() {
  const sass = gulpSass(dartSass)
  return src(path.resolve(__dirname, './src/*.scss'))
    .pipe(sass.sync())
    .pipe(GulpAutoPrefixer())
    .pipe(cleanCSS())
    .pipe(dest('./dist/css'))
}

function copyFonts () {
  return src(path.resolve(__dirname, './src/fonts/**'))
    .pipe(cleanCSS())
    .pipe(dest('./dist/fonts'))
}

function copyFullFiles() {
  return src(path.resolve(__dirname, './dist/**'))
    .pipe(dest('../../dist/theme-chalk'))
}

export default series(
  compile,
  copyFonts,
  copyFullFiles
)