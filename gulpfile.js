'use strict'

const gulp = require('gulp');
const { src, dest } = require('gulp')

const fileMover = () => {
    return src('test-directory/index.js')
        .pipe(dest('test-directory-2'))
}

const secondFileMover = () => {
    return src('test-directory-2/index.html')
        .pipe(dest('test-directory'))
}

exports.default = secondFileMover;
exports.default = fileMover;