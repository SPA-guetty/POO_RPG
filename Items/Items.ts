import { character } from "../Classes/Classes.ts";

export class Item {
    name: string;
    description: string;
    effect: string;
    power: number;

    constructor(name: string, description: string, effect: string, power: number) {
        this.name = name;
        this.description = description;
        this.effect = effect;
        this.power = power;
    }

    use(target: character) {
        if (this.effect === "heal") {
            target.battery = target.battery + this.power;
            if (target.battery > target.maxbattery) {
                target.battery = target.maxbattery;
            }
            console.log(`${target.classname} a utilisé ${this.name} et a récupéré ${this.power} points de batterie!`);
        } else if (this.effect === "damage") {
            target.defense -= this.power;
            console.log(`${target.classname} a utilisé ${this.name} et a perdu ${this.power} points de défense!`);
        } else {
            console.log("Effet inconnu.");
        }
    }
}

export class Duracell extends Item {
    constructor() {
        super("Duracell", "Recharge de batterie", "heal", 20);
    }
}

export class ExternBattery extends Item {
    constructor() {
        super("Pile", "Recharge de batterie", "revive", 50);
    }
}

export class Battery extends Item {
    constructor() {
        super("Ram", "Change la batterie", "revive", 100);
    }
}

export class RAMCleaner extends Item {
    constructor() {
        super("RAM Cleaner", "Donne de la RAM", "stamina", 20);
    }
}

export class OldTiticomputer extends Item {
    constructor() {
        super("Titi\'s old computer", "Protège des attaques informatiques", "antivirus", 999);
    }
}

export class ShinyLaurentSkull extends Item {
    constructor() {
        super("Laurent's shiny skull", "Protège des attaques physiques", "armor", 999);
    }
}

export class Mysterycode extends Item {
    constructor() {
        super("Mystery code", "Un code mystérieux aux grands pouvoirs de destruction", "mystery", 0);
    }
}

export class USBkey extends Item {
    constructor() {
        super("Clé USB", "Une clé USB au code mystique, elle aide les alliés ou fait mal aux ennemis", "USB", 0);
    }
}

export class ExitKeys extends Item {
    constructor() {
        super("Exit keys", "Permet de sortir de Ympeldown", "exit", 0);
    }
}

export class Portoloin extends Item {
    constructor() {
        super("Portoloin", "Permet de se téléporter hors de Ympeldown", "teleport", 0);
    }
}