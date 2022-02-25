// Основной модуль
import gulp from "gulp";
// Импорт конфига с путями
import {path} from "./gulp/config/path.js";
// импорт всех плагинов
import {plugins} from "./gulp/config/plugins.js";

// для использования значений во всех файлах, кро ме этого, передаём их в глобальную переменную
global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins,
};

// Импортирование задач
import {resetBuildFolder} from "./gulp/tasks/reset.js"; // обнавление собранной папки
import {html} from "./gulp/tasks/html.js"; // обнавление собранной папки
import {server} from "./gulp/tasks/server.js" // запуск локального сервера
import {scss} from "./gulp/tasks/scss.js" //компилятор scss
import {js} from "./gulp/tasks/js.js" //
import {images} from "./gulp/tasks/images.js" //

// Наблюдатели
function watcher(){
    gulp.watch(app.path.watch.html, html);
    gulp.watch(app.path.watch.scss, scss);
    gulp.watch(app.path.watch.js, js);
    gulp.watch(app.path.watch.images, images);
}

//основные задачи, которые будут выполнятся паралельно
const mainTasks = gulp.parallel(html, scss, js, images);

// порядок выполнения задач  с помощью метода series
const dev = gulp.series(resetBuildFolder, mainTasks, gulp.parallel(watcher, server));

// выполнение сценария по умолчанию, запускается после команды gulp
gulp.task('default', dev);


