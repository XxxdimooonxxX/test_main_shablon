// Получаем имя папки проекта
import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const srcFolder = "./src";
const buildFolder = "./_main";

export const path = {
    build: {
        css: `${buildFolder}/css/`,
        js: `${buildFolder}/js/`,
        html: `${buildFolder}/`,
        images: `${buildFolder}/img/`,
    },
    src: {
        scss: `${srcFolder}/scss/style.scss`,
        js: `${srcFolder}/js/app.js`,
        html: `${srcFolder}/*.html`,
        images: `${srcFolder}/img/**/*.+(png|jpg|jpeg|gif|webp)`,
        svg: `${srcFolder}/img/**/*.svg`,
    },
    watch: {
        scss: `${srcFolder}/scss/**/*.scss`,
        js: `${srcFolder}/js/**/*.js`,
        html: `${srcFolder}/**/*.html`,
        images: `${srcFolder}/img/**/*.+(jpg|jpeg|png|svg|ico|gif|webp)`,
    },
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
};
