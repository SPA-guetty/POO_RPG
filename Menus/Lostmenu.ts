import { Classesmenu } from "./Classesmenu.ts";
import { Refresh } from "../Misc/Refresh.ts";

export class Lostmenu {
    UI = [
        "#######################################################################################################################",
        "#                                                                                                                     #",
        "#                                                                                                                     #",
        "#                                                                                                                     #",
        "#                                                                                                                     #",
        "#           \\#\\           /#/    |#|      /######|    |#########|    /########\\     /#######\\     \\#\\   /#/           #",
        "#            \\#\\         /#/     |#|     |#|              |#|       |#|      |#|    |#|    |#|     \\#\\ /#/            #",
        "#             \\#\\       /#/      |#|     |#|              |#|       |#|      |#|    |#|    |#|      \\# #/             #",
        "#              \\#\\     /#/       |#|     |#|              |#|       |#|      |#|    |#######/        \\#/              #",
        "#               \\#\\   /#/        |#|     |#|              |#|       |#|      |#|    |#|  \\#\\         |#|              #",
        "#                \\#\\ /#/         |#|     |#|              |#|       |#|      |#|    |#|   \\#\\        |#|              #",
        "#                 \\###/          |#|      \\######|        |#|        \\########/     |#|    \\#\\       |#|              #",
        "#                                                                                                                     #",
        "#                                                                                                                     #", // Moitié
        "#                                                                                                                     #",
        "#                                                1: Create a new game                                                 #",
        "#                                                                                                                     #",
        "#                                                      2: Leave                                                       #",
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
        while (choix !== "1" && choix !== "2") {
            if (choix == "2") {return}
            console.log("Veuillez rentrer un nombre proposé.");
            choix = prompt("Votre choix:");
        }
        const classesmenu = new Classesmenu();
        classesmenu.Load()
    }
};
