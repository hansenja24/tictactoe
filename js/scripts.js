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

///changing turn

var changeTurn = function(index){
  if(index === 0){
    return playerX
  } else if(index ===1){
    return playerO
  }
}




////front end

var execute = function(value) {

  player = changeTurn(index);
  index = player.mark[1];

  board[value] = player.mark[0];

  $("#result").append(player.mark[0]+" turn "+board);

  winning(board,player.mark[0]);

  $("input#column").val("")
  $("input#row").val("")
  return player.mark[0]
}


//clicking function
$(document).ready(function() {
  $("#box1").click(function() {
    var inputCol = 1;
    var inputRow = 1;
    var value = XY(inputCol,inputRow)
    if(board[value] === 0){
      var result = execute(value);
      if(result === "X"){
        $("#box1").addClass("resultX");
      } else if(result === "O"){
        $("#box1").addClass("resultO");
      }
    }
  })

  $("#box2").click(function() {
    var inputCol = 2;
    var inputRow = 1;
    var value = XY(inputCol,inputRow)
    if(board[value] === 0){
      var result = execute(value);
      if(result === "X"){
        $("#box2").addClass("resultX");
      } else if(result === "O"){
        $("#box2").addClass("resultO");
      }
    }
  })
  $("#box3").click(function() {
    var inputCol = 3;
    var inputRow = 1;
    var value = XY(inputCol,inputRow)
    if(board[value] === 0){
      var result = execute(value);
      if(result === "X"){
        $("#box3").addClass("resultX");
      } else if(result === "O"){
        $("#box3").addClass("resultO");
      };
    }
  })
  $("#box4").click(function() {
    var inputCol = 1;
    var inputRow = 2;
    var value = XY(inputCol,inputRow)
    if(board[value] === 0){
      var result = execute(value);
      if(result === "X"){
        $("#box4").addClass("resultX");
      } else if(result === "O"){
        $("#box4").addClass("resultO");
      }
    }
  })
  $("#box5").click(function() {
    var inputCol = 2;
    var inputRow = 2;
    var value = XY(inputCol,inputRow)
    if(board[value] === 0){
      var result = execute(value);
      if(result === "X"){
        $("#box5").addClass("resultX");
      } else if(result === "O"){
        $("#box5").addClass("resultO");
      }
    }
  })
  $("#box6").click(function() {
    var inputCol = 3;
    var inputRow = 2;
    var value = XY(inputCol,inputRow)
    if(board[value] === 0){
      var result = execute(value);
      if(result === "X"){
        $("#box6").addClass("resultX");
      } else if(result === "O"){
        $("#box6").addClass("resultO");
      }
    }
  })
  $("#box7").click(function() {
    var inputCol = 1;
    var inputRow = 3;
    var value = XY(inputCol,inputRow)
    if(board[value] === 0){
      var result = execute(value);
      if(result === "X"){
        $("#box7").addClass("resultX");
      } else if(result === "O"){
        $("#box7").addClass("resultO");
      }
    }
  })
  $("#box8").click(function() {
    var inputCol = 2;
    var inputRow = 3;
    var value = XY(inputCol,inputRow)
    if(board[value] === 0){
      var result = execute(value);
      if(result === "X"){
        $("#box8").addClass("resultX");
      } else if(result === "O"){
        $("#box8").addClass("resultO");
      }
    }
  })
  $("#box9").click(function() {
    var inputCol = 3;
    var inputRow = 3;
    var value = XY(inputCol,inputRow)
    if(board[value] === 0){
      var result = execute(value);
      if(result === "X"){
        $("#box9").addClass("resultX");
      } else if(result === "O"){
        $("#box9").addClass("resultO");
      }
    }
  })
})
