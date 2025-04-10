import * as capacity from "../../Main/Capacities/Capacity.ts";

export class Archicube {
    classname = "archicube";
    ui = [
        "  护 ⚘ ",
        " 𓆰城─┤ ",
        "  防 │ ",
    ];
    attack = 0;
    defense = 2;
    processors = 10;
    antivirus = 10;
    battery = 80;
    maxbattery = 80;
    ram = 0;

    capacity1 = new capacity.Capacity(
        "Hidden-socket", // name
        "Redonne 20pv à l'allié de son choix", // description
        1, // number of targets
        false, // random ennemy
        "heal", // type
        2, // RAM
        [new capacity.CapacityEffect("batterie", 20)], // statistics
    );
    capacity2 = new capacity.Capacity(
        "Mur porteur", // name
        "Protège son équipe des attaques physiques du tour", // description
        3, // number of targets
        true, // random ennemy
        "buff", // type
        2, // RAM
        [new capacity.CapacityEffect("defense", 1 )], // statistics
    );

    passive = new capacity.Passive(
            "Inflation", // name: string;
            "+5% des crédits du combat par tour", // description: string;
            "misc", // type: string;
            "credits", // effect: string;
            .6, // intensity: number;
        );
}