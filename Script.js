let moon = document.querySelector(".fa-moon");
moon.addEventListener("click", MoveLeft);
let Circle = document.querySelector(".circle");
let Mode = document.querySelector("#Main-Part");
let Clock = document.querySelector(".fa-clock");
let Calculator = document.querySelector(".fa-calculator");
let divider = document.querySelector(".divider");
let option = document.querySelectorAll(".option");
let Cal_Btn = document.querySelectorAll(".cal-btn");
let Toggle_Btn = document.querySelector(".toggle-btn");
let Cal_Box = document.querySelector(".cal-box");
let Last = document.querySelectorAll(".last");
let Memory = document.querySelector(".Memory");
let Record = document.querySelector(".record");
let Second_Record = document.querySelector(".second-record");
let MovingCircle = document.querySelector(".moving-circle");
// let var_Item = document.querySelectorAll(".var-Item");

let buttons = document.querySelectorAll(".var-Item");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        buttons[i].classList.add("moving-circle");
        buttons[i].style.background = "#E7EBF0";
        for (let j = 0; j < buttons.length; j++) {
            if (j !== i) {
                buttons[j].classList.remove("moving-circle");
                buttons[j].style.background = "unset";
            }
        }
    });
}
let flag = 0;
function MoveLeft() {
    flag = 1;
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            buttons[i].style.background = "#2C2F34";
            buttons[i].classList.add("moving-circle");
            for (let j = 0; j < buttons.length; j++) {
                if (j !== i) {
                    buttons[j].classList.remove("moving-circle");
                    buttons[j].style.background = "unset";
                }
            }
        });
    }
    Circle.classList.remove("Move_right");
    Circle.classList.add("Move_left");
    Mode.style.backgroundColor = "#2C2F34";
    Clock.style.color = "#FFFFFF";
    divider.style.background = "linear-gradient(black, #2C2F34, #2C2F34)";
    Toggle_Btn.style.background = "#2C2F34";
    Cal_Box.style.color = "#C6C6C6";
    MovingCircle.style.background = "#2C2F34";
    Memory.style.backgroundColor = "#697F86";
    Calculator.style.color = "#697F86";
    // Record.style.color = "#FFFFFF";
    Clock.addEventListener("click", function () {
        Clock.style.color = "#697F86";
        Calculator.style.color = "#FFFFFF";
    })
    Calculator.addEventListener("click", function () {
        Calculator.style.color = "#697F86";
        Clock.style.color = "#FFFFFF";
    })
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
    flag = 0;
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            buttons[i].classList.add("moving-circle");
            buttons[i].style.background = "#E7EBF0";
            for (let j = 0; j < buttons.length; j++) {
                if (j !== i) {
                    buttons[j].classList.remove("moving-circle");
                    buttons[j].style.background = "unset";
                }
            }
        });
    }
    // Record.style.color = "#75889E";
    Circle.classList.remove("Move_left");
    Circle.classList.add("Move_right");
    Calculator.style.color="7E99B9";
    Clock.style.color="black";
    Mode.style.backgroundColor = "#E7EBF0";
    divider.style.background = "linear-gradient(#B8B8B8, #E7EBF0, #FFFFFF)";
    Toggle_Btn.style.background = "#C1D0E2";
    Cal_Box.style.color = "#C1D0E2";
    Memory.style.backgroundColor = "#C3D1E2";
    MovingCircle.style.background = "#E7EBF0";
    if (Memory.style.display === "block"){
        Calculator.style.color="#000000";
        Clock.style.color="#7E99B9"
    }else {
        Calculator.style.color="#7E99B9";
        Clock.style.color="#000000"
    }
    Clock.addEventListener("click", function () {
        Clock.style.color = "#7E99B9";
        Calculator.style.color = "#000000";
    })
    Calculator.addEventListener("click", function () {
        Calculator.style.color = "#7E99B9";
        Clock.style.color = "#000000";
    })
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

