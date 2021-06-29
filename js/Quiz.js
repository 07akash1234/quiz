class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
question.hide()
    //write code to change the background color here
background("blue")
    //write code to show a heading for showing the result of Quiz
textSize(25)
fill("white")
text("Result of the quiz",340,50)
    //call getContestantInfo( ) here
Contestant.getPlayerInfo()

    //write condition to check if contestantInfor is not undefined

    //write code to add a note here
    if(allContestants!==undefined){
    textSize(25)
    fill("white")
    text("Note: Correct Answer Are In Yellow Colour",130,230)

    var ypos=230
    for(var plr in allContestants){
      var cans="2"
      if(cans==allContestants[plr].answer){
        fill("yellow")

      }else{
        fill("blue")
      }
      ypos=ypos+30
      textSize(20)
      text(allContestants[plr].name+":"+allContestants[plr].answer,250,ypos )
    }
    }
    //write code to highlight contest who answered correctly
    
  }

}
