document.onkeyup = function (e) {
    // console.log("yo" + e.keyCode);
    // console.log(e.keycode)
    if (e.keyCode == 38) {
        let
            bike = document.querySelector(".bike")
        bike.classList.add("animationbike");
        // console.log("hi")
        setTimeout(() => {
            bike.classList.remove("animationbike");

        }, 700)

    }
    if (e.keyCode == 39) {
        bike = document.querySelector(".bike");
        bikex = parseInt(window.getComputedStyle(bike, null).getPropertyValue("left"));
        bike.style.left = (bikex + 112) + "px"

    }
    if (e.keyCode == 37) {
        bike = document.querySelector(".bike");
        bikex = parseInt(window.getComputedStyle(bike, null).getPropertyValue("left"));
        bike.style.left = (bikex - 112) + "px"
    }


}
let score = 0;
cross = true


setInterval(() => {

    bike = document.querySelector(".bike");
    car = document.querySelector(".car");
    gameover = document.querySelector(".gameover");
    carani = document.querySelector(".carani")
    bx = parseInt(window.getComputedStyle(bike, null).getPropertyValue("left"));
    // console.log(bx);
    by = parseInt(window.getComputedStyle(bike, null).getPropertyValue("bottom"));

    cx = parseInt(window.getComputedStyle(car, null).getPropertyValue("left"));
    cy = parseInt(window.getComputedStyle(car, null).getPropertyValue("bottom"));

    ofsetx = Math.abs(bx - cx);
    ofsety = Math.abs(by - cy);

    // console.log(ofsety);
    // console.log(ofsetx);
    if (ofsetx < 100 && ofsety < 54) {

        car.classList.remove("carani");
        gameover.style.visibility = "visible";
        // updatescore(score)
    }
    
    else if (ofsetx < 93 && cross) {
        score+=1;
        updatescore(score)
        cross = false
        setTimeout(() => {
            cross = true;
        }, 1000);



        setTimeout(() => {
            ghh = parseInt(window.getComputedStyle(carani, null).getPropertyValue("animation-duration"));
            newdur = ghh - 0.1;
            carani.style.animationDuration = newdur + 's';
        }, 500);

    }

    
}, 10)



function updatescore(score) {
    document.querySelector(".score").innerHTML = ("your score:" + score)
}


