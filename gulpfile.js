'use strict'

const {src, dest, parallel, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');

const buildSass = () => {
    console.log('Компиляция SASS');

    return src('dist/sass/*.scss')
        .pipe(sass())
        .pipe(dest('build/styles/'));
}

const buildPug = () => {
    console.log('Компиляция Pug');

    return src('dist/pages/*.pug')
        .pipe(pug())
        .pipe(dest('build/'));
}

const buildScss = (done) => {
    console.log("scss file was changed on dist/scss")
    done()
}

const buildPugs = (done) => {
    console.log("pug file was changed on dist/pages")
    done()
}

const development = () => {
    development.init({
        server: "build/"
    })
    watch('dist/scss/*.scss', {events: ['add', 'change', 'unlink']}, buildScss);
    watch('dist/pages/*.pug', {events: ['add', 'change', 'unlink']}, buildPugs);
}

exports.build = parallel(buildSass, buildPug, development);