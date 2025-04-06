import { character } from "../Classes/Classes.ts";
import { Ennemy } from "../Classes/Ennemies/Ennemies.ts";
import { Refresh } from "../Misc/Refresh.ts";
import { Capacity } from "./Capacity.ts";
import { PromptChecking } from "../Misc/PromptChecking.ts";
import { Wait } from "../Misc/Wait.ts";
import { Randomnumber } from "../Misc/Randomizer.ts";
import { UseCapacity } from "./Capacityusing.ts";

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

    CountAllies(): number {
        let count = 0;
        for (let i = 0; i < this.allies.length; i++) {
            if (this.allies[i].battery > 0) {
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

    EnnemyTurn(ennemy: number) {
        let capacity = this.ennemies[ennemy]!.capacity1;
        if (this.ennemies[ennemy]!.capacity2 !== null) {
            if (Randomnumber.Random(0, 10) <= 3) {
                capacity = this.ennemies[ennemy]?.capacity2!;
            }
        }

        let nb = -1;
        if (capacity.numberoftargets === 1) {
            nb = Randomnumber.Random(0, this.CountAllies()-1);

            let count = 0;
            for (let i = 0; i < 3; i++) {
                if (this.allies[i].battery > 0) {
                    count++
                    if (nb == count) {
                        UseCapacity.Use(this.ennemies, this.allies, ennemy, i, capacity)
                    }
                }
            }
        } else {
            UseCapacity.Use(this.ennemies, this.allies, ennemy, -1, capacity)
        }
    }
        
    async Turn() {
        this.turn++;
        console.log("Tour " + this.turn);
        this.PrintUI();

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

                        let choice3: string;

                        if (cap.type === "buff" || cap.type.includes("heal")) {
                            if (cap.numberoftargets === 1) {
                                this.PrintAllies();
                                let entry = prompt("Sur quel allié voulez-vous l'utiliser?");
                                while (!(new PromptChecking().Check(entry))) {
                                    this.PrintAllies();
                                    console.log("Veuillez rentrer un nombre");
                                    entry = prompt("Sur quel allié voulez-vous l'utiliser?");
                                }
                                choice3 = entry!;
                            } else {
                                choice3 = "-1"
                            }
                        } else {
                            if (cap.numberoftargets === 1) {
                                this.PrintEnnemies();
                                let entry = prompt("Sur quel ennemi voulez-vous l'utiliser?");
                                while (!(new PromptChecking().Check(entry))) {
                                    this.PrintEnnemies();
                                    console.log("Veuillez rentrer une valeur valide");
                                    entry = prompt("Sur quel ennemi voulez-vous l'utiliser?");
                                }
                                choice3 = entry!;
                            } else {
                                choice3 = "-1"
                            }
                        }

                        if (cap.type === "buff" || cap.type.includes("heal") && (0 > parseInt(choice3!) || parseInt(choice3!) > this.CountAllies())) {
                            validation = false;
                        } else if (cap.type !== "buff" && !(cap.type.includes("heal")) && (0 > parseInt(choice3!) || parseInt(choice3!) > this.CountEnnemies())) {
                            validation = false;
                        } else {
                            if (cap.numberoftargets !== 1 || cap.type === "buff" || cap.type.includes("heal")) {
                                UseCapacity.Use(this.allies, this.ennemies, i, parseInt(choice3)!, cap);
                            } else {
                                let target: number = 0;
                                let count: number = 0;

                                for (let j = 0; j < this.ennemies.length; j++) {
                                    if (this.ennemies[j] !== null) {
                                        count++;
                                        if (count === parseInt(choice3!)) {
                                            target = j;
                                        }
                                    }
                                }
                                UseCapacity.Use(this.allies, this.ennemies, i, target, cap);
                            }
                        }
                        
                    } else {
                        validation = false;
                    }
                } else if (choice === "2") {
                    validation = true;
                    this.allies[i].battery+=10;
                    if (this.allies[i].battery > this.allies[i].maxbattery) {
                        this.allies[i].battery = this.allies[i].maxbattery
                    }
                } else {
                    console.log("Vous n'avez pas d'objets");
                }
            }
        }

        for (let i = 0; i < 3; i++) {
            if (this.ennemies[i] !== null) {
                console.log(`C'est au tour de ${this.ennemies[i]?.classname}`);
                await Wait.Time(2000);
                this.EnnemyTurn(i)
            }
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
