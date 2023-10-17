class Walker {
  
  constructor() {
    this.pos = createVector(width/2, height/2);
    this.vel = createVector(random(-5,5),0);
    this.acc=createVector(0,0.5)
  	this.w = 10;
    this.t=0;
  }
  
  update() {
    // 새로운 속도 만들기
    //this.vel = p5.Vector.random2D();
    this.vel.add(this.acc)
    this.vel.mult(0.97);
    this.pos.add(this.vel)
    //this.vel.mult(4);
  }
    
    checkEdges(){
      if(this.pos.x>width ||this.pos.x<0){
        this.vel.x*=-1;
      }
      if(this.pos.y>height ||this.pos.y<0){
        if(this.pos.y>height){
          this.pos.y=height;
        }
        this.vel.y*=-1;
      }
   }
    
    
    // 새 위치(벡터) = 이전 위치(벡터) + 속도(벡터)
    //this.pos.add(this.vel);
    //this.pos.x=200+sin(this.t)*20;
    //this.pos.y=200+cos(this.t)*random((0, -0.1),(0.1,0));
    
    //this.t=this.t+0.1;
  
  
  
  display() {
	ellipse(this.pos.x, this.pos.y, this.w);
  }
}