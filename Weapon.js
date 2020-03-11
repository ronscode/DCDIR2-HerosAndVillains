console.log("Weapon.js started...")

class Weapon {
  constructor(name) {
    this.name = name;
    this.damage = Math.floor(Math.random() * 10) + 10;
  }
}
