const topleft = document.getElementById("one");
const topcenter = document.getElementById("two");
const topright = document.getElementById("three");
const middleleft = document.getElementById("four");
const middlecenter = document.getElementById("five");
const middleright = document.getElementById("six");
const bottomleft = document.getElementById("seven");
const bottomcenter = document.getElementById("eight");
const bottomright = document.getElementById("nine");
const gameboard = document.getElementById("game_board");
const winner = document.getElementById("winner") ;
const player1score = document.getElementById("player1_score");
const player2score = document.getElementById("player2_score");

document.getElementById("turn").innerHTML = "Its your turn, X";
player1score.innerHTML = "0";
player2score.innerHTML = "0";

let player1 = 0;
let player2 = 0;
let turn = 0;
let arr = [[""]];

// for(let i = 0; i < 3; i++) {
//     arr[i] = [""];
// }

for (let i = 0; i < 3; i++){
    arr[i] = new Array(3);
    for (let j = 0; j < 3; j++){
        arr[i][j] = "";
    }
}

topleft.addEventListener("click", function() {
    if(turn % 2 == 0) {
        arr[0][0] = 'X';
    }
    else {
        arr[0][0] = 'O';
    }
    clickTile(topleft)
    // topleft.removeEventListener("click", onClick());
}); 
topcenter.addEventListener("click",function() {
    if(turn % 2 == 0) {
        arr[0][1] = 'X';
    }
    else {
        arr[0][1] = 'O';
    }
    clickTile(topcenter);
});
topright.addEventListener("click",function() {
    if(turn % 2 == 0) {
        arr[0][2] = 'X';
    }
    else {
        arr[0][2] = 'O';
    }
    clickTile(topright);
});
middleleft.addEventListener("click",function() {
    if(turn % 2 == 0) {
        arr[1][0] = 'X';
    }
    else {
        arr[1][0] = 'O';
    }
    clickTile(middleleft);
});
middlecenter.addEventListener("click",function() {
    if(turn % 2 == 0) {
        arr[1][1] = 'X';
    }
    else {
        arr[1][1] = 'O';
    }
    clickTile(middlecenter);
});
middleright.addEventListener("click",function() {
    if(turn % 2 == 0) {
        arr[1][2] = 'X';
    }
    else {
        arr[1][2] = 'O';
    }
    clickTile(middleright);
});
bottomleft.addEventListener("click",function() {
    if(turn % 2 == 0) {
        arr[2][0] = 'X';
    }
    else {
        arr[2][0] = 'O';
    }
    clickTile(bottomleft);
});
bottomcenter.addEventListener("click",function() {
    if(turn % 2 == 0) {
        arr[2][1] = 'X';
    }
    else {
        arr[2][1] = 'O';
    }
    clickTile(bottomcenter);
});
bottomright.addEventListener("click",function() {
    if(turn % 2 == 0) {
        arr[2][2] = 'X';
    }
    else {
        arr[2][2] = 'O';
    }
    clickTile(bottomright);
});

function checkWin() {
    for (let i = 0; i < 3; i++) {
      if (arr[i][0] !== "" && arr[i][0] === arr[i][1] && arr[i][1] === arr[i][2]) {
        winner.innerHTML = "Player " + arr[i][0] +  " is the winner";
        if(arr[i][0] == 'X') { player1 += 1; player1score.innerHTML = player1; }
        else { player2 += 1; player2score.innerHTML = player2; }
        return;
    }
    for (let j = 0; j < 3; j++) {
      if (arr[0][j] !== "" && arr[0][j] === arr[1][j] && arr[1][j] === arr[2][j]) {
        winner.innerHTML = "Player " + arr[0][j] +  " is the winner";
        if(arr[0][j] == 'X') { player1 += 1; player1score.innerHTML = player1; }
        else { player2 += 1; player2score.innerHTML = player2; }
        return;
      }
    }
    if (arr[0][0] !== "" && arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2]) {
        winner.innerHTML = "Player " + arr[0][0] +  " is the winner";
        if(arr[0][0] == 'X') { player1 += 1; player1score.innerHTML = player1; }
        else { player2 += 1; player2score.innerHTML = player2; }
        return;
    }
    if (arr[0][2] !== "" && arr[0][2] === arr[1][1] && arr[1][1] === arr[2][0]) {
        winner.innerHTML = "Player " + arr[0][2] +  " is the winner";
        if(arr[0][2] == 'X') { player1 += 1; player1score.innerHTML = player1; }
        else { player2 += 1; player2score.innerHTML = player2; }
        return;
    }
    winner.innerHTNL = "No Winners";
  }
}

function clickTile(temp){
    console.log(arr);
    if(turn % 2 == 0) {
        temp.getElementsByClassName("xo")[0].innerHTML = "X";
        document.getElementById("turn").innerHTML = "Its your turn, O";
        checkWin();
    }
    else{ 
        temp.getElementsByClassName("xo")[0].innerHTML = "O";
        document.getElementById("turn").innerHTML = "Its your turn, X";
        checkWin();
    }
    turn+=1;
}

document.getElementById("reset").addEventListener("click",function(){
    document.getElementById("one").getElementsByClassName("xo")[0].innerHTML = "";
    document.getElementById("two").getElementsByClassName("xo")[0].innerHTML = "";
    document.getElementById("three").getElementsByClassName("xo")[0].innerHTML = "";
    document.getElementById("four").getElementsByClassName("xo")[0].innerHTML = "";
    document.getElementById("five").getElementsByClassName("xo")[0].innerHTML = "";
    document.getElementById("six").getElementsByClassName("xo")[0].innerHTML = "";
    document.getElementById("seven").getElementsByClassName("xo")[0].innerHTML = "";
    document.getElementById("eight").getElementsByClassName("xo")[0].innerHTML = "";
    document.getElementById("nine").getElementsByClassName("xo")[0].innerHTML = "";
    document.getElementById("turn").innerHTML = "Its your turn, X";
    turn = 0;
    winner.innerHTML = "";
    for (let i = 0; i < 3; i++){
        arr[i] = new Array(3);
        for (let j = 0; j < 3; j++){
            arr[i][j] = "";
        }
    }
    player1 = 0;
    player2 = 0;
    player1score.innerHTML = player1;
    player2score.innerHTML = player2;
});

document.getElementById("new_game").addEventListener("click",function(){
    document.getElementById("one").getElementsByClassName("xo")[0].innerHTML = "";
    document.getElementById("two").getElementsByClassName("xo")[0].innerHTML = "";
    document.getElementById("three").getElementsByClassName("xo")[0].innerHTML = "";
    document.getElementById("four").getElementsByClassName("xo")[0].innerHTML = "";
    document.getElementById("five").getElementsByClassName("xo")[0].innerHTML = "";
    document.getElementById("six").getElementsByClassName("xo")[0].innerHTML = "";
    document.getElementById("seven").getElementsByClassName("xo")[0].innerHTML = "";
    document.getElementById("eight").getElementsByClassName("xo")[0].innerHTML = "";
    document.getElementById("nine").getElementsByClassName("xo")[0].innerHTML = "";
    document.getElementById("turn").innerHTML = "Its your turn, X";
    turn = 0;
    winner.innerHTML = "";
    for (let i = 0; i < 3; i++){
        arr[i] = new Array(3);
        for (let j = 0; j < 3; j++){
            arr[i][j] = "";
        }
    }
});