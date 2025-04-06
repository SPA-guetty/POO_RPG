import * as capacity from "../../Main/Capacity.ts";

export class Cyberserker {
    classname = "cyberserker";
    ui = [
        "  尊   ",
        " ⛨裁مــ",
        "  清   ",
    ];

    attack = 5;
    defense = 7;
    processors = 6;
    antivirus = 8;
    battery = 70;
    maxbattery = 70;
    ram = 16;

    capacity1 = new capacity.Capacity(
        "Hacking", // name
        "Attaque un adversaire à distance, inflige des dégâts élevés", // description
        1, // number of targets
        false, // random ennemy
        "code", // type
        4, // RAM
        [new capacity.CapacityEffect("battery", -25)], // statistics
    );
    capacity2 = new capacity.Capacity(
        "Rush", // name
        "Tente de s'attaquer directement aux adversaires (dégâts lourds répartits sur les adversaires), petite chance d'échouer et de subire des dégâts", // description
        3, // number of targets
        true, // random ennemy
        "physical, dangerous", // type
        8, // RAM
        [new capacity.CapacityEffect("battery", -60)], // statistics
    );
    passive = new capacity.Passive(
        "Cyber-eye", // name: string;
        "Fait attention à son trafic réseau: 60% de chance d\'éviter un piratage", // description: string;
        "code", // type: string;
        "dodge", // effect: string;
        .6, // intensity: number;
    );
}
