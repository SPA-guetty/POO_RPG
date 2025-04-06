import * as capacity from "../../Main/Capacities/Capacity.ts";

export class Webscammer {
    classname = "webscammeur";
    ui = [
        "  の   ",
        "  播   ",
        "  扰   ",
    ];
    attack = 5;
    defense = 6;
    processors = 10;
    antivirus = 5;
    battery = 80;
    maxbattery = 80;
    ram = 32;

    capacity1 = new capacity.Capacity(
        "Code-Rift", // name
        "Crée une faille dans l'algorithme faisant des dégâts aux adversaires", // description
        3, // number of targets
        true, // random ennemy
        "code", // type
        4, // RAM
        [new capacity.CapacityEffect("battery", -10)], // statistics
    );
    capacity2 = new capacity.Capacity(
        "Psycho-trap", // name
        "Crée des faux sites qui piègent les ennemis et baisse leurs statistiques", // description
        3, // number of targets
        true, // random ennemy
        "debuff", // type
        2, // RAM
        [new capacity.CapacityEffect("attack", 0.9), new capacity.CapacityEffect("defense", 0.9), new capacity.CapacityEffect("code", 0.9), new capacity.CapacityEffect("antivirus", 0.9)], // statistics
    );

    passive = new capacity.Passive(
        "Advertising", // name: string;
        "Donne 40% d'expérience en plus à la fin d'un combat", // description: string;
        "misc", // type: string;
        "xp", // effect: string;
        .4, // intensity: number;
    );
}
