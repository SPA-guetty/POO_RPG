import { Ennemy } from "./Ennemies.ts";
import * as capacity from "../../Main/Capacity.ts";

export class Remy extends Ennemy {
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
                "Charge", // name
                "Fonce sur son adversaire", // description
                1, // number of targets
                true, // random ennemy
                "physical", // type
                0, // RAM
                [new capacity.CapacityEffect("batterie", -10)], // statistics
            ),

            new capacity.Capacity(
                "git push --force", // name
                "Fonce et ignore la défense adverse, endommage son allié aléatoirement", // description
                1, // number of targets
                true, // random ennemy
                "physical, dangerous", // type
                0, // RAM
                [new capacity.CapacityEffect("batterie", -20), new capacity.CapacityEffect("battery", -10)], // statistics
            ),
        )
    }
}