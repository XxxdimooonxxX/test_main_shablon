// импорт функции, которая определяет, поддерживает ли браузер webp или нет
import * as flsFunctions from "./modules/function.js";
// импора функции изменения размера элемента во весь экран
import * as fullscreen from "./modules/main_fullscreen.js";
// импорт функции для вставки картинки на фон элемента
import * as image_in_background from "./modules/image_in_bavkground.js";

// =======================================================================================

// вызов функции, которая определяет, поддерживает ли браузер webp или нет
flsFunctions.isWebp();
// вызов функции изменения размера элемента во весь экран
fullscreen.fullscreen(document.querySelector(".main"));
// вызов функции для вставки картинки на фон элемента
image_in_background.img_in_bg(document.querySelector(".bg-image"));

