import * as capacity from "../../Main/Capacities/Capacity.ts";

export class Animatueur {
    classname = "animatueur";
    ui = [
        "  の   ",
        "  杀مــ",
        "  刀   ",
    ];

    attack = 10;
    defense = 5;
    processors = 0;
    antivirus = 3;
    battery = 50;
    maxbattery = 50;
    ram = 32;

    capacity1 = new capacity.Capacity(
        "Manipulation visuelle", // name
        "Anime une illusion pour les adversaires pour les déstabiliser: baisse leur attaque + défense de 50%", // description
        3, // number of targets
        true, // random ennemy
        "debuff", // type
        20, // RAM
        [new capacity.CapacityEffect("defense", 0.5), new capacity.CapacityEffect("attack", 0.5)], // statistics
    );
    capacity2 = new capacity.Capacity(
        "Quick-dash", // name
        "Se projette rapidement sur un adversaire au choix en infigeant de lourds dégâts", // description
        1, // number of targets
        false, // random ennemy
        "physical", // type
        0, // RAM
        [new capacity.CapacityEffect("battery", -20)], // statistics
    );
    passive = new capacity.Passive(
        "Agility", // name: string;
        "60% de chance d'esquiver une attaque physique", // description: string;
        "physical", // type: string;
        "dodge", // effect: string;
        .6, // intensity: number;
    );
}