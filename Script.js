let moon = document.querySelector(".fa-moon");
moon.addEventListener("click", MoveLeft);
let Circle = document.querySelector(".circle");
let Mode = document.querySelector("#Main-Part");
let Clock = document.querySelector(".fa-clock");
let divider = document.querySelector(".divider");
let option = document.querySelectorAll(".option");
let Cal_Btn = document.querySelectorAll(".cal-btn");
let Toggle_Btn = document.querySelector(".toggle-btn");
let Cal_Box = document.querySelector(".cal-box");
let Last = document.querySelectorAll(".last");
let MovingCircle = document.querySelector(".moving-circle");

function MoveLeft() {

    Circle.classList.remove("Move_right");
    Circle.classList.add("Move_left");
    Mode.style.backgroundColor = "#2C2F34";
    Clock.style.color = "#FFFFFF";
    divider.style.background = "linear-gradient(black, #2C2F34, #2C2F34)";
    Toggle_Btn.style.background = "#2C2F34";
    Cal_Box.style.color = "#C6C6C6";
    MovingCircle.style.background = "#2C2F34";
    for (let i = 0; i < option.length; i++) {
        option[i].style.color = "#FFFFFF";
    }
    for (let i = 0; i < Cal_Btn.length; i++) {
        Cal_Btn[i].style.background = "#2C2F34";
    }
    for (let i = 0; i < Last.length; i++) {
        Last[i].style.color = "#FFFFFF";
    }

}

let sun = document.querySelector(".fa-sun");
sun.addEventListener("click", MoveRight);

function MoveRight() {

    Circle.classList.remove("Move_left");
    Circle.classList.add("Move_right");
    Mode.style.backgroundColor = "#E7EBF0";
    Clock.style.color = "black";
    divider.style.background = "linear-gradient(#B8B8B8, #E7EBF0, #FFFFFF)";
    Toggle_Btn.style.background = "#C1D0E2";
    Cal_Box.style.color = "#C1D0E2";
    MovingCircle.style.background = "#E7EBF0";
    for (let i = 0; i < option.length; i++) {
        option[i].style.color = "#000000";
    }
    for (let i = 0; i < Cal_Btn.length; i++) {
        Cal_Btn[i].style.background = "#E7EBF0";
    }
    for (let i = 0; i < Last.length; i++) {
        Last[i].style.color = "#000000";
    }

}
