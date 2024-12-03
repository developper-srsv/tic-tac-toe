let boxes = document.querySelectorAll(".boxes");
let resetbtn = document.querySelector(".reset-btn");
let para = document.querySelector("#msg")
let newgame = document.querySelector(".msg-container");
let newbtn = document.querySelector("#new-btn");
let turn0 = true;
let count = 0;
let winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetgame = () => {
    turn0 = true;
    count=0;
    enablebtn();
    newgame.classList.add("hide");

};

boxes.forEach((box) => {
    box.addEventListener("click", function () {
        if (turn0) {
            box.innerText = "0";
            box.style.color = "#EF3E36";
            turn0 = false;

        }
        else {
            box.innerText = "X";
            box.style.color = "green"
            turn0 = true;

        }
        box.disabled = true;
        count++;
        // checkwinner();
        let iswin = checkwinner();
        if (count === 9 && !iswin) {
            drawgame();
        }
    });
});

function drawgame() {

    para.innerText = "Game is Drawn";
    newgame.classList.remove("hide");
    disablebtn();
}

const disablebtn = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enablebtn = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    };
};

const showwinner = (winner) => {
    para.innerText = ` Congratulations! Winner is ${winner}`;
    newgame.classList.remove("hide");
    disablebtn();
}
function checkwinner() {
    for(let pattern of winpatterns) {
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
        posval1 = boxes[pattern[0]].innerText;
        posval2 = boxes[pattern[1]].innerText;
        posval3 = boxes[pattern[2]].innerText;
        if (posval1 != "" && posval2 != "" && posval3 != "") {
            if (posval1 === posval2 && posval2 === posval3) {
                showwinner(posval1);
                return true;
            }
        }
    };
}

newbtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);

