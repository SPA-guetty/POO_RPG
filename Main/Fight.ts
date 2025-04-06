import { character } from "../Classes/Classes.ts";
import { Ennemy } from "../Classes/Ennemies/Ennemies.ts";
import { Refresh } from "../Misc/Refresh.ts";
import { Capacity } from "./Capacity.ts";
import { PromptChecking } from "../Misc/PromptChecking.ts";
import { Wait } from "../Misc/Wait.ts";

export class Fight {
    private allies: Array<character>;
    private ennemies: Array<Ennemy | null>;  

    private UI: Array<string>;

    private turn: number;

    constructor(allies: Array<character>, ennemies: Array<Ennemy | null>, UI: Array<string>) {
        this.allies = allies;
        this.ennemies = ennemies;
        this.UI = UI;

        this.turn = 0;
    }
    
    PrintUI(): void {
        new Refresh();
        for (let i = 0; i < this.UI.length; i++) {
            console.log(this.UI[i]);
        }  
    }

    PrintCapacities(character: character): void {
        this.PrintUI();
        console.log("1: " + character.capacity1.name + " : " + character.capacity1.description);
        console.log("2: " + character.capacity2.name + " : " + character.capacity2.description);
        console.log("Autre: Annuler")
    }

    PrintAllies(): void {
        this.PrintUI();
        console.log(`1: ${this.allies[0]?.classname} : (Batterie: ${this.allies[0]?.battery}/${this.allies[0]?.maxbattery})`);
        console.log(`2: ${this.allies[1]?.classname} : (Batterie: ${this.allies[1]?.battery}/${this.allies[1]?.maxbattery})`);
        console.log(`3: ${this.allies[2]?.classname} : (Batterie: ${this.allies[2]?.battery}/${this.allies[2]?.maxbattery})`);
        console.log("Autre: Annuler");
    }

    PrintEnnemies(): void {
        this.PrintUI();
        const nb = this.CountEnnemies();
        if (nb === 1) {
            console.log(`1: ${this.ennemies[1]?.classname} : (Batterie: ${this.ennemies[1]?.battery}/${this.ennemies[1]?.maxbattery})`);
        } else if (nb === 2) {
            console.log(`1: ${this.ennemies[0]?.classname} : (Batterie: ${this.ennemies[0]?.battery}/${this.ennemies[0]?.maxbattery})`);
            console.log(`2: ${this.ennemies[2]?.classname} : (Batterie: ${this.ennemies[2]?.battery}/${this.ennemies[2]?.maxbattery})`);
        } else {
            console.log(`1: ${this.ennemies[0]?.classname} : (Batterie: ${this.ennemies[0]?.battery}/${this.ennemies[0]?.maxbattery})`);
            console.log(`2: ${this.ennemies[1]?.classname} : (Batterie: ${this.ennemies[1]?.battery}/${this.ennemies[1]?.maxbattery})`);
            console.log(`3: ${this.ennemies[2]?.classname} : (Batterie: ${this.ennemies[2]?.battery}/${this.ennemies[2]?.maxbattery})`);
        }
        console.log("Autre: Annuler");
    }

    CountEnnemies(): number {
        let count = 0;
        for (let i = 0; i < this.ennemies.length; i++) {
            if (this.ennemies[i]) {
                count++;
            }
        }
        return count;
    }

    IsFinished(): string {
        let alliesalive = false;
        let ennemiesalive = false;

        for (let i = 0; i < this.allies.length; i++) {
            if (this.allies[i].battery > 0) {
                alliesalive = true;
            }
        }
        for (let i = 0; i < this.ennemies.length; i++) {
            if (this.ennemies[i]) {
                if (this.ennemies[i]!.battery > 0) {
                    ennemiesalive = true;
                }
            }
        }

        if (alliesalive && ennemiesalive) {
            return "continue";
        } else if (!alliesalive) {
            return "lost";
        } else {
            return "won";
        }
    }
        
