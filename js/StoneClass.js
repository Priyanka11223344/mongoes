class StoneClass{
constructor(x,y,width,height){
    var options ={
     'isStatic':false,
     'dencity': 1.2,
     'friction': 1,
     'restitution': 0
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.body = loadImage("images/stone.png");
    World.add(world, this.body);
};

};