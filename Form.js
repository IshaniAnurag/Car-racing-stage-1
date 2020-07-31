class Form{
    constructor(){
      this.input=createInput("name");
      this.button=createButton("PLAY");
       this.greeting=createElement('h2');
    }
    hide(){
      this.input.hide();
      this.button.hide();
      this.greeting.hide();
    }
    display(){
      var title=createElement('h2');
      title.html("car racing adventure");
      title.position(150,0);
     
      this.input.position(150,180);
     
      this.button.position(270,200);
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name=this.input.value();
        playerCount=playerCount+1;
        player.index=playerCount;
        player.update();
        player.updateCount(playerCount);
        
        this.greeting.html("Thanks for joining  "+player.name);
        this.greeting.position(160,180);
      })
    }
}