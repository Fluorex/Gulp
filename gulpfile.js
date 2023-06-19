'use strict'

const { parallel } = require('gulp');

const firstFunction = (done) => {
    const a = 10;
    const b = 5;
    console.log('sum = ' + a + ' ' + b)
    done()
}

const secondFunction = (done) => {
    console.log('second function completed')
    done()
}

const thirdFunction = (done) => {
    const arr = [3, 6, 8];
    const iterator = arr[Symbol.iterator]()
    console.log(iterator.next())
    done()
}

exports.default = parallel(firstFunction, secondFunction, thirdFunction)
exports.lastFunction = thirdFunction;