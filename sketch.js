let ball;
let balls=[]


function setup() {
  createCanvas(400, 400); 
  ball = new Walker();
}


function draw() {
  noStroke( )
  background(200);
  for(let b of balls){
  b.update();
  b.display();
  b.checkEdges();
  }
  
  if(mouseIsPressed){
    //ball.vel.add(2, 3);
  }
}
function mousePressed(){
  ball.vel.add(20,-20);
  let b= new Walker();
  balls.push(b);
  
}