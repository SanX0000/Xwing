//Var Nave
let xNave = 10
let yNave = 100
let speedNave = 8
let meuspontos = 0
let colisao = 0

function mostraNave (){
  image (imagemNave, xNave, yNave, 90, 95)
  
}

function moveNave(){
  if (keyIsDown (UP_ARROW)&& yNave >= 0) 
   {yNave -= speedNave
  } 
 

if (keyIsDown (DOWN_ARROW)&& yNave <= 680)    
  {yNave += speedNave
    }
   
  
if (keyIsDown (RIGHT_ARROW)) {   
  xNave += speedNave + 1
  
   } 

if (keyIsDown (LEFT_ARROW)) {   
  xNave -= speedNave + 1
  
   } 
} 

function voltaNave(){
  if (xNave > 1300){
     xNave = 10, yNave = 100
  }
}

function marcaponto(){
  if (xNave >1290 ) {meuspontos +=1;
  somPonto.play()                   
  }
}

function incluipontos(){
  textAlign (CENTER);
  textSize (35)
  fill (color (255,255,0))
  text (meuspontos, width / 2, 27 ) 
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i=0; i < imagemTies.length; i = i +1) {
    colisao = collideRectCircle (xTies[i], yTies[i], cTie, aTie, xNave, yNave, 95)
    if (colisao) {
      colidiu()
    somColisao.play()
    }
  }
}

function colidiu(){
  xNave = 10; yNave = 100
  
}


































  
