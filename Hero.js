console.log("Hero.js started...")

class Hero extends Person {
  constructor(name) {
    super(name);
  }

  render() {
    return `
    <div class="col-6">
    <div >
      <h3 id="heroName">Zaphod Beeblebrox</h3>
      <div>
        Health:<span id="heroHealth">100</span>
      </div>
      <h4>Weapon: <span id="heroWeapon">Wits and Charm</span></h4>

      <button class="btn btn-danger">Attack Bad Guy!</button>
    </div>
  </div>
  <div class="col-6">
    <div id="heroImage"><img src="https://www.stevensegallery.com/250/250" /></div>
  </div>
    `
  }


}