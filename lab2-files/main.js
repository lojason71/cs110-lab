const topleft = document.getElementById("one");
const topcenter = document.getElementById("two");
const topright = document.getElementById("three");
const middleleft = document.getElementById("four");
const middlecenter = document.getElementById("five");
const middleright = document.getElementById("six");
const bottomleft = document.getElementById("seven");
const bottomcenter = document.getElementById("eight");
const bottomright = document.getElementById("nine");

let turn = 0;

topleft.addEventListener("click", function() {
    clickTile(topleft)
    topleft.removeEventListener("click", onClick());
}); 
topcenter.addEventListener("click",function() {
    clickTile(topcenter);
});
topright.addEventListener("click",function() {
    clickTile(topright);
});
middleleft.addEventListener("click",function() {
    clickTile(middleleft);
});
middlecenter.addEventListener("click",function() {
    clickTile(middlecenter);
});
middleright.addEventListener("click",function() {
    clickTile(middleright);
});
bottomleft.addEventListener("click",function() {
    clickTile(bottomleft);
});
bottomcenter.addEventListener("click",function() {
    clickTile(bottomcenter);
});
bottomright.addEventListener("click",function() {
    clickTile(bottomright);
});

function clickTile(temp){
    if(turn % 2 == 0) {
        temp.getElementsByClassName("xo")[0].innerHTML = "X";
    }
    else{ 
        temp.getElementsByClassName("xo")[0].innerHTML = "O";
    }
    turn+=1;
}