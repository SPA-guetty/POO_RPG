import { Ennemi } from "../Ennemis.ts";
import * as capacity from "../../Main/Capacity.ts";

export class Remy extends Ennemi {
    constructor() {
        super(
            "Remy (best of)", //classname
            [
                "  乁   ",
                "  敌   ",
                "  共   ",
            ],
            2, //attack
            1, //defense
            10, //processors
            2, //antivirus
            100, //battery
            100, //maxbattery
            150, //expreward

            new capacity.Capacity(
                "Absence", // name
                "Efface une partie de l'existence de quelqu\'un", // description
                1, // number of targets
                true, // random ennemy
                "code", // type
                0, // RAM
                [new capacity.CapacityEffect("batterie", -15)], // statistics
            ),

            new capacity.Capacity(
                "Absence générale", // name
                "Efface une partie de l'existence de chacun des alliés", // description
                3, // number of targets
                true, // random ennemy
                "code", // type
                0, // RAM
                [new capacity.CapacityEffect("batterie", -10)], // statistics
            ),
        )
    }
}