class Fighter {
    constructor(obj) {
        this.name = obj.name;
        this.damage = obj.damage;
        this.hp = obj.hp;
        this.fullHP = obj.hp
        this.agility = obj.agility;
        this.wins = 0;
        this.losses = 0;
    }
    getName() {
        return this.name;
    }
    getDamage() {
        return this.damage;
    }
    getHealth() {
        return this.hp;
    }
    getAgility() {
        return this.agility;
    }
    attack(fighter) {
        let chanceToHit = 100;
        let chance = Math.floor(Math.random() * chanceToHit + 1);
        if (chance > fighter.getAgility()) {
            let attackDamage = this.getDamage();
            this.dealDamage(attackDamage, fighter);
            console.log(this.getName() + ' make ' + this.getDamage() + ' damage to ' + fighter.getName());
        } else {
            console.log(this.getName() + ' attack missed');
        }
    }
    logCombatHistory() {
        return 'Name: ' + this.getName() + ', Wins: ' + this.wins + ', Losses: ' + this.losses;
    }
    heal(amount) {
        if (this.hp + amount > this.fullHP) {
            this.hp = this.fullHP;
        } else {
            this.hp += amount;
        }
    }
    dealDamage(amount) {
        if (this.hp - amount < 0) {
            this.hp = 0;
        } else {
            this.hp -= amount;
        }
    }
    addWin() {
        this.wins += 1;
    }
    addLoss() {
        this.losses += 1;
    }
}
const fighter1 = new Fighter({name: 'John', damage: 20, hp: 100, agility: 25});
const fighter2 = new Fighter({name: 'Jim', damage: 10, hp: 120, agility: 40});
function battle(fighter1, fighter2) {
    if (fighter1.hp === 0) {
        console.log(fighter1.name + '(fighter 1) is dead and can\'t fight');
    } else if (fighter2.hp === 0) {
        console.log(fighter2.name + '(fighter 2) is dead and can\'t fight');
    } else {
        while (fighter1.hp > 0 && fighter2.hp > 0) {
            fighter1.attack(fighter2);
            if (fighter2.hp > 0) {
                fighter2.attack(fighter1);
            }
        }
        if (fighter2.hp === 0) {
            fighter1.addWin();
            fighter2.addLoss();
            console.log(fighter1.name + ' win. Health remaining: ' + fighter1.hp);
            console.log(fighter1.logCombatHistory());
            console.log(fighter2.logCombatHistory());
        } else if (fighter1.hp === 0) {
            fighter2.addWin();
            fighter1.addLoss();
            console.log(fighter2.name + ' win. Health remaining: ' + fighter2.hp);
            console.log(fighter2.logCombatHistory());
            console.log(fighter1.logCombatHistory());
        }
    }
}
battle(fighter1, fighter2);