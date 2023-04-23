let topleft = document.getElementById("one");
let topcenter = document.getElementById("two");
let topright = document.getElementById("three");
let middleleft = document.getElementById("four");
let middlecenter = document.getElementById("five");
let middleright = document.getElementById("six");
let bottomleft = document.getElementById("seven");
let bottomcenter = document.getElementById("eight");
let bottomright = document.getElementById("nine");
const gameboard = document.getElementById("game_board");
const winner = document.getElementById("winner") ;
const player1score = document.getElementById("player1_score");
const player2score = document.getElementById("player2_score");
const displayturn = document.getElementById("turn");
const playwithai = document.getElementById("playwithai");
const selecttwoplayer = document.getElementById("selecttwoplayer");

class playerMoves {
    constructor() {
        this.moveNum = 0;
        this.moveX = [];
        this.moveY = [];
    }
    
    addmove(x, y) {
        this.moveX.push(x);
        this.moveY.push(y);
        this.moveNum+=1;
    }

    popfront() {
        let tempX = this.moveX.shift();
        let tempY = this.moveY.shift();
        if(tempX == 0 && tempY == 0) {
            topleft = document.getElementById("one");
            topleft.getElementsByClassName("xo")[0].innerHTML = "";
            topleft.addEventListener("click", function onClick() {clickTile(topleft)}, {once: true});
            console.log("popping");
        }
        else if(tempX == 0 && tempY == 1) { 
            topcenter = document.getElementById("two");
            topcenter.getElementsByClassName("xo")[0].innerHTML = "";
            topcenter.addEventListener("click", function onClick() {clickTile(topcenter)}, {once: true});
            console.log("popping");
        }
        else if(tempX == 0 && tempY == 2) {
            topright = document.getElementById("three");
            topright.getElementsByClassName("xo")[0].innerHTML = "";
            topright.addEventListener("click", function onClick() {clickTile(topright)}, {once: true});
            console.log("popping");
        }
        else if(tempX == 1 && tempY == 0) {
            middleleft = document.getElementById("four");
            middleleft.getElementsByClassName("xo")[0].innerHTML = "";
            middleleft.addEventListener("click", function onClick() {clickTile(middleleft)}, {once: true});
            console.log("popping");
        }
        else if(tempX == 1 && tempY == 1) {
            middlecenter = document.getElementById("five");
            middlecenter.getElementsByClassName("xo")[0].innerHTML = "";
            middlecenter.addEventListener("click", function onClick() {clickTile(middlecenter)}, {once: true});
            console.log("popping");
        }
        else if(tempX == 1 && tempY == 2) {
            middleright = document.getElementById("six");
            middleright.getElementsByClassName("xo")[0].innerHTML = "";
            middleright.addEventListener("click", function onClick() {clickTile(middleright)}, {once: true});
            console.log("popping");
        }
        else if(tempX == 2 && tempY == 0) {
            bottomleft = document.getElementById("seven");
            bottomleft.getElementsByClassName("xo")[0].innerHTML = "";
            bottomleft.addEventListener("click", function onClick() {clickTile(bottomleft)}, {once: true});
            console.log("popping");
        }
        else if(tempX == 2 && tempY == 1) {
            bottomcenter = document.getElementById("eight");
            bottomcenter.getElementsByClassName("xo")[0].innerHTML = "";
            bottomcenter.addEventListener("click", function onClick() {clickTile(bottomcenter)}, {once: true});
            console.log("popping");
        }
        else if(tempX == 2 && tempY == 2) {
            bottomright = document.getElementById("nine");
            bottomright.getElementsByClassName("xo")[0].innerHTML = "";
            bottomright.addEventListener("click", function onClick() {clickTile(bottomright)}, {once: true});
            console.log("popping");
        }
        this.moveNum -= 1;
    } 
}

displayturn.innerHTML = "Its your turn, X";
player1score.innerHTML = "0";
player2score.innerHTML = "0";

let time;
let remainingTime = 15;

let playai = false;
let player1 = 0;
let player2 = 0;
let turn = 0;
let player1moves = new playerMoves();
let player2moves = new playerMoves();

