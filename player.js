

class player{

constructor(x,y){
  this.x = x;
  this.y = y;
  this.lose = false;
  this.g = 1.5;
  this.v = 0;
  this.a = 0;
}
//--------------------------------------------
mutx(x){
  this.x=x;
}
muty(y){
  this.y=y;
}
mutv(v){
  this.v=v;
}
muta(a){
  this.a=a;
}
geta(){
  return this.a;
}
mutL(L){
  this.lose=L;
}
//-------------------------------------------
show(){
  if(this.lose)
  {
  }else{
  //  image(img, 0, 0);
    fill(50,30,200);
  //  rect(this.x, this.y, 30,50);
    image(img,this.x,this.y);
  }
}
//-------------------------------------------
update(){
    this.v = this.v + this.g;
    this.y = this.y + this.v;
    if(this.y>=550){
      this.v=0;
      this.g=0;
    }
  //this.x = this.x + this.a;
}
//-------------------------------------------
jump(){
  if(this.v==0){
      this.v = -20.8;
      this.g = 1.6;
  }
}
//-------------------------------------------

}
