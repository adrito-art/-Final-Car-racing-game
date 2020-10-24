class Form{
    constructor(){
      this.input=createInput("Name");
      this.button=createButton("JOIN");
      this.greeting=createElement("h3");
    }
hide(){
  this.input.hide();
  this.button.hide();
  this.greeting.hide();
}
    display(){
        var title=createElement("h2");
        title.html("CAR RACING GAME 1-4 PLAYERS !");
        title.position(displayWidth/2-50,0);

        this.input.position(displayWidth/2-40,displayHeight/2-80);
        
        this.button.position(displayWidth/2+30,displayHeight/2)
      
                              
        this.button.mousePressed(()=>{
          this.input.hide();
          this.button.hide();
         player.name =this.input.value();
          playerCount=playerCount+1;
          player.index=playerCount;
          player.update();
          player.updateCount(playerCount);
          this.greeting.html(" Welcome " + player.name);
          this.greeting.position(displayWidth/2-70,displayHeight/4);
        });
    }

    displayRank(){
      clear();
      background(lastback);
      var title=createElement("h2");
      title.html("CAR RACING GAME 1-4 PLAYERS !");
      title.position(displayWidth/2-50,0);
     
      var message=createElement("h1");
      message.html("Congrats "+ player.name + " Your Rank Is " + player.rank);
      message.position(displayWidth/2+200,500);
    }
}