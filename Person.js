console.log("Person.js started...")

class Person {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.weapon = null;
  }

  // Method for equipWeapon

  equipWeapon(weapon) {
    this.weapon = weapon;
  }

  // Method for attack

  attack(person) {
    person.health = person.health - this.weapon.damage;
  }
}