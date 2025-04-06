import { Ennemy } from "./Ennemies.ts";
import * as capacity from "../../Main/Capacities/Capacity.ts";

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
            8, //defense
            6, //processors
            10, //antivirus
            120, //battery
            120, //maxbattery
            100, //expreward

            new capacity.Capacity(
                "CTF", // name
                "Utilise ses compétences en CTF pour attaquer", // description
                1, // number of targets
                true, // random ennemy
                "code", // type
                0, // RAM
                [new capacity.CapacityEffect("battery", -10)], // statistics
            ),

            null,
        )
    }
}