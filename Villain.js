console.log("Villain.js started...")
class Villain extends Person {
  constructor(name) {
    super(name);
  }

  render() {
    return `
    <div class="col-6">
  <div >
    <h3 id="villainName">Davros</h3>
    <div>
      Health: <span id="villainHealth">100</span>
    </div>
    <h4>Weapon: <span id="villainWeapon">Doubt and bad vibes</span></h4>
    <button class="btn btn-secondary">Attack Good Guy!</button>
  </div>
</div>
  <div class="col-6">
    <div id="villainImage"><img src="https://placebear.com/250/250" /></div>
  </div>
    `
  }
}




