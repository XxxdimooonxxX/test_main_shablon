export function img_in_bg(el_withImg){
    el_withImg.style.backgroundImage = "url('"+el_withImg.querySelector("img").src+"')";
}
