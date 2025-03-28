//import * as readline from 'readline';

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
    }
};
/*
class Classesmenu {

};*/