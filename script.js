let paintbox=document.getElementById("paintbox");
let context=paintbox.getContext("2d");

let gameon=true;
class Box{
    constructor(size,color) {

        this.size=size;
        this.color=color;
        this.x=0;
        this.y=0;
    }
}

class Player extends Box {
   constructor(){
       super(50,"green");
       this.x=0;
       this.y=225;
       this.speed=0;
   }
   move(){
        this.x+=this.speed;
        if(this.x+this.size>=500){
            this.speed=-(Math.abs(this.speed));
        }
        if(this.x==0){

        }
   }

}
class Enemy extends Box {
    constructor(speed){
        super(50,"red");
        this.speed=speed;
        
    }
     move(){
        this.y+=this.speed;
        if(this.y+this.size>500) {
            this.speed=-(Math.abs(this.speed));
        }
        if(this.y<0){
            this.speed=Math.abs(this.speed);
        }
    }
}

let player=new Player();
let e1=new Enemy(12);
let e2=new Enemy(7);
let e3=new Enemy(10);
e3.x=300;
e1.x=100;
e2.x=200;

function iscollide(box1,box2){



}

function drawbox(box){
    context.fillStyle=box.color;
    context.fillRect(box.x,box.y,box.size,box.size);
}

paintbox.addEventListener('mousedown',()=>{
   player.speed=5;
});
paintbox.addEventListener('mouseup',()=>{
  player.speed=0;
});

function updategame(){
    if(!gameon) return;
    console.log("frame update");
   window.requestAnimationFrame(()=>{
    context.clearRect(0,0,500,500);
     e1.move();
     e2.move();
     e3.move();
     player.move();
     if(iscollide(e1,player)|| iscollide(e2,player)|| iscollide(e3,player)){
         gameon=false;
         window.alert('GAME OVER');
     }
     drawbox(player);
     drawbox(e1);
     drawbox(e2);
     drawbox(e3);
     updategame();
     

   });


}
updategame();