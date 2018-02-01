(function() {
  document.getElementById("attackButton").style.display = "none";
  document.getElementById("healButton").style.display = "none";
  document.getElementById("quitButton").style.display = "none";
  document.getElementById("userHealth").style.display = "none";
  document.getElementById("grantHealth").style.display = "none";
  document.getElementById("wins").style.display = "none";

  var startButton = document.getElementById("startButton");
  var attackButton = document.getElementById("attackButton");
  var healButton = document.getElementById("healButton");
  var quitButton = document.getElementById("quitButton");
  var userHealthBar = document.getElementById("userHealth");
  var grantHealthBar = document.getElementById("grantHealth")
  var messageEl = document.getElementById("message");
  var userHealBar = document.getElementById("userHeals");

  // Character object with values and function getting the attack damage.
  var character = {
    name: " ",
    health: 40,
    healsRemaining: 2,
    wins: 0,
    generateAttackDamage: function() {
      return (Math.floor(Math.random() * 1) + 3);
    },
    heal: function() {
      if (this.healsRemaining > 0) {
        this.healsRemaining--;
        return (Math.floor(Math.random() * 1) + 10);
      }
    }
  };
  var grant = {
    name: "grant",
    health: 10,
    generateAttackDamage: function() {
      return (Math.floor(Math.random() * 1) + 5);
    },
  };
  // Game starts here when you hit start. All other options in game are visible
  startButton.onclick = function() {
    var startDiv = document.getElementById("startDiv");
    character.name = prompt("Enter your name");
    startDiv.classList.add("disappear");
    startDiv.classList.remove("appear");
    document.getElementById("attackButton").style.display = "block";
    document.getElementById("healButton").style.display = "block";
    document.getElementById("quitButton").style.display = "block";
    document.getElementById("userHealth").style.display = "block";
    document.getElementById("grantHealth").style.display = "block";
    document.getElementById("wins").style.display = "block";
    startCombat();
  }

  function updateDisplay() {

    userHealthBar.value = character.health;
  }

  function updateMessage(newMessage) {
    messageEl.innerText = newMessage;
  }

  function startCombat() {
      attackButton.onclick = function() {
        character.health -= grant.generateAttackDamage();
        grant.health -= character.generateAttackDamage();
        updateDisplay();
        updateMessage("Ouch!");
      };
      healButton.onclick = function() {
        character.health += character.heal();
        updateDisplay();
        updateMessage("Grant heals; back to 10")
      }
      // If quit button is hit, exits the game.
      quitButton.onclick = function() {
        break;
      }

      if (grant.health <= 0) {
        updateMessage("Grant Defeated");
        character.wins++;
        grant.health = 10;
      }


    if (character.health <= 0) {
      updateMessage(character.name + "lost");
    }
    if (character.wins === 5) {
      updateMessage(character.name + "won");
    }
  }

})();
