class Game{
    constructor(){ }
    getState(){
        var getStateref=database.ref('gameState');
        getStateref.on("value",function(data){
            gameState=data.val();

        });
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
}
    async start(){
        if(gameState===0){
          player=new Player();
          var playercountref=await database.ref('playerCount').once("value");
          if(playercountref.exists()){
              playerCount=playercountref.val();
              player.getCount();
          }

          
          
          form=new Form();
          form.display();
          
        }
    }
    play(){
        form.hide();
        textSize(20);
        text("Game has started",200,200);
        Player.getplayerinfo();
        if(allPlayers!==undefined){
            var display_position=130;
            for(var plr in allPlayers){
                if(plr==="player"+player.index ){
                    fill("yellow");
                }
                else{
                    fill("red");
                }
display_position=display_position+20;
textSize(20);
text(allPlayers[plr].name+"="+allPlayers[plr].distance,120,display_position);

            }
        }
if(keyDown(UP_ARROW)&&player.index!==null){
    player.distance=player.distance+50;
    player.update();
}

    }
}