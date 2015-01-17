var gulp = require('gulp'), // Сообственно Gulp JS
    less = require('gulp-less'), // Плагин для less
    livereload = require('gulp-livereload'), // Livereload для Gulp
    myth = require('gulp-myth'), // Плагин для Myth - http://www.myth.io/
    csso = require('gulp-csso'), // Минификация CSS
    uglify = require('gulp-uglify'), // Минификация JS
    concat = require('gulp-concat'); // Склейка файлов

// Index html
gulp.task('html', function() {
    gulp.src('./index.html')
        .pipe(gulp.dest('./'))
        .pipe(livereload());
});

// Собираем Less
gulp.task('less', function() {
    gulp.src('./less/style.less')
        .pipe(less()) // собираем less
        .on('error', console.log) // Если есть ошибки, выводим и продолжаем
        .pipe(myth()) // добавляем префиксы - http://www.myth.io/
        .pipe(csso()) // минимизируем css
        .pipe(gulp.dest('./css/')) // записываем css
        .pipe(livereload()); // даем команду на перезагрузку css
});

// Собираем JS
gulp.task('js', function() {
    gulp.src('./js/*.js')
        // .pipe(concat('index.js')) // Собираем все JS, кроме тех которые находятся в ./assets/js/vendor/**
        // .pipe(gulp.dest('./public/js'))
        .pipe(livereload()); // даем команду на перезагрузку страницы
});

// Запуск сервера разработки gulp watch
gulp.task('watch', function() {
    // Предварительная сборка проекта
    gulp.run('html');
    gulp.run('less');
    gulp.run('js');

    // Подключаем Livereload
    livereload.listen();
    gulp.watch('index.html', function() {
        gulp.run('html');
    });
    gulp.watch(['less/*.less', 'less/components/*.less'], function() {
        gulp.run('less');
    });
    gulp.watch('js/*.js', function() {
        gulp.run('js');
    });
});

// gulp.task('build', function() {

//     // css
//     gulp.src('./less/style.less')
//         .pipe(less()) // собираем less
//         .pipe(myth()) // добавляем префиксы - http://www.myth.io/
//         .pipe(csso()) // минимизируем css
//         .pipe(gulp.dest('./css/')) // записываем css

//     // js
//     gulp.src('./assets/js/*.js')
//         .pipe(concat('index.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('./build/js'));
// });