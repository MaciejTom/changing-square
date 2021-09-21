const square = document.querySelector(".square");


let size = 100;
square.style.width = size + "px";
square.style.height = size + "px";
let bigger = true;


changeSquare = () => {

    // if (size < window.innerWidth / 2) {
    //     square.style.width = size + "px";
    //     square.style.height = size + "px";
    //     size += 10;
    // } else {
    //     square.style.width = size + "px";
    //     square.style.height = size + "px";
    //     size -= 10;
    // }
    if (bigger) {
        square.style.width = size + "px";
        square.style.height = size + "px";
        size += 10;

    } else {
        square.style.width = size + "px";
        square.style.height = size + "px";
        size -= 10;
    }

    if (size > window.innerWidth / 2) {
       bigger = false
    } else if (size < 0) {
        bigger = true
    }


}

window.addEventListener("scroll", changeSquare);