    async Turn() {
        this.turn++;
        console.log("Tour " + this.turn);
        this.PrintUI();

        const actions: Array<[Capacity | null, Ennemy | character]> = [];
        
        for (let i = 0; i < this.allies.length; i++) {
            console.warn("Je suis passé par ici", i)
            let validation = false;
            while (!validation) {
                this.PrintUI();
                let choice = prompt(`Que voulez-vous faire avec ${this.allies[i].classname}? \n 1: Utiliser une compétence \n 2: Se reposer \n 3: Utiliser un objet \nVotre choix:`);

                while (!(new PromptChecking().Check(choice) && 0 < parseInt(choice!) && parseInt(choice!) < 4)) {
                    this.PrintUI();
                    console.log("Veuillez rentrer une valeur proposée");
                    choice = prompt(`Que voulez-vous faire avec ${this.allies[i].classname}? \n 1: Utiliser une compétence \n 2: Se reposer \n 3: Utiliser un objet \nVotre choix:`);;
                }
                
                if (choice === "1") {
                    validation = true;
                    this.PrintCapacities(this.allies[i]);
                    let choice2 = prompt("Quelle capacité voulez-vous utiliser?");

                    while (!(new PromptChecking().Check(choice2))) {
                        this.PrintCapacities(this.allies[i]);
                        console.log("Veuillez rentrer un nombre");
                        choice2 = prompt("Quelle capacité voulez-vous utiliser?");
                    }

                    if (choice2 === "1" || choice2 === "2") {
                        let cap: Capacity;
                        if (choice2 === "1") {
                            cap = this.allies[i].capacity1;
                        } else {
                            cap = this.allies[i].capacity2;
                        }

                        let choice3

                        if (cap.type === "buff") {
                            this.PrintAllies();
                            choice3 = prompt("Sur quel allié voulez-vous l'utiliser?");
                            while (!(new PromptChecking().Check(choice3))) {
                                this.PrintAllies();
                                console.log("Veuillez rentrer un nombre");
                                choice3 = prompt("Sur quel allié voulez-vous l'utiliser?");
                            }
                        } else {
                            this.PrintEnnemies();
                            choice3 = prompt("Sur quel ennemi voulez-vous l'utiliser?");
                            while (!(new PromptChecking().Check(choice3))) {
                                this.PrintEnnemies();
                                console.log("Veuillez rentrer une valeur valide");
                                choice3 = prompt("Sur quel ennemi voulez-vous l'utiliser?");
                            }
                        }

                        if (cap.type === "buff" && (0 > parseInt(choice3!) || parseInt(choice3!) > 3)) {
                            validation = false;
                        } else if (cap.type !== "buff" && (0 > parseInt(choice3!) || parseInt(choice3!) > this.CountEnnemies())) {
                            validation = false;
                        } else {
                            if (cap.type === "buff") {
                                actions.push([cap, this.allies[parseInt(choice3!)-1]])
                            } else {
                                let target: Ennemy;
                                let count: number = 0;

                                for (let j = 0; j < this.ennemies.length; j++) {
                                    if (this.ennemies[j] !== null) {
                                        count++;
                                        if (count === parseInt(choice3!)) {
                                            target = this.ennemies[j]!;
                                        }
                                    }
                                }
                                actions.push([cap, target!]);
                            }
                        }
                        
                    } else {
                        validation = false;
                    }
                } else if (choice === "2") {
                    validation = true;
                    actions.push([null, this.allies[i]]);
                } else {
                    console.log("Vous n'avez pas d'objets");
                }
            }
        }

        for (let i = 0; i < 3; i++) {
            if (this.ennemies[i]) {
                console.log(`C'est au tour de ${this.ennemies[i]?.classname}`);
                await Wait.Time(2000);
                console.log("1")
            }
            console.log("2")
        }

        const status = this.IsFinished();
        if (status === "continue") {
            console.log("continue")
            await this.Turn();
        } else if (status === "lost") {
            console.log("Vous avez perdu la partie");
        } else if (status === "won") {
            console.log("Vous avez gagné la partie");
        }
    }
}
