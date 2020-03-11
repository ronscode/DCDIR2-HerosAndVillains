console.log("Hero.js started...")
class Hero extends Person {
  constructor(name) {
    super(name);
  }

  render() {
    return `
    <div class="col-6">
  <div >
    <h3 id="heroName">${this.name}</h3>
    <div>
      Health: <span id="heroHealth">${this.health}</span>
    </div>
    <h4>Weapon: <span id="heroWeapon">${this.weapon.name}</span></h4>
    <button id="attackHero" class="btn btn-secondary">Attack the Villain!</button>
  </div>
</div>
  <div class="col-6">
    <div id="villainImage"><img src="https://www.stevensegallery.com/250/250" /></div>
  </div>
    `
  }
}