var arr = [[""]];
for (let i = 0; i < 3; i++){
    arr[i] = new Array(3);
    for (let j = 0; j < 3; j++){
        arr[i][j] = "";
    }
}

playwithai.addEventListener("click" , function(){ playai = true; console.log("Play With AI Enabled")});
selecttwoplayer.addEventListener("click" , function(){ playai = false; console.log("Player With Two Players Enabled");});

function addListeners () {
    topleft = document.getElementById("one");
    topcenter = document.getElementById("two");
    topright = document.getElementById("three");
    middleleft = document.getElementById("four");
    middlecenter = document.getElementById("five");
    middleright = document.getElementById("six");
    bottomleft = document.getElementById("seven");
    bottomcenter = document.getElementById("eight");
    bottomright = document.getElementById("nine");    
    topleft.addEventListener("click", function onClick() {clickTile(topleft)}, {once: true});
    topcenter.addEventListener("click", function onClick() {clickTile(topcenter)}, {once: true});
    topright.addEventListener("click", function onClick() {clickTile(topright)}, {once: true});
    middleleft.addEventListener("click", function onClick() {clickTile(middleleft)}, {once: true});    
    middlecenter.addEventListener("click", function onClick() {clickTile(middlecenter)}, {once: true});
    middleright.addEventListener("click", function onClick() {clickTile(middleright)}, {once: true});
    bottomleft.addEventListener("click", function onClick() {clickTile(bottomleft)}, {once: true});
    bottomcenter.addEventListener("click", function onClick() {clickTile(bottomcenter)}, {once: true});
    bottomright.addEventListener("click", function onClick() {clickTile(bottomright)}, {once: true});
}

addListeners();

function removeListeners () {
    topleft.replaceWith(topleft.cloneNode(true));
    topcenter.replaceWith(topcenter.cloneNode(true));
    topright.replaceWith(topright.cloneNode(true));
    middleleft.replaceWith(middleleft.cloneNode(true));
    middlecenter.replaceWith(middlecenter.cloneNode(true));
    middleright.replaceWith(middleright.cloneNode(true));
    bottomleft.replaceWith(bottomleft.cloneNode(true));
    bottomcenter.replaceWith(bottomcenter.cloneNode(true));
    bottomright.replaceWith(bottomright.cloneNode(true));    
}
let playerwon = false;
function checkWin() {
        for (let i = 0; i < 3; i++) {
            if (arr[i][0] !== "" && arr[i][0] === arr[i][1] && arr[i][1] === arr[i][2]) {
                winner.innerHTML = "Player " + arr[i][0] +  " is the winner";
                displayturn.innerHTML = "";
                if(arr[i][0] == 'X') { player1 += 1; player1score.innerHTML = player1; }
                else { player2 += 1; player2score.innerHTML = player2; }
                removeListeners();
                clearInterval(countdown);
                clearTimeout(time);
                document.getElementById("playertimer").innerHTML = "";
                document.getElementById("timer").innerHTML = "";
                if (playerwon) {
                    player1 -= 1; player1score.innerHTML = player1;
                }
                if (playai == true && winner.innerHTML == "Player X is the winner"){
                    playerwon = true;
                }
                return;
            }
            for (let j = 0; j < 3; j++) {
                if (arr[0][j] !== "" && arr[0][j] === arr[1][j] && arr[1][j] === arr[2][j]) {
                    winner.innerHTML = "Player " + arr[0][j] +  " is the winner";
                    displayturn.innerHTML = "";
                    if(arr[0][j] == 'X') { player1 += 1; player1score.innerHTML = player1; }
                    else { player2 += 1; player2score.innerHTML = player2; }
                    removeListeners();
                    clearInterval(countdown);
                    clearTimeout(time);
                    document.getElementById("playertimer").innerHTML = "";
                    document.getElementById("timer").innerHTML = "";
                    if (playerwon) {
                        player1 -= 1; player1score.innerHTML = player1;
                    }
                    if (playai == true && winner.innerHTML == "Player X is the winner"){
                        playerwon = true;
                    }
                    return;
                }
            }
            if (arr[0][0] !== "" && arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2]) {
                winner.innerHTML = "Player " + arr[0][0] +  " is the winner";
                displayturn.innerHTML = "";
                if(arr[0][0] == 'X') { player1 += 1; player1score.innerHTML = player1; }
                else { player2 += 1; player2score.innerHTML = player2; }
                removeListeners();
                clearInterval(countdown);
                clearTimeout(time);
                document.getElementById("playertimer").innerHTML = "";
                document.getElementById("timer").innerHTML = "";
                if (playerwon) {
                    player1 -= 1; player1score.innerHTML = player1;
                }
                if (playai == true && winner.innerHTML == "Player X is the winner"){
                    playerwon = true;
                }
                return;
            }
            if (arr[0][2] !== "" && arr[0][2] === arr[1][1] && arr[1][1] === arr[2][0]) {
                winner.innerHTML = "Player " + arr[0][2] +  " is the winner";
                displayturn.innerHTML = "";
                if(arr[0][2] == 'X') { player1 += 1; player1score.innerHTML = player1; }
                else { player2 += 1; player2score.innerHTML = player2; }
                removeListeners();
                clearInterval(countdown);
                clearTimeout(time);
                document.getElementById("playertimer").innerHTML = "";
                document.getElementById("timer").innerHTML = "";
                if (playerwon) {
                    player1 -= 1; player1score.innerHTML = player1;
                }
                if (playai == true && winner.innerHTML == "Player X is the winner"){
                    playerwon = true;
                }                
                return;
            }
        }
    }


