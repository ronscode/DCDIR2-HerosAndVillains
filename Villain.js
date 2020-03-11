console.log("Villain.js started...")
class Villain extends Person {
  constructor(name) {
    super(name);
  }

  render() {
    return `
    <div class="col-6">
  <div >
    <h3 id="villainName">${this.name}</h3>
    <div>
      Health: <span id="villainHealth">${this.health}</span>
    </div>
    <h4>Weapon: <span id="villainWeapon">${this.weapon.name}</span></h4>
    <button id="attackVillain" class="btn btn-secondary">Attack Good Guy!</button>
  </div>
</div>
  <div class="col-6">
    <div id="villainImage"><img src="https://placebear.com/250/250" /></div>
  </div>
    `
  }
}

