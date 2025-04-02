import { Animatueur } from "./Classes.ts";
import { Nainformaticien } from "./Classes.ts";
import { Cyberserker } from "./Classes.ts";
import { Captchattaque } from "./Classes.ts";
import { Pèrecrea } from "./Classes.ts";
import { Webscammer } from "./Classes.ts";
import { Archicube } from "./Classes.ts"
import { Ympeldown } from "./Ympeldown.ts";

class Team {
    character1;
    character2;
    character3;

    characterslist: Array<Animatueur | Nainformaticien | Cyberserker | Captchattaque | Pèrecrea | Webscammer | Archicube> = [];

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
                actualclass = new Pèrecrea();
            } else if (selection === "6") {
                actualclass = new Webscammer();
            } else {
                actualclass = new Archicube();
            }


            if (i === 0) {
                this.character1 = actualclass;
                this.characterslist.push(this.character1)
            } else if (i === 1) {
                this.character2 = actualclass;
                this.characterslist.push(this.character2)
            } else {
                this.character3 = actualclass;
                this.characterslist.push(this.character3)
            }
        }
    }

    GetTeam(): void {
        console.log("Voici votre équipe: \n\n")
        for (let i = 0; i < this.characterslist.length; i++) {
            for (let line = 0; line < this.characterslist[i].UI.length; line++) {
                console.log(this.characterslist[i].UI[line]);
            }
            console.log(this.characterslist[i].classname + "\n")
        } 
    }
}

export class Game {
    ympeldown = new Ympeldown()
    
    Start(choices: string): void {
        const team = new Team(choices);
        team.GetTeam();
    }
}