import { Refresh } from "../Misc/Refresh.ts";

import { Ennemy } from "../Classes/Ennemies/Ennemies.ts";
import { EnnemiesList } from "../Classes/Ennemies/EnnemiesList.ts";
import { character } from "../Classes/Classes.ts";
import * as Bosses from "../Classes/Bosses.ts"

import { Fight } from "../Main/Battles/Fight.ts";
import { BossFight } from "../Main/Battles/BossFight.ts"

export class Etage {

    private nb = 0
    private ennemi1: Ennemy | null = null;
    private ennemi2: Ennemy | null = null;
    private ennemi3: Ennemy | null = null;

    private boss1: Bosses.Boss | null = null;
    private boss2: Bosses.Boss | null = null;
    private boss3: Bosses.Boss | null = null;

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
        this.nb = nbennemis;

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
            if (nbennemis === -1) {
                this.boss2 = new Bosses.Laurent;
            } else if (nbennemis === -2) {
                this.boss2 = new Bosses.Bidoof;
            } else if (nbennemis === -3) {
                this.boss2 = new Bosses.Titi;
            } else if (nbennemis === -4) {
                this.boss2 = new Bosses.Juju;
            } else if (nbennemis === -5) {
                this.boss2 = new Bosses.Pascalou;
            } else if (nbennemis === -6) {
                this.boss1 = new Bosses.Romeo;
                this.boss3 = new Bosses.Juliette;
            } else {
                this.boss2 = new Bosses.AnilMagellanDende;
            }
        }

    }

    async Start(allies: Array<character>) {
        if (this.nb < 0) {
            await new BossFight(allies, [this.boss1, this.boss2, this.boss3], this.UI).Turn();
        } else {
            await new Fight(allies, [this.ennemi1, this.ennemi2, this.ennemi3], this.UI).Turn();
        }
    }
}