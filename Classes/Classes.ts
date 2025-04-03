export class classes {
    animatueur = new Animatueur();
    nainformaticien = new  Nainformaticien();
    cyberserker = new Cyberserker();
    captchattaque = new Captchattaque();
    perecrea = new Pèrecrea()
    webscammeur = new Webscammer();
    archicube = new Archicube();

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

    constructor(selectedcharacter: Animatueur | Nainformaticien | Cyberserker | Captchattaque | Pèrecrea | Webscammer | Archicube) {
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

export class Animatueur {
    classname = "animatueur";
    ui = [
        "  の   ",
        "  杀مــ",
        "  刀   ",
    ];

    processors = 10;
    defense = 5;
    coding = 0;
    battery = 50;
    maxbattery = 50;
    ram = 32;
}

export class Nainformaticien {
    classname = "nainformaticien";
    ui = [
        "       ",
        "  の   ",
        "  技ロ ",
    ];

    processors = 4;
    defense = 10;
    coding = 6;
    battery = 70;
    maxbattery = 70;
    ram = 16;

}

export class Cyberserker {
    classname = "cyberserker";
    ui = [
        "  尊   ",
        " ⛨裁مــ",
        "  清   ",
    ];

    processors = 8;
    defense = 8;
    coding = 9;
    battery = 70;
    maxbattery = 70;
    ram = 16;
}

export class Captchattaque {
    classname = "captchattaque";
    ui = [
        "  樂   ",
        "Ɵ═攻═Ɵ ",
        "  勇   ",
    ];

    processors = 4;
    defense = 5;
    coding = 8;
    battery = 80;
    maxbattery = 80;
    ram = 32;
}

export class Pèrecrea {
    classname = "pèrecrea";
    ui = [
        "  护 ☥ ",
        "  息─┤ ",
        "  大 │ ",
    ];

    processors = 6;
    defense = 8;
    coding = 6;
    battery = 100;
    maxbattery = 100;
    ram = 18;
}

export class Webscammer {
    classname = "webscammeur";
    ui = [
        "  の   ",
        "  播   ",
        "  扰   ",
    ];
    processors = 5;
    defense = 4;
    coding = 10;
    battery = 80;
    maxbattery = 80;
    ram = 32;
}

export class Archicube {
    classname = "archicube";
    ui = [
        "  护 ⚘ ",
        " 𓆰城─┤ ",
        "  防 │ ",
    ];
    processors = 0;
    defense = 10;
    coding = 10;
    battery = 80;
    maxbattery = 80;
    ram = 32;
}