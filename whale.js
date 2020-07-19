class Whale  {

 
    constructor(x,y,width,height){
            this.x = x
            this.y = y
            this.width = width
            this.height = height  
    this.image = loadImage("Images/whale.png")
    }
display(){
    push()
    translate(this.x,this.y) 
    imageMode(CENTER);
     image(this.image ,this.x,this.y,this.width,this.height) 
    pop()
}
swim(){
this.x = this.x-5



}

}