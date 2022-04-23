//Getting our header element (to later on change per turn)
var game = document.getElementById("game");

//Getting each box element
var boxing = document.getElementsByClassName("box");

//setting our XorO variable to start at 0.
var XorO = 0;

    //setting on click functionality for each box; adds 'X' or 'O' based upon the XorO variable count (and initially with first box not having X or O)
    //Also checking our Winner() function after each click to see if we have a winner
    for (let i = 0; i < boxing.length; i++) {
        boxing[i].onclick = function()  {
            if (this.innerHTML != "X" && this.innerHTML != "O") {
                if (XorO % 2 == 0) {
                    this.innerHTML = "X";
                    game.innerHTML = "Player O's Turn";
                    Winner();
                    XorO+=1;
                }
                else {
                    this.innerHTML= "O";
                    game.innerHTML = "Player X's Turn";
                    Winner();
                    XorO+=1;

                }
            }
        }
    }

//Function to help with our Winner function
function winBox(b) {
    game.innerHTML = b.innerHTML + " has won!";
    $('.container').css('background-color', 'green');
    $('#game').css('font-weight', 'bolder');
    $('#game').css('text-shadow', '1px 1px white');
       
      
}

//First getting each box's element, then checking box contents for winning combinations; once winning combination is found, our header changes to winner.
function Winner() {
    var box1= document.getElementById("box1");
    var box2= document.getElementById("box2");
    var box3= document.getElementById("box3");
    var box4= document.getElementById("box4");
    var box5= document.getElementById("box5");
    var box6= document.getElementById("box6");
    var box7= document.getElementById("box7");
    var box8= document.getElementById("box8");
    var box9= document.getElementById("box9");

    if (box1.innerHTML !== "" && box1.innerHTML == box2.innerHTML && box1.innerHTML == box3.innerHTML) {
        winBox(box1);
    }

    if (box4.innerHTML !== "" && box4.innerHTML == box5.innerHTML && box4.innerHTML == box6.innerHTML) {
        winBox(box4);
    }

    if (box7.innerHTML !== "" && box7.innerHTML == box8.innerHTML && box7.innerHTML == box9.innerHTML) {
        winBox(box7);
    }

    if (box1.innerHTML !== "" && box1.innerHTML == box4.innerHTML && box1.innerHTML == box7.innerHTML) {
        winBox(box1);
    }

    if (box2.innerHTML !== "" && box2.innerHTML == box5.innerHTML && box2.innerHTML == box8.innerHTML) {
        winBox(box2);
    }

    if (box3.innerHTML !== "" && box3.innerHTML == box6.innerHTML && box3.innerHTML == box9.innerHTML) {
        winBox(box3);
    }

    if (box1.innerHTML !== "" && box1.innerHTML == box5.innerHTML && box1.innerHTML == box9.innerHTML) {
        winBox(box1);
    }

    if (box3.innerHTML !== "" && box3.innerHTML == box5.innerHTML && box3.innerHTML == box7.innerHTML) {
        winBox(box3);
    }
    
    if (box1.innerHTML !== "" && box2.innerHTML !== "" && box3.innerHTML !== "" && box4.innerHTML !== "" && box5.innerHTML !== "" && box6.innerHTML !== ""
        && box7.innerHTML !=="" && box8.innerHTML !== "" && box9.innerHTML !== "") {
        game.innerHTML = "Tie Game!";
        $('.container').css('background-color', 'grey');
        }
}

//Getting our button element and setting an event listener on it.
document.getElementById("restart").addEventListener("click", restart);

//Restart button has restart() function attached to it on click to clear the board and start a new game
function restart() {
    for (let i = 0; i < boxing.length; i++) {
        boxing[i].innerHTML = "";
        game.innerHTML = "Click a box to begin!";
        $('.container').css('background-color', '#008CFF');
        $('#game').css('font-weight', 'none');
        $('#game').css('text-shadow', 'none');
    }
}

