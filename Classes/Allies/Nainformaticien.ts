import * as capacity from "../../Main/Capacity.ts";

export class Nainformaticien {
    classname = "nainformaticien";
    ui = [
        "       ",
        "  の   ",
        "  技ロ ",
    ];

    attack = 0;
    defense = 3;
    processors = 6;
    antivirus = 10;
    battery = 70;
    maxbattery = 70;
    ram = 16;

    capacity1 = new capacity.Capacity(
        "RAM-Refresh", // name
        "Redonne un peu de RAM à un allié au choix, au dépit de la sienne", // description
        1, // number of targets
        false, // random ennemy
        "code", // type
        5, // RAM
        [new capacity.CapacityEffect("RAM", 8)], // statistics
    );
    capacity2 = new capacity.Capacity(
        "Naino-mare", // name
        "Sait se faire petit et crée une faille chez ses adversaires en leur infligeant un peu de dégâts chacun pendant 2 tours", // description
        3, // number of targets
        true, // random ennemy
        "code", // type
        8, // RAM
        [new capacity.CapacityEffect("battery", -10)], // statistics
    );
    passive = null;
}