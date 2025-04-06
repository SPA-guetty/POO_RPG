import { Archicube } from "../Classes/Allies/Archicube.ts";
import { Webscammer } from "../Classes/Allies/Webscammer.ts";
import { Captchattaque } from "../Classes/Allies/Captchattaque.ts";
import { Cyberserker } from "../Classes/Allies/Cyberserker.ts";
import { Nainformaticien } from "../Classes/Allies/Nainformaticien.ts";
import { Animatueur } from "../Classes/Allies/Animatueur.ts";

import { character } from "../Classes/Classes.ts";

export class Team {
    private character1;
    private character2;
    private character3;

    private characterslist: Array<character> = [];

    constructor(choices: string) {
        for (let i = 0; i <= 2; i++) {
            const selection = choices[i];
            let actualclass;
            if (selection === "1") {
                actualclass = new Animatueur()
            } else if (selection === "2") {
                actualclass = new Nainformaticien();
            } else if (selection === "3") {
                actualclass = new Cyberserker();
            } else if (selection === "4") {
                actualclass = new Captchattaque();
            } else if (selection === "5") {
                actualclass = new Webscammer();
            } else {
                actualclass = new Archicube();
            }


            if (i === 0) {
                this.character1 = new character(actualclass);
                this.characterslist.push(this.character1)
            } else if (i === 1) {
                this.character2 = new character(actualclass);
                this.characterslist.push(this.character2)
            } else {
                this.character3 = new character(actualclass);
                this.characterslist.push(this.character3)
            }
        }
    }

    Heal(nb: number) {
        if (this.character1!.battery > 0) {
            this.character1!.battery += nb;
            if (this.character1!.battery > this.character1!.maxbattery) {
                this.character1!.battery = this.character1!.maxbattery;
            }
        }
        if (this.character2!.battery > 0) {
            this.character2!.battery += nb;
            if (this.character2!.battery > this.character2!.maxbattery) {
                this.character2!.battery = this.character2!.maxbattery;
            }
        }
        if (this.character3!.battery > 0) {
            this.character3!.battery += nb;
            if (this.character3!.battery > this.character3!.maxbattery) {
                this.character3!.battery = this.character3!.maxbattery;
            }
        }
    }

    GetTeam(): Array<character> {
        return this.characterslist;
    }
}