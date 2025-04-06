import { Ympeldown } from "../Etage/Ympeldown.ts";
import { Team } from "./Team.ts";

export class Game {
    private ympeldown: Ympeldown;
    private allies: Team;
    
    constructor(choices: string) {
        this.ympeldown = new Ympeldown();

        this.allies = new Team(choices);
        this.allies.GetTeam();
        this.Handler();
    }

    Handler(): void {
        for (let i = 0; i < this.ympeldown.Etages.length; i++) {
            this.ympeldown.Etages[i].Start(this.allies.GetTeam())
        };
    }
}