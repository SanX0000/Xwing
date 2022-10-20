function setup() {
  createCanvas(1360, 768);
  somGame.loop()
}

function draw() {
  background(imagemSpace);
  mostraNave ()
  showTie()
  moveNave()
  moveTie()
  voltaTie()
  voltaNave()
  incluipontos();
  marcaponto()
  verificaColisao()
}