import * as capacity from "../../Main/Capacities/Capacity.ts";

export class Nainformaticien {
    classname = "nainformaticien";
    ui = [
        "       ",
        "  の   ",
        "  技ロ ",
    ];

    attack = 0;
    defense = 5;
    processors = 7;
    antivirus = 10;
    battery = 70;
    maxbattery = 70;
    ram = 16;

    capacity1 = new capacity.Capacity(
        "Battery sharing", // name
        "Donne un peu de sa batterie à un allié au choix", // description
        1, // number of targets
        false, // random ennemy
        "heal, dangerous", // type
        5, // RAM
        [new capacity.CapacityEffect("battery", 10)], // statistics
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