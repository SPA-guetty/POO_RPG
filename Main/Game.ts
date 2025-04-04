import * as allies from "../Classes/Allies.ts";

import { character } from "../Classes/Classes.ts";

import { Ympeldown } from "../Etage/Ympeldown.ts";

class Team {
    private character1;
    private character2;
    private character3;

    private characterslist: Array<character> = [];

    constructor(choices: string) {
        for (let i = 0; i <= 2; i++) {
            const selection = choices[i];
            let actualclass;
            if (selection === "1") {
                actualclass = new allies.Animatueur()
            } else if (selection === "2") {
                actualclass = new allies.Nainformaticien();
            } else if (selection === "3") {
                actualclass = new allies.Cyberserker();
            } else if (selection === "4") {
                actualclass = new allies.Captchattaque();
            } else if (selection === "5") {
                actualclass = new allies.Pèrecrea();
            } else if (selection === "6") {
                actualclass = new allies.Webscammer();
            } else {
                actualclass = new allies.Archicube();
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

    GetTeam(): void {
        console.log("Voici votre équipe: \n\n")
        for (let i = 0; i < this.characterslist.length; i++) {
            for (let line = 0; line < this.characterslist[i].ui.length; line++) {
                console.log(this.characterslist[i].ui[line]);
            }
            console.log(this.characterslist[i].classname + "\n")
        } 
    }
}

export class Game {
    private ympeldown = new Ympeldown()
    
    Start(choices: string): void {
        const team = new Team(choices);
        team.GetTeam();
    }
}