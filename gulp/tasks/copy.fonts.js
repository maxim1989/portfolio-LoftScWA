'use strict';

module.exports = function() {
    $.gulp.task('copy:fonts', function() {

        let fonts = $.gulp.src('./source/fonts/**/*.*')
            .pipe($.gulp.dest($.config.root + '/assets/fonts/'));

        return $.merge(fonts);
    });
};