//Var Tie
let xTie = [600, 700, 300, 400, 200]
let yTie = [100, 300, 200, 400, 500]
let speedTie = [9, 8, 7, 10, 11]
let cTie = 90
let aTie = 95

let xTies = [1200, 1250, 1100, 1000, 1150]
let yTies = [10, 150, 300, 450, 650]



function showTie(){
  image (imagemTie1, xTies[0], yTies[0], cTie, aTie)
  image (imagemTie2, xTies[1], yTies[1], cTie, aTie)
  image (imagemTie3, xTies[2], yTies[2], cTie, aTie)
  image (imagemTie4, xTies[3], yTies[3], cTie, aTie)
  image (imagemTie5, xTies[4], yTies[4], cTie, aTie)
  
}

function moveTie(){
  xTies[0] -= speedTie[0];
  xTies[1] -= speedTie[1];
  xTies[2] -= speedTie[2];
  xTies[3] -= speedTie[3];
  xTies[4] -= speedTie[4];
   
}


function voltaTie(){
  if (xTies[0] < -50){
    xTies[0] = 1300
  }
  if (xTies[1] < -50){
    xTies[1] = 1300
  }
  if (xTies[2] < -50){
    xTies[2] = 1300
  }
if (xTies[3] < -50){
    xTies[3] = 1300
  }
if (xTies[4] < -50){
    xTies[4] = 1300
  }
if (xTies[5] < -50){
    xTies[5] = 1300
  }
}