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
document.getElementById("turn").innerHTML = "Its your turn, X";

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

// gameboard.addEventListener("click", function()  {
//     let countXrow = 0;
//     let countOrow = 0;
//     let countXcol = 0;
//     let countOcol = 0;
//     let countXdiag = 0;
//     let countOdiag = 0;
//     for(let i = 0; i < 3; i++) {
//         for(let j = 0; j < 3; j++) {
//             //Rows
//             if(arr[i][j] == 'X') {
//                 countXcol += 1;
//             }
//             else if(arr[i][j] == 'O') {
//                 countOcol += 1;
//             }
//         }
//         //Columns
//         if(arr[i][0] == 'X') {
//             countXrow += 1;
//         }
//         else if(arr[i][0] == 'O') {
//             countOrow += 1;
//         }
//     }
//     if(countXrow == 3 || countXcol == 3 || countXdiag == 3) {
//         winner.innerHTML = "Player 1 is the winner";
//     }
//     else if(countOrow == 3 || countOcol == 3 || countOdiag == 3) {
//         winner.innerHTML = "Player 2 is the winner";
//     }
// });
function checkWin() {
    for (let i = 0; i < 3; i++) {
      if (arr[i][0] !== "" && arr[i][0] === arr[i][1] && arr[i][1] === arr[i][2]) {
        winner.innerHTML = "Player " + arr[i][0] +  " is the winner";
    }
    for (let j = 0; j < 3; j++) {
      if (arr[0][j] !== "" && arr[0][j] === arr[1][j] && arr[1][j] === arr[2][j]) {
        winner.innerHTML = "Player " + arr[0][j] +  " is the winner";
      }
    }
    if (arr[0][0] !== "" && arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2]) {
        winner.innerHTML = "Player " + arr[0][0] +  " is the winner";
    }
    if (arr[0][2] !== "" && arr[0][2] === arr[1][1] && arr[1][1] === arr[2][0]) {
        winner.innerHTML = "Player " + arr[0][2] +  " is the winner";
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
    /*Reset Score*/
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