function startPlayerTimer(){
    remainingTime = 15;
    time = setTimeout(() => {
        turn+=1;
        if (turn % 2 == 0){
            displayturn.innerHTML = "Previous turn has skipped. Its your turn, X";
        }
        else {
            displayturn.innerHTML = "Previous turn has skipped. Its your turn, O";
        }
        startPlayerTimer();
    }, remainingTime * 1000);
}


twoMinutes = new Date().getTime() + 120000;

var firstclick = (function(){
    click = false;
    return function() {
        if (!click){
            click = true;
            twoMinutes = new Date().getTime() + 120000;
            countdown = setInterval(function() {
                var now = new Date().getTime();
                var remaining = Math.floor((twoMinutes-now)/1000);
                document.getElementById("timer").innerHTML = "Total time remaining: " + Math.floor(remaining/60) + ":" + remaining%60;
                if (remaining <=0) {
                    clearInterval(countdown);
                    removeListeners();
                    winner.innerHTML = "It's a Tie!";
                }
            }, 1000);
        }
    };
})();


function clickTile(temp){
    let i = 0;
    let j = 0;

    firstclick();
    
    if(temp == topleft) {        
        if(turn % 2 == 0) { arr[0][0] = 'X'; player1moves.addmove(0,0);}
        else { arr[0][0] = 'O'; player2moves.addmove(0,0);}
    }
    else if(temp == topcenter) {        
        if(turn % 2 == 0) { arr[0][1] = 'X'; player1moves.addmove(0,1);}
        else { arr[0][1] = 'O'; player2moves.addmove(0,1);}
    }
    else if(temp == topright) {        
        if(turn % 2 == 0) { arr[0][2] = 'X'; player1moves.addmove(0,2);}
        else { arr[0][2] = 'O'; player2moves.addmove(0,2);}
    }
    else if(temp == middleleft) {        
        if(turn % 2 == 0) { arr[1][0] = 'X'; player1moves.addmove(1,0);}
        else { arr[1][0] = 'O';player2moves.addmove(1,0);}
    }
    else if(temp == middlecenter) {        
        if(turn % 2 == 0) { arr[1][1] = 'X'; player1moves.addmove(1,1);}
        else { arr[1][1] = 'O'; player2moves.addmove(1,1);}
    }
    else if(temp == middleright) {        
        if(turn % 2 == 0) { arr[1][2] = 'X'; player1moves.addmove(1,2);}
        else { arr[1][2] = 'O';player2moves.addmove(1,2);}
    }
    else if(temp == bottomleft) {        
        if(turn % 2 == 0) { arr[2][0] = 'X'; player1moves.addmove(2,0);}
        else { arr[2][0] = 'O'; player2moves.addmove(2,0);}
    }
    else if(temp == bottomcenter) {        
        if(turn % 2 == 0) { arr[2][1] = 'X'; player1moves.addmove(2,1);}
        else {arr[2][1] = 'O'; player2moves.addmove(2,1);}
    }
    else if(temp == bottomright) {        
        if(turn % 2 == 0) { arr[2][2] = 'X'; player1moves.addmove(2,2);}
        else {arr[2][2] = 'O'; player2moves.addmove(2,2);}
    }   

    if(player1moves.moveNum % 5 == 0 && player1moves.moveNum != 0) {
        arr[player1moves.moveX[0]][player1moves.moveY[0]] = '';
        player1moves.popfront();    
    }
    else if(player2moves.moveNum % 5 == 0 && player2moves.moveNum != 0) {
        arr[player2moves.moveX[0]][player2moves.moveY[0]] = '';
        player2moves.popfront();
    }   

    console.log(arr);
    if(turn % 2 == 0) {
        clearTimeout(time);
        startPlayerTimer();
        temp.getElementsByClassName("xo")[0].innerHTML = "X";
        displayturn.innerHTML = "Its your turn, O";
        checkWin();
    }
    else{ 
        clearTimeout(time);
        startPlayerTimer();
        temp.getElementsByClassName("xo")[0].innerHTML = "O";
        displayturn.innerHTML = "Its your turn, X";
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
    displayturn.innerHTML = "Its your turn, X";
    turn = 0;
    winner.innerHTML = "";
    for (let i = 0; i < 3; i++){
        arr[i] = new Array(3);
        for (let j = 0; j < 3; j++){
            arr[i][j] = "";
        }
    }
    player1moves = new playerMoves();
    player2moves = new playerMoves();
    player1 = 0;
    player2 = 0;
    player1score.innerHTML = player1;
    player2score.innerHTML = player2;
    clearInterval(countdown);
    clearTimeout(time);
    document.getElementById("playertimer").innerHTML = "";
    document.getElementById("timer").innerHTML = "";
    addListeners();
    click = false;
    twoMinutes = new Date().getTime() + 120000;
    playerwon = false;
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
    player1moves = new playerMoves();
    player2moves = new playerMoves();
    displayturn.innerHTML = "Its your turn, X";
    turn = 0;
    winner.innerHTML = "";
    for (let i = 0; i < 3; i++){
        arr[i] = new Array(3);
        for (let j = 0; j < 3; j++){
            arr[i][j] = "";
        }
    }
    clearInterval(countdown);
    clearTimeout(time);
    document.getElementById("playertimer").innerHTML = "";
    document.getElementById("timer").innerHTML = "";
    addListeners();
    click = false;
    twoMinutes = new Date().getTime() + 120000;
    playerwon = false;
});

