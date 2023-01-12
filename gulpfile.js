var gulp = require("gulp");
var less = require("gulp-less");
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

gulp.task('compile-less', function() {
    gulp.src('./src/*.less')
        .pipe(less())
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./src/**/*.less").on("change", gulp.parallel('compile-less'));
    gulp.watch("./src/**/*.less").on("change", reload);
    gulp.watch("./*.html").on("change", reload);
});

gulp.task('default', gulp.parallel('compile-less', 'serve'));



