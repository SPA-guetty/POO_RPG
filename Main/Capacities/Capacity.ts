export class Capacity {
    name: string;
    description: string;
    numberoftargets: number | null;
    randomennemi: boolean;
    type: string;
    RAM: number;
    effect: Array<CapacityEffect>;

    constructor(name: string, description: string, numberoftargets: number | null, randomennemi: boolean, type: string, RAM: number, effect: Array<CapacityEffect>) {
        this.name = name;
        this.description = description;
        this.numberoftargets = numberoftargets;
        this.randomennemi = randomennemi;
        this.type = type;
        this.RAM = RAM;
        this.effect = effect;
    }
}

export class CapacityEffect {
    effect: string;
    intensity: number;

    constructor(effect: string, intensity: number) {
        this.effect = effect;
        this.intensity = intensity;
    }
}

export class Passive {
    name: string;
    description: string;
    type: string;
    effect: string;
    intensity: number;

    constructor(name: string, description: string, type: string, effect: string, intensity: number) {
        this.name = name;
        this.description = description;
        this.type = type;
        this.effect = effect;
        this.intensity = intensity;
    }
}