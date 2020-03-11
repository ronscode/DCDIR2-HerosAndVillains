console.log("script.js started...")

const nameHero = prompt("Enter the hero name", "Zaphod");
const nameVillain = prompt("Enter the bad guy name", "Davros");

const player = new Hero(nameHero);
const computer = new Villain(nameVillain);

// Equip a weapon for each player (the name is just a string and the damage is a random number)

player.equipWeapon(new Weapon("Ninja Stars"));
computer.equipWeapon(new Weapon("Bear Claws"));

// Creating variables out of the parts of the DOM we want to update.

const containerHero = document.getElementById("hero");
const containerVillain = document.getElementById("villain");

// Render the HTML of the players with stats onto the screen

containerHero.innerHTML = player.render();
containerVillain.innerHTML = computer.render();

// Create variables for the health to update after each attack!

var playerHP = document.getElementById('heroHealth');
var computerHP = document.getElementById('villainHealth');

// Create the onClick even listener for the attack buttons 
// Each button should first attach the other player then check to see if they have won. If they've won end the game. If not re-render the new HP value. 

document.getElementById("attackHero").addEventListener("click", function () {
  player.attack(computer);
  if (computer.health <= 0) {
    alert("Victory! The Hero hath slain the Villain!");
  }
  computerHP.innerHTML = computer.health;
});

document.getElementById("attackVillain").addEventListener("click", function () {
  computer.attack(player);
  if (player.health <= 0) {
    alert("Game over! The Villain Wins in the End!");
  }
  playerHP.innerHTML = player.health;
});



// document.getElementById('attackHero').addEventListener('click', function () {
//   player.attack(computer);
//   if (player.health <= 0) {
//     alert("The Villain Wins in the End!")
//   }
//   containerVillain.innerHTML = computer.render();
// });

// document.getElementById('attackVillain').addEventListener('click', function () {
//   computer.attack(player);
//   console.log(player.health)
//   if (computer.health <= 0) {
//     alert("The Hero hath slain the Villain!")
//   }
//   containerHero.innerHTML = player.render();
// });


