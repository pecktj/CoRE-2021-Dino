class Door{


constructor(type){
  this.x = 1800;
  if(type==1){
    this.y = 485;
    this.h = 115;
    this.w = 85;}
  this.v = -8.78;
  this.type = type;
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
getv(){
  return this.v;
}
//--------------------------------------------
show(){
  //fill(0,87,30);
//  rect(this.x, this.y, this.w,this.h);
  image(imgDoor, this.x, this.y);
}
//-------------------------------------------
update(){
    this.x = this.x + this.v;
}
offScreen(){
  if(this.x<-50){
    return true;
  }
  return false;
}
//-------------------------------------------
}
