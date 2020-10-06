var gulp = require('gulp'),
    scss = require('gulp-sass'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    cssmin = require('gulp-cssmin'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    ttf2woff = require('gulp-ttf2woff'),
    ttf2woff2 = require('gulp-ttf2woff2'),    
    autoprefixer = require('gulp-autoprefixer');



//препроцкссоры
gulp.task('scss',function(){
    return gulp.src('app/scss/style.scss')
            .pipe(scss({outputStyle: 'compressed'}))
            .pipe(autoprefixer({overrideBrowserslist: ['last 8 version']}))
            .pipe(rename({suffix: ".min"}))
            .pipe(gulp.dest('app/css'))
            .pipe(browserSync.reload({stream: true}))
});

//собираем все стили плагинов в один
gulp.task('style', function(){
    return gulp.src([
        'node_modules/slick-carousel/slick/slick.css',
        'node_modules/normalize.css/normalize.css',
    ])
    .pipe(concat('libs.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('app/css'))
});

//собираем все скрипты плагинов в один
gulp.task('script', function(){
    return gulp.src([
        'node_modules/slick-carousel/slick/slick.js',        
    ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'))
});

//сжимаем изображения
gulp.task('imagemin', function(){
     return gulp.src([
         'dev/*.jpg',
         'dev/*.png',         
     ])
        .pipe(imagemin())
        .pipe(gulp.dest('app/images'))        
});
gulp.task('imagemin-cont', function(){
     return gulp.src([
         'cont/*.jpg',
         'cont/*.png',         
     ])
        .pipe(imagemin())
        .pipe(gulp.dest('app/images/content'))
});

//конвертируем шрифты
gulp.task('ttf2woff', function(){
    return gulp.src('dev/*.ttf')
        .pipe(ttf2woff())
        .pipe(gulp.dest('app/fonts'))
});

gulp.task('ttf2woff2', function(){
    return gulp.src('dev/*.ttf')
        .pipe(ttf2woff2())
        .pipe(gulp.dest('app/fonts'))
});

//функция отслеживания изменений
gulp.task('html', function(){
    return gulp.src('app/*.html')
            .pipe(browserSync.reload({stream: true}))
});
gulp.task('js', function(){
    return gulp.src('app/js/*.js')
            .pipe(browserSync.reload({stream: true}))
});

gulp.task('watch', function(){
    gulp.watch('app/*.html', gulp.parallel('html'));
    gulp.watch('app/js/*.js', gulp.parallel('js'));
    gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'));    
    gulp.watch('dev/*.jpg', gulp.parallel('imagemin'));
    gulp.watch('dev/*.png', gulp.parallel('imagemin'));
    gulp.watch('cont/*.jpg', gulp.parallel('imagemin-cont'));
    gulp.watch('cont/*.png', gulp.parallel('imagemin-cont'));
    gulp.watch('dev/*.ttf', gulp.parallel('ttf2woff'));
    gulp.watch('dev/*.ttf', gulp.parallel('ttf2woff2'));
});

//поднимаем локальный сервер
gulp.task('browserSync', function(){
    browserSync.init({
        server: {
            baseDir: 'app/'
        }
    });
});

//вызываем все функции
gulp.task('default', gulp.parallel('scss', 'html', 'js', 'watch', 'browserSync', 'script', 'style'));