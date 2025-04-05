import { character } from "../Classes/Classes.ts";
import { Ennemi } from "../Classes/Ennemies/Ennemies.ts";
import { Refresh } from "../Misc/Refresh.ts";

export class Fight {
    private allies: Array<character>;
    private ennemi: Array<Ennemi>;  

    private UI: Array<string>;

    private turn: number;

    constructor(allies: Array<character>, ennemi: Array<Ennemi>, UI: Array<string>) {
        this.allies = allies;
        this.ennemi = ennemi;
        this.UI = UI;

        this.turn = 0;
    }

    IsFinished(): string {
        let alliesalive = false;
        let ennemiesalive = false;

        for (let i = 0; i < this.allies.length; i++) {
            if (this.allies[i].battery > 0) {
                alliesalive = true;
            }
        }
        for (let i = 0; i < this.ennemi.length; i++) {
            if (this.ennemi[i].battery > 0) {
                ennemiesalive = true;
            }
        }

        if (alliesalive && ennemiesalive) {
            return "continue";
        } else if (!alliesalive) {
            return "lost";
        } else {
            return "won";
        }
    }

    Turn(): void {
        this.turn++;
        console.log("Tour " + this.turn);
        new Refresh();
        for (let i = 0; i < this.UI.length; i++) {
            console.log(this.UI[i]);
        }   
        

        const status = this.IsFinished();
        if (status === "continue") {
            this.Turn();
        } else if (status === "lost") {
            console.log("Vous avez perdu la partie");
        }
        else if (status === "won") {
            console.log("Vous avez gagné la partie");
        }
    }
}