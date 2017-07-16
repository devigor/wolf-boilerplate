const gulp                      = require('gulp');
const autoprefixer              = require('gulp-autoprefixer');
const imagemin                  = require('gulp-imagemin');
const svgmin                    = require('gulp-svgmin');
const pug                       = require('gulp-pug')
const stylus                    = require('gulp-stylus');
const uglify                    = require('gulp-uglify');
const concat                    = require('gulp-concat');
const babel                     = require('gulp-babel');
const del                       = require('del');
const browserSync               = require('browser-sync');

const devFiles = {
    pug: './src/*.pug',
    stylus: './src/styl/**/*.styl',
    styl: './src/styl/*.styl',
    img: './src/img/*.png',
    svg: './src/img/svg/*.svg',
    js: './src/js/**/*.js'
}

const buildFiles = {
    build: './build/',
    html: './build/',
    css: './build/assets/css/',
    img: './build/assets/img/',
    svg: './build/assets/img/svg/',
    js: './build/assets/js/'
}

gulp.task('clean', () => {
  return del(buildFiles.build);
})

gulp.task('server', () => {
    let files = buildFiles.build;

    browserSync.init(files, {
        server: {
            baseDir: './build/'
        }
    });
})

gulp.task('html', () => {
    return gulp.src(devFiles.pug)
           .pipe(pug())
           .pipe(gulp.dest(buildFiles.html));
})

gulp.task('css', () => {
    return gulp.src(devFiles.styl)
           .pipe(stylus())
           .pipe(gulp.dest(buildFiles.css));
})

gulp.task('autoprefixer', () => {
    return gulp.src(buildFiles.css)
           .pipe(autoprefixer())
           .pipe(gulp.dest(buildFiles.css));
})

gulp.task('imagemin', () => {
    return gulp.src(devFiles.img)
           .pipe(imagemin())
           .pipe(gulp.dest(buildFiles.img));
})

gulp.task('svgmin', () => {
    return gulp.src(devFiles.svg)
           .pipe(svgmin())
           .pipe(gulp.dest(buildFiles.svg));
})

gulp.task('js', () => {
    return gulp.src(devFiles.js)
           .pipe(babel({
             presets: ['es2015']
           }))
           .pipe(concat('main.js'))
           .pipe(uglify())
           .pipe(gulp.dest(buildFiles.js));
})

gulp.task('watch', () => {
  gulp.watch(devFiles.pug, ['html']);
  gulp.watch(devFiles.stylus, ['css']);
  gulp.watch(devFiles.js, ['js']);
  gulp.watch(devFiles.img, ['imagemin']);
  gulp.watch(devFiles.svg, ['svgmin']);
})

// Tasks Dev and Prod
gulp.task('build', ['clean'], () => {
    gulp.start(
        'html',
        'css',
        'autoprefixer',
        'js',
        'imagemin',
        'svgmin'
    )
})

gulp.task('dev', [
    'build',
    'watch',
    'server'
])

gulp.task('default', () => {
  console.log('Please using yarn start or npm start!! :)')
})
