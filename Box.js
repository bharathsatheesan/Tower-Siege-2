class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("Box.PNG");
    this.Visibility = 255;
  }

  display(){
    if(this.body.speed < 3){
      super.display();
    }
    else{
      World.remove(world, this.body);
      push();
      this.Visibility -= 5;
      tint(225, this.Visibility);
      image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
      pop();
    }
    console.log(this.Visibility);
  }
}