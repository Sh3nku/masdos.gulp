import gulp from 'gulp';

import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins
}

import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { ttfToWoff, fontStyle } from "./gulp/tasks/fonts.js";
import { spriteSvg } from "./gulp/tasks/svgsprite.js";

function watcher() {
    gulp.watch( path.watch.files, copy );
    gulp.watch( path.watch.html, html );
    gulp.watch( path.watch.scss, scss );
    gulp.watch( path.watch.js, js );
    gulp.watch( path.watch.images, images );
}

export { spriteSvg }

const fonts = gulp.series( ttfToWoff, fontStyle );

const main_tasks = gulp.series( fonts, gulp.parallel( copy, html, scss, js, images ), spriteSvg );

const dev = gulp.series( reset, main_tasks, gulp.parallel( watcher, server ) );

gulp.task( 'default', dev );