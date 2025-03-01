let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg-container");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");


const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
};

const drawgame = () => {
    console.log("match was draw");
    msg.innerText = "Game Draw";
    msg.style.backgroundColor = "#b4c51f";

};

const showwinner = (userwin) => {
    if (userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = "you Win!";
        msg.style.backgroundColor = "#1ca80f";
    }
    else {
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = "you lose";
        msg.style.backgroundColor = "red";
    }
};

const playgame = (userchoice) => {
    console.log("user choice =", userchoice);
    document.getElementById("your-sle").innerText = userchoice;    //for print the userchoice in the user-sle id
    const compchoice = gencompchoice();
    console.log("comp choice =", compchoice);
    document.getElementById("comp-sle").innerText = compchoice;    //for print the compchoice in the comp-sle id

    if (userchoice === compchoice) {
        drawgame();
    }
    else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        }
        else if (userchoice === "paper") {
            userwin = compchoice === "scissors" ? false : true;
        }
        else {
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
});
