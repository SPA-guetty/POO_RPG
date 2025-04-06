import { Refresh } from "../Misc/Refresh.ts";

import { Ennemy } from "../Classes/Ennemies/Ennemies.ts";
import { EnnemiesList } from "../Classes/Ennemies/EnnemiesList.ts";
import { character } from "../Classes/Classes.ts";

import { Fight } from "../Main/Fight.ts";

export class Etage {

    private nb = 0;
    private ennemi1: Ennemy | null = null;
    private ennemi2: Ennemy | null = null;
    private ennemi3: Ennemy | null = null;

    public UI = [
        "#######################################################################################################################",
        "#      #      #      #      #      #      #      #      # ≡≡≡ #      #      #      #      #      #      #      #      #",
        "#      #      #      #      #      #      #      #      # ≡≡≡ #      #      #      #      #      #      #      #      #",
        "#▥▥▥▥▥▥#▥▥▥▥▥▥#▥▥▥▥▥▥#▥▥▥▥▥▥#▥▥▥▥▥▥#▥▥▥▥▥▥#▥▥▥▥▥▥#▥▥▥▥▥▥# ≡≡≡ #▥▥▥▥▥▥#▥▥▥▥▥▥#▥▥▥▥▥▥#▥▥▥▥▥▥#▥▥▥▥▥▥#▥▥▥▥▥▥#▥▥▥▥▥▥#▥▥▥▥▥▥#",
        "#                                                                                                                     #",
        "#                                                                                                                     #",
        "#                                                                                                                     #",
        "#                                                                                                                     #",
        "#                                                                                                                     #",
        "#                                                                                                                     #",
        "#                                                                                                                     #",
        "#                                                                                                                     #",
        "#                                                                                                                     #",
        "#                                                                                                                     #", // Moitié
        "#                                                                                                                     #",
        "#                                                                                                                     #",
        "#                                                                                                                     #",
        "#                                                                                                                     #",
        "#                                                                                                                     #",
        "#                                                                                                                     #",
        "#                                                                                                                     #",
        "#                                                                                                                     #",
        "#                                                                                                                     #",
        "#▥▥▥▥▥▥#▥▥▥▥▥▥#▥▥▥▥▥▥#▥▥▥▥▥▥#▥▥▥▥▥▥#▥▥▥▥▥▥#▥▥▥▥▥▥#▥▥▥▥▥▥# ≡≡≡ #▥▥▥▥▥▥#▥▥▥▥▥▥#▥▥▥▥▥▥#▥▥▥▥▥▥#▥▥▥▥▥▥#▥▥▥▥▥▥#▥▥▥▥▥▥#▥▥▥▥▥▥#",
        "#      #      #      #      #      #      #      #      # ≡≡≡ #      #      #      #      #      #      #      #      #",
        "#      #      #      #      #      #      #      #      # ≡≡≡ #      #      #      #      #      #      #      #      #",
        "#######################################################################################################################",
    ];

    Affiche() : void {
        new Refresh();
        for (let i = 0; i < this.UI.length; i++) {
            console.log(this.UI[i]);
        }
    }

    constructor(nbennemis: number = 1) {
        const ennemilist = new EnnemiesList().getEnnemiList(nbennemis);
        if (nbennemis > 0) {
            if (nbennemis === 1) {
                this.ennemi2 = ennemilist[0];
            } else if (nbennemis === 2) {
                this.ennemi1 = ennemilist[0];
                this.ennemi3 = ennemilist[1];
            } else {
                this.ennemi1 = ennemilist[0];
                this.ennemi2 = ennemilist[1];
                this.ennemi3 = ennemilist[2];
            }
        } else {
            this.ennemi2 = ennemilist[0];
        };
    }

    async Start(allies: Array<character>) {
        await new Fight(allies, [this.ennemi1, this.ennemi2, this.ennemi3], this.UI).Turn();
    }
}