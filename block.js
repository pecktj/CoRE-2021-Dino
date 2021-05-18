class block{


constructor(type){
  this.x = 1800;
  if(type==1){
    this.y = 535;
    this.h = 65;
    this.w = 35;}
  else if(type==2){
    this.y = 563;
    this.h = 37;
    this.w = 80;
  }
  else if(type==3){
    this.y = 535;
    this.h = 65;
    this.w = 50;
  }
  else if(type==4){
    this.y = 535;
    this.h = 65;
    this.w = 75;
  }
  else if(type==5){
    this.y = 560;
    this.h = 40;
    this.w = 120;
  }
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
getT(){
  return this.type;
}
//--------------------------------------------
show(){
//  fill(0,87,30);
  //rect(this.x, this.y, this.w,this.h);

  if(this.type==1){
    image(imgC, this.x, this.y);
  }
  else if(this.type==2){
    image(imgComp, this.x, this.y);
  }
  else if(this.type==3){
    image(imgF, this.x, this.y);
  }
  else if(this.type==4){
    image(imgD, this.x, this.y);
  }
  else if(this.type==5){
    image(imgDrinks, this.x, this.y);
  }
}
//-------------------------------------------
update(){
    //this.v = this.v + this.g;
    //this.y = this.y + this.v;
    this.x = this.x + this.v;
}
offScreen(){
  if(this.x<-50){
    return true;
  }
  return false;
}
//-------------------------------------------
collide(player){
  if(((player.x>this.x)&&(player.x<this.x+this.w))||(((player.x+30>this.x)&&(player.x+30<this.x+this.w)))){
      if(((player.y>=this.y)&&(player.y<=this.y+this.h))||(((player.y+45>=this.y)&&(player.y+45<=this.y+this.h)))){
          //background(24);
          return true;
    }
    return false;
  }
  return false;
}
}
