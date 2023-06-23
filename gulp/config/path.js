import * as nodePath from 'path';
const root_folder = nodePath.basename( nodePath.resolve() );

const build_folder = './build';
const src_folder = './src';

export const path = {
    build: {
        images: `${build_folder}/images/`,
        js: `${build_folder}/js/`,
        css: `${build_folder}/css/`,
        html: `${build_folder}/`,
        fonts: `${build_folder}/fonts/`,
        files: `${build_folder}/files/`
    },
    src: {
        images: `${src_folder}/images/**/*.*`,
        js: `${src_folder}/js/main.js`,
        scss: `${src_folder}/scss/style.scss`,
        html: `${src_folder}/*.html`,
        fonts: `${src_folder}/fonts/*.ttf`,
        files: `${src_folder}/files/**/*.*`,
        svgicons: `${src_folder}/svgicons/*.svg`
    },
    watch: {
        images: `${src_folder}/images/**/*.*`,
        js: `${src_folder}/js/**/*.js`,
        scss: `${src_folder}/scss/**/*.scss`,
        html: `${src_folder}/**/*.html`,
        files: `${src_folder}/files/**/*.*`
    },
    clean: build_folder,
    build_folder: build_folder,
    src_folder: src_folder,
    root_folder: root_folder,
    ftp: ''
}