import * as capacity from '../Main/Capacity.ts';

export class Ennemi {
    classname: string;
    ui: Array<string>;

    attack: number; 
    defense: number;
    processors: number;
    antivirus: number;
    battery: number;
    maxbattery: number;
    expreward: number;

    capacity1: capacity.Capacity;
    capacity2: capacity.Capacity | null;

    constructor(classname: string, ui: Array<string>, attack: number, defense: number, processors: number, antivirus: number, battery: number, maxbattery: number, expreward: number, capacity1: capacity.Capacity, capacity2: capacity.Capacity | null) {
        this.classname = classname;
        this.ui = ui;
        this.attack = attack;
        this.defense = defense;
        this.processors = processors;
        this.antivirus = antivirus;
        this.battery = battery;
        this.maxbattery = maxbattery;
        this.expreward = expreward;

        this.capacity1 = capacity1;
        this.capacity2 = capacity2;
    }
}