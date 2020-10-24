class Game{
  constructor(){

  }
  getState(){
      var gamestateref=database.ref("gameState");
      gamestateref.on("value",function(data){
         gameState=data.val();
      })
  }

   update(state){
     database.ref("/").update({
         gameState:state
     });
   }
     async start(){
    if(gameState==0){
     player=new Player();
     var playerCountref=await database.ref("playerCount").once("value");
     if(playerCountref.exists()){
      playerCount=playerCountref.val()
      player.getCount();
     }
      
      form= new Form();
      form.display();
    }
    
    car1=createSprite(100,100);
    car1.addImage("car1",car1Img);
    car2=createSprite(300,100);
    car2.addImage("car2",car2Img);
    car3=createSprite(500,100);
    car3.addImage("car3",car3Img);
    car4=createSprite(700,100);
    car4.addImage("car4",car4Img);
    cars=[car1, car2 , car3 , car4];

   }
   play(){
     form.hide();
     Player.getPlayersInfo();
     player.getCarsAtEnd();

     if(allPlayers!==undefined){
       background(ground);
       image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
      var index=0;
      var x=195;
      var y;
       for(var plr in allPlayers){
         index=index+1;
         x=x+220;
         y=displayHeight-allPlayers[plr].distance;
      
         cars[index-1].x=x;
         cars[index-1].y=y;
       if(plr=="player" + player.index){
        fill("yellow")
        strokeWeight(4);
        stroke("red")
         ellipse(x,y,60,60);
         
         camera.position.x=displayWidth/2;
         camera.position.y=cars[index-1].y;
       }
      
       }
     }
     if(keyIsDown(UP_ARROW)&& player.index!==null){
     player.distance +=50;
     player.update();
     }

     if(player.distance>4150){
       gameState=2;
       player.rank+=1;
       Player.updateCarsAtEnd(player.rank);
     }

     drawSprites();

   }

   end(){
     console.log("GameOver")
     console.log("RANK : " + player.rank);
     form.displayRank();
   }
}