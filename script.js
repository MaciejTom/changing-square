const square = document.querySelector(".square");


let size = 100;
square.style.width = size + "px";
square.style.height = size + "px";
let bigger = true;


changeSquare = () => {

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
       bigger = !bigger
    } else if (size < 0) {
        bigger = !bigger
    }

}

window.addEventListener("scroll", changeSquare);