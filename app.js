let gameSeq = [];
let userSeq = [];

let body = document.querySelector("body");

let started = false;
let level = 0;
// let btn  = document.querySelectorAll(".btn");

let btns = ["red", "yellow", "green", "purpule"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function (event) {
  if (started == false) {
    console.log("Game is started");
    started = true;
  }
  levelUp();
});

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 300);
}

function useerBbtnFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 300);
}

function levelUp() {
  userSeq = []; //reset user seq when lev up
  level++;
  h2.innerText = `Level ${level}`; // ("Level "+level)

  //  any random button
  let randomIdx = Math.floor(Math.random() * 3);
  let randomColror = btns[randomIdx];
  // find rand btn by rand class
  let randBtn = document.querySelector(`.${randomColror}`);
  //put that in button flash
  btnFlash(randBtn);

  // console.log(randomIdx);
  // console.log(randomColror);
  // console.log(randBtn);
  gameSeq.push(randomColror);
  console.log(gameSeq);
}

function checkAns(idx) {
  console.log(`you are at level ${level}`);

  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game over! press any key to start again. </br> Your SCORE is <b> ${level} </b>`;
    body.classList.add("red");
    setTimeout(function () {
      body.classList.remove("red");
    }, 200);
    reset();
  }
}

function btnPresed() {
  let btn = this;
  // console.log(this);
  console.log(btn);
  useerBbtnFlash(btn);
  let userClo = btn.getAttribute("id");

  console.log(userClo);

  userSeq.push(userClo);

  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");

for (btn of allBtns) {
  btn.addEventListener("click", btnPresed);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
