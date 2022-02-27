export function fullscreen(el_fullscreen){
    // el_fullscreen.innerWidth = document.documentElement.clientWidth;
    el_fullscreen.style.minHeight = window.innerHeight + "px";
    // при изменении размера окна
    window.onresize = function(){
        // el_fullscreen.style.width = document.documentElement.clientWidth + "px";
        el_fullscreen.style.minHeight = window.innerHeight + "px";
    }
}
