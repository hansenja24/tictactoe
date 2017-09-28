//backend

// type of mark of each player
function player(mark,index) {
  this.mark = [mark,index];
}

//coordination translation into array number of board
var XY = function(x,y) {
  return (x-1)+((y-1)*3)
}

/////Board

var board = [0,0,0
            ,0,0,0
            ,0,0,0]

//checking draw
function draw(element, index, array){
  if(element != 0){
    return true;
  }
}


////Winning Condition

var winning = function(board, mark) {
  //checking column
  for(i = 0; i < 3; i++){
    if(board[i] === mark && board[i+3] === mark && board[i+6] === mark){
    ///winning result
    alert(mark + " Win")
  }
}
  ///checking row
  for(i = 0; i < 7; i+=3){
  if(board[i] === mark && board[i+1] === mark && board[i+2] === mark){
    ///winning result
    alert(mark + " Win")
  }
}
  ///checking diagonal
  if((board[0] === mark && board[4] === mark && board[8] === mark)
    || (board[2] === mark && board[4] === mark && board[6] === mark) ){
    ///winning result
    alert(mark + " Win")
    }

  else if(board.every(draw)){
    alert("It's Draw!")
  }
  ///end of the function
}



////Player

var playerX = new player("X",1);
var playerO = new player("O",0);
var index = 0;
var player = [];
var input = [a1=[1,1],a2=[1,2],a3=[1,3],a4=[2,1],a5=[2,2],a6=[2,3],a7=[3,1],a8=[3,2],a9=[3,3]]

///changing turn

var changeTurn = function(index){
  if(index === 0){
    return playerX
  } else if(index ===1){
    return playerO
  }
}





///main function
var execute = function(value) {

  player = changeTurn(index);
  index = player.mark[1];

  board[value] = player.mark[0];

  winning(board,player.mark[0]);

  $("input#column").val("")
  $("input#row").val("")
  return player.mark[0]
}


//clicking function
var calculate = function(i) {
  var valueColRow = input[i-1];
  var value = XY(valueColRow[1],valueColRow[0])
  if(board[value] === 0){
    var result = execute(value);
    if(result === "X"){
      $("#box"+i).addClass("resultX");
      toggleTurn();
    } else if(result === "O"){
      $("#box"+i).addClass("resultO");
      toggleTurn();
    }
  }
}


//remove class
var remove = function(){
  for(i = 1; i < 10; i++){
    $("#box"+i).removeClass("resultX");
    $("#box"+i).removeClass("resultO");
    $("#blue").show();
    $("#red").hide();
  }
}

//toggle turn
var toggleTurn= function(){
  $("#blue").toggle();
  $("#red").toggle();
}


//front end

$(document).ready(function() {
  $("#box1").click(function() {
    var deter = 1;
    calculate(deter);
  })
  $("#box2").click(function() {
    var deter = 2;
    calculate(deter);
  })
  $("#box3").click(function() {
    var deter = 3;
    calculate(deter);
  })
  $("#box4").click(function() {
    var deter = 4;
    calculate(deter);
  })
  $("#box5").click(function() {
    var deter = 5;
    calculate(deter);
  })
  $("#box6").click(function() {
    var deter = 6;
    calculate(deter);
  })
  $("#box7").click(function() {
    var deter = 7;
    calculate(deter);
  })
  $("#box8").click(function() {
    var deter = 8;
    calculate(deter);
  })
  $("#box9").click(function() {
    var deter = 9;
    calculate(deter);
  })

  $("#restart").click(function() {
    board = [0,0,0
            ,0,0,0
            ,0,0,0]
    index = 0;
    remove();
  })
})
