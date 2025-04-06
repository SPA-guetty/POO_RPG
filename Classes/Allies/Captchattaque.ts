import * as capacity from "../../Main/Capacities/Capacity.ts";

export class Captchattaque {
    classname = "captchattaque";
    ui = [
        "  樂   ",
        "Ɵ═攻═Ɵ ",
        "  勇   ",
    ];

    attack = 7;
    defense = 5;
    processors = 7;
    antivirus = 4;
    battery = 80;
    maxbattery = 80;
    ram = 16;

    capacity1 = new capacity.Capacity(
        "Malware", // name
        "Vole des pv alétoires à un nombre aléatoire d'ennemis pour les redistribuer équitablement à toute l'équipe alliée vivante", // description
        null, // number of targets
        true, // random ennemy
        "steal", // type
        12, // RAM
        [new capacity.CapacityEffect("battery", -10)], // statistics
    );
    capacity2 = new capacity.Capacity(
        "Trojan", // name
        "Attaque un nombre aléatoire de ses adversaires, baissant leur défense et infligeant des dégâts", // description
        null, // number of targets
        true, // random ennemy
        "physical, debuff", // type
        3, // RAM
        [new capacity.CapacityEffect("battery", -10), new capacity.CapacityEffect("defense", 0.5)], // statistics
    );
    passive = null;
}
