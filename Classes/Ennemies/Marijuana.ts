import { Ennemy } from "./Ennemies.ts";
import * as capacity from "../../Main/Capacity.ts";

export class Marijuana extends Ennemy {
    constructor() {
        super(
            "Marijuana", //classname
            [
                "  乁   ",
                "  敌   ",
                "  共   ",
            ],
            6, //attack
            4, //defense
            6, //processors
            4, //antivirus
            200, //battery
            200, //maxbattery
            150, //expreward

            new capacity.Capacity(
                "Absence", // name
                "Efface une partie de l'existence de quelqu\'un", // description
                1, // number of targets
                true, // random ennemy
                "code", // type
                0, // RAM
                [new capacity.CapacityEffect("battery", -15)], // statistics
            ),

            new capacity.Capacity(
                "Absence générale", // name
                "Efface une partie de l'existence de chacun des alliés", // description
                3, // number of targets
                true, // random ennemy
                "code", // type
                0, // RAM
                [new capacity.CapacityEffect("battery", -10)], // statistics
            ),
        )
    }
}