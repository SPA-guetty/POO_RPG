import { Etage } from "./Etage.ts";

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
        console.clear();
        for (let i = 0; i < this.UI.length; i++) {
            let str = this.UI[i];
    
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
        let etage = new Etage();
        etage.Affiche();
        const classesmenu = new Classesmenu();
        classesmenu.Affiche()
    }
};

class Classesmenu {
    UI = [
        "#######################################################################################################################",
        "#                                                                                                                     #",
        "#         n°          1             2            3               4             5             6            7           #",
        "#                                                                                                                     #",
        "#                     の                         尊              樂            护 ☥          の           护 ⚘        #",
        "#      Character      杀مــ         の          ⛨裁مــ         Ɵ═攻═Ɵ          息─┤          播          𓆰城─┤        #",
        "#                     刀            技ロ         清              勇            大 │          扰           防 │         #",
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
        console.clear();
        for (let i = 0; i < this.UI.length; i++) {
            console.log(this.UI[i]);
        }
    }
};