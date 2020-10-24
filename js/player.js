class Player{
   constructor(){
       this.name=null;
       this.distance=0;
       this.index=0;
       this.rank=null;
   }
   getCount(){
       var playerCountref=database.ref("playerCount")
       playerCountref.on("value",function(data){
           playerCount=data.val();
       })
   }
    updateCount(count){
    database.ref("/").update({
        playerCount:count
    })
    }

    update(){
    var playerIndex="players/player" + this.index;
    database.ref(playerIndex).set({
    name:this.name,
    distance:this.distance

    });
    }

    static getPlayersInfo(){
       database.ref("players").on("value",(data)=>{
        allPlayers=data.val();
       })
    }

    getCarsAtEnd(){
     database.ref("carsAtEnd").on("value",(data)=>{
         this.rank=data.val();
     })
     }
    
     static updateCarsAtEnd(rank){
     database.ref("/").update({
         carsAtEnd:rank
     })
     }
}
