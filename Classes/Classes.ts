import * as allies from './Allies.ts'

export class classes {
    animatueur = new allies.Animatueur();
    nainformaticien = new allies.Nainformaticien();
    cyberserker = new allies.Cyberserker();
    captchattaque = new allies.Captchattaque();
    perecrea = new allies.Pèrecrea()
    webscammeur = new allies.Webscammer();
    archicube = new allies.Archicube();

    classlist = [
        this.animatueur, 
        this.nainformaticien, 
        this.cyberserker, 
        this.captchattaque, 
        this.perecrea, 
        this.webscammeur, 
        this.archicube,
    ];
}

export class character {
    classname: string;
    ui: Array<string>;

    processors: number; 
    defense: number;
    coding: number;
    battery: number;
    maxbattery: number;
    ram: number;

    constructor(selectedcharacter: allies.Animatueur | allies.Nainformaticien | allies.Cyberserker | allies.Captchattaque | allies.Pèrecrea | allies.Webscammer | allies.Archicube) {
        this.classname = selectedcharacter.classname;
        this.ui = selectedcharacter.ui;
        this.processors = selectedcharacter.processors;
        this.defense = selectedcharacter.defense;
        this.coding = selectedcharacter.coding;
        this.battery = selectedcharacter.battery;
        this.maxbattery = selectedcharacter.maxbattery;
        this.ram = selectedcharacter.ram;
    }
}