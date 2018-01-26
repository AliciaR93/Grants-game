var user = prompt ("Do you want to play the game with two characters?");
if (user = "yes") {
  var character = prompt ("Name your character.");
}

var grantHealthPoints = 10;
var userHealthPoints = 40;
var userscore=0;
var grantscore=0;

while (userscore < 3 && grantscore < 1) {
  var playerdamage = Math.floor((Math.random() * 2) + 1);
  var grantdamage = Math.floor((Math.random() * 2) + 1);
  if (grantHealthPoints > 0 && userHealthPoints > 0) {
  userHealthPoints = userHealthPoints-playerdamage;
  grantHealthPoints = grantHealthPoints-grantdamage;
  console.log("Grant has " + grantHealthPoints + " left.");
  console.log("User has " + userHealthPoints + " left");
}
  else if(grantHealthPoints <= 0) {
    console.log("Grant Defeated");
    userscore++;
    grantHealthPoints = 10;
  }
  else if (userHealthPoints <= 0) {
    console.log("Grant wins!");
    grantscore++;
  }
}
if (userscore==3) {
  console.log ("The winner is " + character);
} else if (grantscore==1) {
  console.log("The winner is Granty boy.");
}