let x = 0;
let CalBox = document.querySelector(".cal-box");
let Btns = document.getElementsByTagName("button");
for (let i = 0; i < Btns.length; i++) {
    Btns[i].addEventListener("click", function () {
        let FinalResult = document.querySelector(".result");
        let Value = CalBox.innerHTML;
        while (x < 1) {
            CalBox.innerHTML = "";
            x++;
        }
        let txt = Btns[i].innerText;
        switch (Btns[i].textContent) {
            case "Ac":
                CalBox.innerHTML = "0";
                x--;
                break;
            case "C":
                CalBox.innerHTML = CalBox.innerHTML.slice(0, -1);
                if (CalBox.innerHTML.length === 0 || CalBox.innerHTML === "0") {
                    CalBox.innerHTML = "0";
                    x--;
                }
                break;
            case "=":

                function Recording() {
                    let Finaly = document.querySelector(".result");
                    let Rec = document.createElement("p");
                    let Second_Rec = document.createElement("p");
                    Rec.classList.add("record");
                    Rec.innerHTML += CalBox.textContent;
                    let Record_Box = document.querySelector(".records");
                    if (flag === 1){
                        console.log("hi");
                        Rec.style.color="#FFFFFF";
                    }else {
                        Rec.style.color="#75889E";
                    }
                    Record_Box.appendChild(Rec);

                    Second_Rec.classList.add("second-record");
                    Second_Rec.innerHTML += Finaly.textContent;
                    if (flag === 1){
                        console.log("hi");
                        Second_Rec.style.borderBottom="1px solid #FFFFFF";
                    }else {
                        Second_Rec.style.borderBottom="1px solid #75889E";
                    }
                    Record_Box.appendChild(Second_Rec);
                    let hide = document.querySelector(".Empty");
                    hide.style.display = "none";
                    let Trash = document.querySelector(".fa-trash");
                    Trash.classList.remove("Trash");
                }

                Recording();
                break;


            default:
                CalBox.innerHTML += txt;
                let FinalResult = document.querySelector(".result");
                let Value = CalBox.innerHTML;
                Value = Value.replaceAll("÷", "/");
                Value = Value.replaceAll("×", "*");
                FinalResult.innerHTML = eval(Value);
                if (FinalResult.textContent.length >= 12) {
                    FinalResult.classList.remove("big-font");
                    FinalResult.classList.add("small-font");
                } else {
                    FinalResult.classList.remove("small-font");
                    FinalResult.classList.add("big-font");
                }
                console.log(FinalResult.textContent.length);
                break;
        }
        if (CalBox.innerHTML === "×") {
            CalBox.innerHTML = "0×";
        }
        if (CalBox.innerHTML === "÷") {
            CalBox.innerHTML = "0÷";

        }
        if (CalBox.innerHTML === "+") {
            CalBox.innerHTML = "0+";
        }
        if (CalBox.innerHTML === "-") {
            CalBox.innerHTML = "0-";
        }
        if (CalBox.innerHTML === "=") {
            CalBox.innerHTML = "0";
        }
        if (CalBox.innerHTML === "%") {
            CalBox.innerHTML = "0%";
        }
        FinalResult = document.querySelector(".result");
        if (CalBox.textContent.slice(-1) === "=") {
            CalBox.innerHTML = FinalResult.textContent;
            console.log(CalBox.textContent);
            console.log(FinalResult.textContent);
        }

    });


}
Clock.addEventListener("click", Open_Memory);

function Open_Memory() {
    let Memory = document.querySelector(".Memory");
    Memory.style.display = "block";
    Clock.style.color = "#7E99B9";
    let Calc = document.querySelector(".fa-calculator");
    Calc.style.color = "black";
}

Calculator.addEventListener("click", Close_Memory);

function Close_Memory() {
    let Memory = document.querySelector(".Memory");
    Memory.style.display = "none";
    Calculator.style.color = "#7E99B9";
    Clock.style.color = "black";
}

console.log(CalBox.textContent[CalBox.textContent.length - 1]);


let Trash = document.querySelector(".fa-trash");
Trash.addEventListener("click", Remove);

function Remove() {
    let Record_Box = document.querySelector(".records");
    // Record_Box.innerHTML = "";
    while (Record_Box.firstChild) {
        Record_Box.removeChild(Record_Box.lastChild);
    }
    Trash.classList.add("Trash");
    let empty = document.querySelector(".Empty");
    empty.style.display = "block";
}


