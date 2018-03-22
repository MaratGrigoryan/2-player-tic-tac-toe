var gameblock = document.getElementById('game');
var load = document.getElementById('load');
 for(var i = 1; i <= 9; i++ ){
    gameblock.innerHTML += "<div class='block'></div>"
}
var play = document.getElementById("play");
play.onclick = function () {
    var names = document.getElementById("name");
    names.style.display = "none";
    gameblock.style.display = "block";
    load.style.display = "block";
}
function myFunction() {
    location.reload();
}
var hod = 0;
gameblock.onclick = function (event){
    if(event.target.classsName="block" && hod <= 8){
        if(hod % 2 == 0) {
            event.target.innerHTML = "x";
        }
        else{
            event.target.innerHTML = "o";
        }
        hod++;
        checkWinner();
        // console.log(hod)
    }
    

    function checkWinner(){
        var winner = document.getElementById("winner")
        var allblock = document.getElementsByClassName('block');
        var player1 = document.getElementById("player1").value;
        var player2 = document.getElementById("player2").value;
        if(allblock[0].innerHTML == "x" && allblock[1].innerHTML == "x" && allblock[2].innerHTML == "x" ||
        allblock[3].innerHTML == "x" && allblock[4].innerHTML == "x" && allblock[5].innerHTML == "x" ||
        allblock[6].innerHTML == "x" && allblock[7].innerHTML == "x" && allblock[8].innerHTML == "x" ||
        allblock[0].innerHTML == "x" && allblock[3].innerHTML == "x" && allblock[6].innerHTML == "x" ||
        allblock[1].innerHTML == "x" && allblock[4].innerHTML == "x" && allblock[7].innerHTML == "x" ||
        allblock[2].innerHTML == "x" && allblock[5].innerHTML == "x" && allblock[8].innerHTML == "x" ||
        allblock[0].innerHTML == "x" && allblock[4].innerHTML == "x" && allblock[8].innerHTML == "x" ||
        allblock[2].innerHTML == "x" && allblock[4].innerHTML == "x" && allblock[6].innerHTML == "x"){
            gameblock.innerHTML = "Winner " + player1;
            gameblock.style.background = "orange";
            hod = 9;
        }

        if(allblock[0].innerHTML == "o" && allblock[1].innerHTML == "o" && allblock[2].innerHTML == "o" ||
        allblock[3].innerHTML == "o" && allblock[4].innerHTML == "o" && allblock[5].innerHTML == "o" ||
        allblock[6].innerHTML == "o" && allblock[7].innerHTML == "o" && allblock[8].innerHTML == "o" ||
        allblock[0].innerHTML == "o" && allblock[3].innerHTML == "o" && allblock[6].innerHTML == "o" ||
        allblock[1].innerHTML == "o" && allblock[4].innerHTML == "o" && allblock[7].innerHTML == "o" ||
        allblock[2].innerHTML == "o" && allblock[5].innerHTML == "o" && allblock[8].innerHTML == "o" ||
        allblock[0].innerHTML == "o" && allblock[4].innerHTML == "o" && allblock[8].innerHTML == "o" ||
        allblock[2].innerHTML == "o" && allblock[4].innerHTML == "o" && allblock[6].innerHTML == "o"){
            gameblock.innerHTML = "Winner " + player2;
            gameblock.style.background = "orange";
            hod = 9;
        }
        else if(hod > 8){
            gameblock.innerHTML = "Draw";
        }
    }
    
}
