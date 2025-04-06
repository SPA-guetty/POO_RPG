import { Ympeldown } from "../Etage/Ympeldown.ts";
import { Team } from "./Team.ts";

export class Game {
    private ympeldown: Ympeldown;
    private allies: Team;
    
    constructor(choices: string) {
        this.ympeldown = new Ympeldown();

        this.allies = new Team(choices);
        this.Handler();
    }

    async Handler() {
        for (let i = 0; i < this.ympeldown.Etages.length; i++) {
            await this.ympeldown.Etages[i].Start(this.allies.GetTeam())
            this.allies.Heal(10);
        };
    }
}