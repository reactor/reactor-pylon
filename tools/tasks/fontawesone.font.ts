import {APP_DEST} from '../config';

export = function fontawesone(gulp, plugins) {

  return function () {
    return gulp.src('./node_modules/font-awesome/fonts/**.*')
      .pipe(gulp.dest(APP_DEST + '/assets/fonts'));
  };
}
