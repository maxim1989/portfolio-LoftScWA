'use strict';

module.exports = function() {
  $.gulp.task('sprite:graphic', function() {
      let spritePng = $.gulp.src('./source/sprite/**/*.png')
          .pipe($.gp.spritesmith({
              imgName: 'spritePng.png',
              cssName: 'spritePng.css'
          }));

      let imgPngStream = spritePng.img
          .pipe($.buffer())
          .pipe($.gp.imagemin())
          .pipe($.gulp.dest('./source/images/'));

      let cssPngStream = spritePng.css
          .pipe($.gp.replace(/url\(/g, 'url(../img/'))
          .pipe($.gp.rename(function (path) {
              path.extname = ".scss"
          }))
          .pipe($.gulp.dest('./source/style/'));

      let spriteJpg = $.gulp.src('./source/sprite/**/*.jpg')
          .pipe($.gp.spritesmith({
              imgName: 'spriteJpg.jpg',
              cssName: 'spriteJpg.css'
          }));

      let imgJpgStream = spriteJpg.img
          .pipe($.buffer())
          .pipe($.gp.imagemin())
          .pipe($.gulp.dest('./source/images/'));

      let cssJpgStream = spriteJpg.css
          .pipe($.gp.replace(/url\(/g, 'url(../img/'))
          .pipe($.gp.rename(function (path) {
              path.extname = ".scss"
          }))
          .pipe($.gulp.dest('./source/style/'));

      return $.merge(imgPngStream, cssPngStream, imgJpgStream, cssJpgStream);
  });
};

