import { Ympeldown } from "../Etage/Ympeldown.ts";
import { Team } from "./Team.ts";

export class Game {
    private ympeldown: Ympeldown;

    constructor() {
        this.ympeldown = new Ympeldown();
    }
    
    Start(choices: string): void {
        const allies = new Team(choices);
        allies.GetTeam();
    }
}