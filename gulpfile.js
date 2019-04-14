const browserSync = require('browser-sync').create();
// const autoprefixer = require('gulp-autoprefixer');
const gulp = require('gulp');
// const rename = require('gulp-rename');
const sass = require('gulp-sass');
// const uglify = require('gulp-uglify-es').default;
// const uglifyCss = require('gulp-uglifycss');

let src = {
    js: './resources/js/*.js',
    jsDist: './public/js/',
    sass: './resources/sass/app.scss',
    css:  './public/css/'
}


gulp.task('js', () => {
    return gulp.src(src.js)
        .pipe(rename('app.min.js'))
        // .pipe(uglify())
        .pipe(gulp.dest(src.jsDist));
});

gulp.task('sass', () => {
    return gulp.src(src.sass)
        .pipe(sass({errLogToConsole: true}))
        // .pipe(autoprefixer({
        //     browsers: ['last 2 versions']
        // }))
        // .pipe(uglifyCss())
        // .pipe(rename('app.min.css'))
        .pipe(gulp.dest(src.css));
});

gulp.task('watch', () => {
    browserSync.init({
        server: "./"
    });
    
    gulp.watch('./resources/sass/**/*.scss', gulp.series('sass')).on('change', browserSync.reload);
    gulp.watch('./resources/js/*.js', gulp.series('js')).on('change', browserSync.reload);
});
