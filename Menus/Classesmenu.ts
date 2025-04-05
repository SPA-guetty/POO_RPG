import { Refresh } from "../Misc/Refresh.ts";
import { Game } from "../Main/Game.ts";

export class Classesmenu {
    UI = [
        "#######################################################################################################################",
        "#                                                                                                                     #",
        "#                    Animatueur    Nainformaticien   Cyberserker   Captchattaque      Webscammer      Archicube       #",
        "#         n°             1                2              3               4                5               6           #",
        "#                                                                                                                     #",
        "#                        の                              尊              樂               の             护 ⚘         #",
        "#      Character         杀مــ           の            ⛨裁مــ          Ɵ═攻═Ɵ             播            𓆰城─┤         #",
        "#                        刀              技ロ            清              勇               扰             防 │         #",
        "#                                                                                                                     #",
        "# Attaque physique:                                                                                                   #",
        "# Codage (magie):                                                                                                     #",
        "# Défense physique:                                                                                                   #",
        "# Défense informatique:                                                                                               #",
        "# Batterie (pv):                                                                                                      #", // Moitié
        "# RAM (endurance):                                                                                                    #",
        "#                                                                                                                     #",
        "# Attaque n°1:                                                                                                        #",
        "# Dégâts:                                                                                                             #",
        "# Cible(s):                                                                                                           #",
        "#                                                                                                                     #",
        "# Attaque n°2:                                                                                                        #",
        "# Dégâts:                                                                                                             #",
        "# Cible(s)                                                                                                            #",
        "#                                                                                                                     #",
        "# Passif:                                                                                                             #",
        "#                                                                                                                     #",
        "#######################################################################################################################",
    ]

    Affiche() : void {
        new Refresh();
        for (let i = 0; i < this.UI.length; i++) {
            console.log(this.UI[i]);
        }
    }

    StrNulltoStr(strnull: string | null): string {
        if (strnull === null) {
            return "";
        } else {
            return strnull;
        }
    }

    CharactersConditions(choices: string): boolean {
        if (choices.length !== 3) {
            return false;
        } else if (choices[0] === choices[1] || choices[0] === choices[2] || choices[1] === choices[2]) {
            return false;
        } else if (choices[0] < "1" || choices[0] > "6") {
            return false;
        } else if (choices[1] < "1" || choices[1] > "6") {
            return false;
        } else if (choices[2] < "1" || choices[2] > "6") {
            return false;
        }
        return true;
    }

    Load(): void {
        this.Affiche();
        let choices: string | null = "000";
        choices = this.StrNulltoStr(prompt("Veuillez choisir vos 3 personnages: "));
        while (!this.CharactersConditions(choices)) {
            choices = this.StrNulltoStr(prompt("Veuillez choisir 3 personnages différents: "));
        }
        const game = new Game()
        game.Start(choices)
    }
};