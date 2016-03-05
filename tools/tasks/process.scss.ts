import * as util from 'gulp-util';
import {APP_SRC, TMP_DIR} from '../config';

export = function processScss(gulp, plugins) {

    let sassOptions = {
      sass: `${APP_SRC}`,
      image: `${APP_SRC}/assets/img`,
      css: `${APP_SRC}`
    };

    return function () {
        return gulp.src(`${APP_SRC}/**/*.scss`)
            .pipe(plugins.compass(sassOptions).on('error', function(err){
              util.log('Error in SASS build:');
              util.log(err);
            }))
            //.pipe(plugins.sass(sassOptions).on('error', plugins.sass.logError))
            .pipe(gulp.dest(`${TMP_DIR}`));
    };
}
