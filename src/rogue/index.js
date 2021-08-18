import Character from '../character';

class Rogue extends Character {
  constructor(name) {
    super(name);
    this.health = 50;
    this.numberOfAttacks = 0;
  }

  talk() {
    return `hello. my name is ${this.name.toLowerCase()}.`;
  }

  attack() {
    this.numberOfAttacks++;
    if (this.numberOfAttacks % 5 === 0) {
      this.health -= 5;
      return 1;
    }
    return 5;
  }
}

export default Rogue;
