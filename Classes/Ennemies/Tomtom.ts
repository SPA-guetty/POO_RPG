import { Ennemy } from "./Ennemies.ts";
import * as capacity from "../../Main/Capacity.ts";

export class Tomtom extends Ennemy {
    constructor() {
        super(
            "Tomtom", //classname
            [
                "  乁   ",
                "  裂   ",
                "  共   ",
            ],
            2, //attack
            1, //defense
            10, //processors
            10, //antivirus
            50, //battery
            50, //maxbattery
            100, //expreward

            new capacity.Capacity(
                "CTF", // name
                "Utilise ses compétences en CTF pour attaquer", // description
                1, // number of targets
                true, // random ennemy
                "code", // type
                0, // RAM
                [new capacity.CapacityEffect("batterie", -10)], // statistics
            ),

            null,
        )
    }
}