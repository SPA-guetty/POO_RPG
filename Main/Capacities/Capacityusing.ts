/*  name: string;
    description: string;
    numberoftargets: number | null;
    randomennemi: boolean;
    type: string;
    RAM: number;
    effect: Array<CapacityEffect>;
*/

import { character } from "../../Classes/Classes.ts";
import { Ennemy } from "../../Classes/Ennemies/Ennemies.ts";
import { CapacityEffect } from "./Capacity.ts";
import { Capacity } from "./Capacity.ts";

import { Randomnumber } from "../../Misc/Randomizer.ts";
import { Boss } from "../../Classes/Bosses.ts";

export class UseCapacity {
    static Use(allies: Array<character | Ennemy | Boss | null>, ennemies: Array<character | Ennemy | Boss | null>, attacker: number, target: number, capacity: Capacity) {
        if (capacity.type.includes("code") || capacity.type.includes("physical") || capacity.type.includes("heal")) {
            for (let i = 0; i < capacity.effect.length; i++) {
                if (capacity.effect[i].effect === "battery") {

                    if (target === -1) { // All ennemies
                        for (let ennemy = 0; ennemy < 3; ennemy++) {
                            if (ennemies[ennemy] !== null && ennemies[ennemy]!.battery > 0) {
                                this.Attack(allies[attacker]!, ennemies[ennemy]!, capacity, capacity.effect[i]);
                            }
                        }
                    } else {
                        if (capacity.type.includes("heal")) {
                            this.Attack(allies[attacker]!, allies[target]!, capacity, capacity.effect[i]);
                        } else {
                            this.Attack(allies[attacker]!, ennemies[target]!, capacity, capacity.effect[i]);
                        }
                    }
                }
            }
        } else if (capacity.type.includes("steal")) {
            this.Steal(allies, ennemies, allies[attacker])
        } else if (capacity.type.includes("buff")) {
            for (let i = 0; i < capacity.effect.length; i++) {
                if (capacity.effect[i].effect === "defense" || capacity.effect[i].effect === "attack") {
                    if (capacity.type === "buff") {
                        if (target === -1) {
                            this.Buff(allies, capacity.effect[i]);
                        } else {
                            this.Buff([allies[attacker]], capacity.effect[i]);
                        }
                    } else {
                        if (target === -1) {
                            this.Buff(ennemies, capacity.effect[i]);
                        } else {
                            this.Buff([ennemies[target]], capacity.effect[i]);
                        }
                    }
                }
            }
        }
    }

    static CountTeam(team: Array<character | Ennemy | Boss | null>): number {
        let result =0;
        for (let char = 0; char < 3; char++) {
            if (team[char] !== null && team[char]!.battery > 0) {
                result++;
            }
        }
        return result;
    }

    static Attack(attacker: character | Ennemy | Boss, target: character | Ennemy | Boss, capacity: Capacity, effect: CapacityEffect) {
        let damage = effect.intensity;
        if (capacity.type.includes("code")) {
            let targetdefense = target.antivirus/1.5;
            if (targetdefense < 1) {targetdefense = 1}
            damage = damage * (attacker.processors/2) / targetdefense;
        } else if (!capacity.type.includes("buff")) {
            let targetdefense = target.defense/1.5;
            if (targetdefense < 1) {targetdefense = 1}
            damage = damage * attacker.attack / targetdefense;
        }
        console.log("Damage:", damage)
        target.battery += damage;

        if (capacity.type.includes("dangerous")) {
            if (capacity.type.includes("heal")) {
                attacker.battery -= (effect.intensity);
            } else {
                attacker.battery -= (Randomnumber.Random(0,1)*10);
            }
        }
    }  

    static Steal(allies: Array<character | Ennemy | Boss | null>, ennemies: Array<character | Ennemy | Boss | null>, attacker: character | Ennemy | null) {
        let pv = 0;
        for (let ennemy = 0; ennemy < 3; ennemy ++) {
            if (ennemies[ennemy] !== null) {
                const max = 16 + attacker!.antivirus + attacker!.processors;
                const stealing = Randomnumber.Random(0, max);
                if (ennemies[ennemy]!.battery >= stealing) {
                    ennemies[ennemy]!.battery -= stealing;
                    pv += stealing;
                } else {
                    pv = ennemies[ennemy]!.battery;
                    ennemies[ennemy]!.battery = 0;
                }
            }
        }

        pv = pv / this.CountTeam(allies);
        for (let ally = 0; ally < 3; ally++) {
            if (allies[ally] !== null && allies[ally]!.battery > 0) {
                allies[ally]!.battery += pv;
            }
        }
    }

    static Buff(targets: Array<character | Ennemy | Boss | null>, effect: CapacityEffect) {
        for (let target = 0; target < 3; target++) {
            if (targets[target] !== null) {
                if (effect.effect === "attack") {
                    targets[target]!.attack = targets[target]!.attack * effect.intensity;
                } else if (effect.effect === "defense") {
                    targets[target]!.defense = targets[target]!.defense * effect.intensity;
                } else if (effect.effect === "code") {
                    targets[target]!.processors = targets[target]!.processors * effect.intensity;
                } else if (effect.effect === "antivirus") {
                    targets[target]!.antivirus = targets[target]!.antivirus * effect.intensity;
                }
            }
        }
    }

    static Check(targets: Array<character | Ennemy | Boss | null>) {
        for (let target = 0; target < 3; target++) {
            if (targets[target] !== null) {
                if (targets[target]!.battery <= 0) {
                    targets[target]!.battery = 0
                } else if (targets[target]!.battery <= targets[target]!.maxbattery) {
                    targets[target]!.battery = targets[target]!.maxbattery
                }
            }
        }
    }
}