import { Archicube } from "../Classes/Allies/Archicube.ts";
import { Webscammer } from "../Classes/Allies/Webscammer.ts";
import { Captchattaque } from "../Classes/Allies/Captchattaque.ts";
import { Cyberserker } from "../Classes/Allies/Cyberserker.ts";
import { Nainformaticien } from "../Classes/Allies/Nainformaticien.ts";
import { Animatueur } from "../Classes/Allies/Animatueur.ts";

import * as capacity from '../Main/Capacities/Capacity.ts';

export class classelist {
    animatueur = new Animatueur();
    nainformaticien = new Nainformaticien();
    cyberserker = new Cyberserker();
    captchattaque = new Captchattaque();
    webscammeur = new Webscammer();
    archicube = new Archicube();

    classlist = [
        this.animatueur, 
        this.nainformaticien, 
        this.cyberserker, 
        this.captchattaque, 
        this.webscammeur, 
        this.archicube,
    ];
}

export class character {
    classname: string;
    ui: Array<string>;

    attack: number; 
    defense: number;
    processors: number;
    antivirus: number;
    battery: number;
    maxbattery: number;
    ram: number;

    level: number = 0;

    capacity1: capacity.Capacity;
    capacity2: capacity.Capacity;

    passive: capacity.Passive | null;

    constructor(selectedcharacter: Animatueur | Nainformaticien | Cyberserker | Captchattaque | Webscammer | Archicube) {
        this.classname = selectedcharacter.classname;
        this.ui = selectedcharacter.ui;
        this.attack = selectedcharacter.attack;
        this.defense = selectedcharacter.defense;
        this.processors = selectedcharacter.processors;
        this.antivirus = selectedcharacter.antivirus;
        this.battery = selectedcharacter.battery;
        this.maxbattery = selectedcharacter.maxbattery;
        this.ram = selectedcharacter.ram;
        this.capacity1 = selectedcharacter.capacity1;
        this.capacity2 = selectedcharacter.capacity2;
        this.passive = selectedcharacter.passive;
    }

    LevelUp(): void {
        this.attack += 1; 
        this.defense += 1;
        this.processors += 1;
        this.antivirus += 1;
        this.battery += 5;
        this.maxbattery += 5;

        this.level += 1;
    }

    AddXp(nb: number): void {
        this.ram += nb;
        while (this.ram >= 500) {
            this.ram -= 500;
            this.LevelUp();
        }
    }
}