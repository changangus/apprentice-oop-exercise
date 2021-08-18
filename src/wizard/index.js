import Character from '../character';

class Wizard extends Character {
  constructor(name){
    super(name)
    this.health = 50;
    this.numberOfAttacks = 0;
  }

  talk() {
    return `Hello! My name is ${this.name}.`.toUpperCase()
  }

  attack() {
    this.numberOfAttacks++ 
    if (this.numberOfAttacks > 3) {
      this.health -= 10;
      return 1
    } else {
      return 2
    }
  }
}

export default Wizard;
