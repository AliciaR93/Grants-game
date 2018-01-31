var character = {
  name: prompt ("Name your character"),
  health:40,
  healsRemaining:2,
  wins:0,
  generateAttackDamage: function(){
  return (Math.floor(Math.random() * 1) + 3);
  },
  heal: function() {
    if (this.healsRemaining > 0) {
      this.healsRemaining--;
      return (Math.floor(Math.random() * 1) + 10);
    }
  }
}
var grant = {
  name: "grant",
  health: 10,
  generateAttackDamage: function(){
  return (Math.floor(Math.random() * 1) + 5);
},
}
//END OF OBJECT DECLARATION
startGame();

//To start the game call startgame(); if yes do this
function startGame(){
  var user = prompt("Do you want to play the game?");
  if (user === "yes"){
    startCombat();
  }
}

function startCombat() {
  console.log(character);
  while (character.wins < 5 && character.health > 0 ) {
     var quit = prompt ("Do you want to attack, quit or heal?");
     if (quit === "quit") {
     break;
  } else if (quit === "attack") {
   character.health -= grant.generateAttackDamage();
   grant.health -= character.generateAttackDamage();
   console.log(character.health);
   console.log(grant.health);
 } else if (quit === "heal") {
   character.health += character.heal();
   console.log(character.health);
 }
 if(grant.health <= 0) {
       console.log("Grant Defeated");
       character.wins++;
       grant.health = 10;
     }
}

 if (character.health <= 0) {
       console.log("Grant wins!");
     }
   if (character.wins === 5 ) {
     console.log ("The winner is " + character.name);
   }
}
