import { Etage } from "../Etage/Etage.ts";
import { Classesmenu } from "./Classesmenu.ts";
import { Refresh } from "../Misc/Refresh.ts";

export class Mainmenu {
    UI = [
        "#######################################################################################################################",
        "#                                                                                                                     #",
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
        "#                                                 1: Create new game                                                  #",
        "#                                                                                                                     #",
        "#                                                   2: Load a game                                                    #",
        "#                                                                                                                     #",
        "#                                                      3: Leave                                                       #",
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
                if (j !== 0 && j !== str.length - 1 && i >= 5 && i < 12) {
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