setInterval( () => {
    if(playai == true) {
        if(turn % 2 == 1) {
            for(let i = 0; i < 3; i++) {
                let tempflag = false;
                for(let j = 0; j < 3; j++) {
                    if(arr[i][j] == '') {
                        if(i == 0 && j == 0) {
                            topleft.click();
                            tempflag = true;
                            break;
                        }
                        else if(i == 1 && j == 0) {
                            middleleft.click();
                            tempflag = true;
                            break;
                        }
                        else if(i == 2 && j == 0) {
                            bottomleft.click();
                            tempflag = true;
                            break;
                        }
                        else if(i == 0 && j == 1) {
                            topcenter.click();
                            tempflag = true;
                            break;
                        }
                        else if(i == 1 && j == 1) {
                            middlecenter.click();
                            tempflag = true;
                            break;
                        }                    
                        else if(i == 2 && j == 1) {
                            bottomcenter.click();
                            tempflag = true;
                            break;
                        }
                        else if(i == 0 && j == 2) {
                            topright.click();
                            tempflag = true;
                            break;
                        }
                        else if(i == 1 && j == 2) {
                            middleright.click();
                            tempflag = true;
                            break;
                        }
                        else if(i == 2 && j == 2) {
                            bottomright.click();
                            tempflag = true;
                            break;
                        }
                    }
                }
                if(tempflag == true) { break; }
            }
        }
    }
}, 250);