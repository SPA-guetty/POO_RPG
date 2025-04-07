import { Ennemy } from "./Ennemies.ts";
import * as capacity from "../../Main/Capacities/Capacity.ts";

export class Remy extends Ennemy {
    constructor() {
        super(
            "Remy (best of)", //classname
            [
                "  乁   ",
                "  敌   ",
                "  共   ",
            ],
            5, //attack
            8, //defense
            6, //processors
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
                [new capacity.CapacityEffect("battery", -10)], // statistics
            ),

            new capacity.Capacity(
                "git push --force", // name
                "Fonce sur son adversaire, se fait possiblement mal", // description
                1, // number of targets
                true, // random ennemy
                "physical, dangerous", // type
                0, // RAM
                [new capacity.CapacityEffect("battery", -15)], // statistics
            ),
        )
    }
}