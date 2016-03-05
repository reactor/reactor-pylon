import {join} from 'path';
import {DIST_DIR, GRADLE_DIR} from '../config';

export = function syncBuildDir(gulp, plugins) {
  // TODO There should be more elegant to prevent empty directories from copying
  let es = require('event-stream');
  var onlyDirs = function (es) {
    return es.map(function (file, cb) {
      if (file.stat.isFile()) {
        return cb(null, file);
      } else {
        return cb();
      }
    });
  };
  return function () {
    return gulp.src([join(DIST_DIR, '**')])
      .pipe(onlyDirs(es))
      .pipe(gulp.dest(GRADLE_DIR));
  };
}
