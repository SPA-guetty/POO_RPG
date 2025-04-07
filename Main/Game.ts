import { Ympeldown } from "../Etage/Ympeldown.ts";
import { Team } from "./Team.ts";
import { Victorymenu } from "../Menus/Victorymenu.ts"
import { Lostmenu } from "../Menus/Lostmenu.ts"

export class Game {
    private ympeldown: Ympeldown;
    private allies: Team;
    private allylevel: number = 0;

    private lost = false;
    
    constructor(choices: string) {
        this.ympeldown = new Ympeldown();

        this.allies = new Team(choices);
        this.Handler();
    }

    async Handler() {
        for (let i = 0; i < this.ympeldown.Etages.length; i++) {
            if (!this.lost) {
                await this.ympeldown.Etages[i].Start(this.allies.GetTeam())
                let alliesdown = 0;
                for (let j = 0; j < this.allies.GetTeam().length; j++) {
                    if (this.allies.GetTeam()[j].battery === 0) {
                        alliesdown++
                    }
                }
                if (alliesdown === 3) {
                    this.lost = true
                }

                let xpwon = 0;
                for (let j = 0; j < this.ympeldown.Etages[i].GetEnnemyList().length; j++) {
                    if (this.ympeldown.Etages[i].GetEnnemyList()[j] !== null) {
                        xpwon += this.ympeldown.Etages[i].GetEnnemyList()[j]!.expreward;
                    }
                }

                this.allies.AddXp(xpwon)

                if (this.ympeldown.Etages[i].nb > 0) {
                    this.allies.Heal(10);
                } else {
                    this.allies.Heal(+1000);
                }
            }
        }
        let menu;

        if (this.lost) {
            menu = new Lostmenu()
        } else {
            menu = new Victorymenu()
        }

        menu.begin()
    }
}