'use strict'

const {watch} = require('gulp')

const scssWatcher = (done) => {
    console.log('unknown delete on scss/common')
    done()
}

const watcher = () => {
    watch('test-directory/*.js', (done) => {
        console.log('.js file on test-directory was updated')
        watch('dist/scss/common/*.scss', {events: ['unlink', 'unlinkDir']}, scssWatcher)
        done()
    })
}

exports.watcher = watcher;

