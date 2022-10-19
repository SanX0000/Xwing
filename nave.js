//Var Nave
let xNave = 10
let yNave = 100
let speedNave = 6

function mostraNave (){
  image (imagemNave, xNave, yNave, 95, 100)
  
}

function moveNave(){
  if (keyIsDown (UP_ARROW)) {
   yNave -=3, speedNave = 10
  } 
   

if (keyIsDown (DOWN_ARROW)) {   
  yNave +=3, speedNave = 10
  
   }
  
if (keyIsDown (RIGHT_ARROW)) {   
  xNave +=3, speedNave = 10
  
   } 
  
if (keyIsDown (LEFT_ARROW)) {   
  xNave -=3, speedNave = 10
  
   } 
  
}

function voltaNave(){
  if (xNave > 1300){
     xNave = 10, yNave = 100
  }
}


  
