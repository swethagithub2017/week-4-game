
var gameWin = Math.floor(Math.random() * 120) + 19;


$("#randomNumber").html(gameWin);

var red =  Math.floor(Math.random() * 19) + 1;
var blue = Math.floor(Math.random() * 19) + 1;
var green = Math.floor(Math.random() * 19) + 1;
var pink = Math.floor(Math.random() * 19) + 1;
console.log(red,blue,green,pink);
       
var total = 0;
var win = 0;
var loss = 0;

function crystalGame() {
  $(".result").html(total);
  $("#wins").html("Wins: " + win);
  $("#loss").html("Loss: " + win);
     
  $("#red").on("click", function() { 

    total = total + red;
    $(".result").html(total);
    console.log(total);

    if(gameWin < total) {
     lossReset();

    }if(gameWin === total){
     winReset();
    
    };

  });
    

  $("#blue").on("click", function() { 

    total = total + blue;
    $(".result").html(total);
    console.log(total);

    if(gameWin < total) {
     lossReset();

    }if(gameWin === total){
     winReset();
    
    };

  });

  $("#green").on("click", function() { 

    total = total + green;
    $(".result").html(total);
    console.log(total);

    if(gameWin < total) {
     lossReset();

    }if(gameWin === total){
     winReset();
    
    };

  });

  $("#pink").on("click", function() { 

    total = total + pink;
    $(".result").html(total);
    console.log(total);

    if(gameWin < total) {
     lossReset();

    }if(gameWin === total){
     winReset();
    
    };

  });

};

crystalGame();

function winReset(){

  gameWin = Math.floor(Math.random() * 120) + 19;

  
  $("#randomNumber").html(gameWin);

  

  red = Math.floor(Math.random() * 19) + 1;
  blue = Math.floor(Math.random() * 19) + 1;
  green = Math.floor(Math.random() * 19) + 1;
  pink = Math.floor(Math.random() * 19) + 1;

  win++;
  alert("you won!!");
  total = 0;
  $(".result").html(total);
  $("#wins").html("Wins: " + win);
  console.log(red,blue,green,pink);


};

function lossReset(){
  gameWin = Math.floor(Math.random() * 120) + 19;

 
  $("#randomNumber").html(gameWin);

  total = 0;

  red = Math.floor(Math.random() * 19) + 1;
  blue = Math.floor(Math.random() * 19) + 1;
  green = Math.floor(Math.random() * 19) + 1;
  pink = Math.floor(Math.random() * 19) + 1;

  loss++;
  alert("you lose!!");
  
  $(".result").html(total);
  $("#loss").html("Loss: " + loss);
  console.log(red,blue,green,pink);

}