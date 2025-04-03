import { Etage } from "./Etage.ts";
import { Game } from "./Game.ts";
import { Refresh } from "./Refresh.ts";

export class Mainmenu {
    UI = [
        "#######################################################################################################################",
        "#                                                                                                                     #",
        "#                                                                                                                     #",
        "#                                                                                                                     #",
        "#                         \\#\\   /#/   /######|    /#####|      /##\\      |######\\   |######|                          #",
        "#                          \\#\\ /#/   /#/         |#|          /#/\\#\\     |#|   |#|  |#|                               #",
        "#                           \\# #/    \\#\\         |#|         /#/  \\#\\    |#|   |#|  |#|                               #",
        "#                            \\#/      \\######\\   |#|        /#/    \\#\\   |######/   |######|                          #",
        "#                            |#|            \\#\\  |#|       ╔##########╗  |#|        |#|                               #",
        "#                            |#|            /#/  |#|       |#|      |#|  |#|        |#|                               #",
        "#                            |#|     |#######/    \\#####|  |#|      |#|  |#|        |######|                          #" ,
        "#                                                                                                                     #",
        "#                                                                                                                     #", // Moitié
        "#                                                                                                                     #",
        "#                                               1: Sélection des héros                                                #",
        "#                                                                                                                     #",
        "#                                                                                                                     #",
        "#                                                                                                                     #",
        "#                                                                                                                     #",
        "#                                                                                                                     #",
        "#                                                                                                                     #",
        "#                                                                                                                     #",
        "#                                                                                                                     #",
        "#                                                                                                                     #",
        "#######################################################################################################################",
    ];

    constructor() {
        
    }

    affiche(): void {
        new Refresh();
        for (let i = 0; i < this.UI.length; i++) {
            const str = this.UI[i];
    
            let coloredString = '';
            for (let j = 0; j < str.length; j++) {
                if (j !== 0 && j !== str.length - 1 && i >= 4 && i < 11) {
                    coloredString += '\x1b[31m' + str[j] + '\x1b[0m'; //rouge
                } else {
                    coloredString += '\x1b[37m' + str[j] + '\x1b[0m'; //blanc
                }
            }
            
            console.log(coloredString);
        }
    };

    begin(): void {
        this.affiche();
        let choix: string | null = prompt("Votre choix:");
        for (;choix !== "1";) {
            console.log("Veuillez rentrer un nombre valable.");
            choix = prompt("Votre choix:");
        }
        const etage = new Etage();
        etage.Affiche();
        const classesmenu = new Classesmenu();
        classesmenu.Load()
    }
};

class Classesmenu {
    UI = [
        "#######################################################################################################################",
        "#                  Animatueur Nainformaticien Cyberserker   Captchattaque   Pèrecrea     Webscammer    Archicube      #",
        "#         n°           1             2            3               4             5             6            7          #",
        "#                                                                                                                     #",
        "#                     の                         尊              樂            护 ☥          の           护 ⚘        #",
        "#      Character      杀مــ         の          ⛨裁مــ         Ɵ═攻═Ɵ          息─┤          播          𓆰城─┤        #",
        "#                     刀            技ロ         清              勇            大 │          扰           防 │        #",
        "#                                                                                                                     #",
        "# Attaque physique:                                                                                                   #",
        "# Codage (magie):                                                                                                     #",
        "# Défense:                                                                                                            #",
        "# Batterie (pv):                                                                                                      #",
        "# RAM (endurance):                                                                                                    #", // Moitié
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
        } else if (choices[0] < "1" || choices[0] > "7") {
            return false;
        } else if (choices[1] < "1" || choices[1] > "7") {
            return false;
        } else if (choices[2] < "1" || choices[2] > "7") {
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