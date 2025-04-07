import { Refresh } from "../Misc/Refresh.ts";
import { Game } from "../Main/Game.ts";

export class Classesmenu {
    UI = [
        "#######################################################################################################################",
        "#                                                                                                                     #",
        "#                    Animatueur    Nainformaticien   Cyberserker   Captchattaque      Webscammer      Archicube       #",
        "#         n°             1                2              3               4                5               6           #",
        "#                                                                                                                     #",
        "#                        の                              尊              樂               の             护 ⚘         #",
        "#      Character         杀مــ           の            ⛨裁مــ          Ɵ═攻═Ɵ             播            𓆰城─┤         #",
        "#                        刀              技ロ            清              勇               扰             防 │         #",
        "#                                                                                                                     #",
        "# Attaque physique:      10              00             05              07               05              00           #",
        "# Processeurs (magie):   00              07             06              07               10              10           #",
        "# Défense physique:      02              05             07              05               06              02           #",
        "# Défense informatique:  03              10             08              04               05              10           #",
        "#                                                                                                                     #",
        "# Attaque n°1:         Visual          Battery        Hacking         Malware           Code           Hidden         #",
        "#                   Manipulation        share                                           Rift           Socket         #",
        "# Infos:              Affaiblis        Soutient       Attaque         Draine           Attaque        Soutient        #",
        "# Cible(s):          Adversaires       1  allié      1  ennemi      Adversaires      Adversaires      1  Allié        #",
        "#                                                                                                                     #",
        "# Attaque n°2:         Quick            Naino-         Rush           Trojan           Psycho           Mur           #",
        "#                      Dash              Mare                                           trap          Porteur         #",
        "# Infos:              Attaque          Attaque        Attaque     Att + affaiblis     Affaiblis       Renforce        #",
        "# Cible(s)           1  ennemi       Adversaires     1  ennemi      Adversaires      Adversaires       Alliés         #",
        "#                                                                                                                     #",
        "#######################################################################################################################",
    ]

    Affiche() : void {
        new Refresh();
        for (let i = 0; i < this.UI.length; i++) {
            console.log(this.UI[i]);
        }
    }

    CharactersConditions(choices: string): boolean {
        if (choices.length !== 3) {
            return false;
        } else if (choices[0] === choices[1] || choices[0] === choices[2] || choices[1] === choices[2]) {
            return false;
        } else if (choices[0] < "1" || choices[0] > "6") {
            return false;
        } else if (choices[1] < "1" || choices[1] > "6") {
            return false;
        } else if (choices[2] < "1" || choices[2] > "6") {
            return false;
        }
        return true;
    }

    Load(): void {
        this.Affiche();
        let choices: string | null = "000";
        choices = prompt("Veuillez choisir vos 3 personnages: ");
        while (choices === null || !this.CharactersConditions(choices)) {
            choices = prompt("Veuillez choisir 3 personnages différents: ");
        }
        new Game(choices);
    }
};