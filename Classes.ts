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

export class Animatueur {
    classname = "animatueur";
    UI = [
        "  の   ",
        "  杀مــ",
        "  刀   ",
    ];

    Processeurs = 10;
    Défense = 5;
    Codage = 0;
    Batterie = 50;
    RAM = 32;
}

export class Nainformaticien {
    classname = "nainformaticien";
    UI = [
        "       ",
        "  の   ",
        "  技ロ ",
    ];

    Processeurs = 4;
    Défense = 10;
    Codage = 6;
    Batterie = 70;
    RAM = 16;

}

export class Cyberserker {
    classname = "cyberserker";
    UI = [
        "  尊   ",
        " ⛨裁مــ",
        "  清   ",
    ];

    Processeurs = 8;
    Défense = 8;
    Codage = 9;
    Batterie = 70;
    RAM = 16;
}

export class Captchattaque {
    classname = "captchattaque";
    UI = [
        "  樂   ",
        "Ɵ═攻═Ɵ ",
        "  勇   ",
    ];

    Processeurs = 4;
    Défense = 5;
    Codage = 8;
    Batterie = 80;
    RAM = 32;
}

export class Pèrecrea {
    classname = "pèrecrea";
    UI = [
        "  护 ☥ ",
        "  息─┤ ",
        "  大 │ ",
    ];

    Processeurs = 6;
    Défense = 8;
    Codage = 6;
    Batterie = 100;
    RAM = 18;
}

export class Webscammer {
    classname = "webscammeur";
    UI = [
        "  の   ",
        "  播   ",
        "  扰   ",
    ];
    Processeurs = 5;
    Défense = 4;
    Codage = 10;
    Batterie = 80;
    RAM = 32;
}

export class Archicube {
    classname = "archicube";
    UI = [
        "  护 ⚘ ",
        " 𓆰城─┤ ",
        "  防 │ ",
    ];
    Processeurs = 0;
    Défense = 10;
    Codage = 10;
    Batterie = 80;
    RAM = 32;
}