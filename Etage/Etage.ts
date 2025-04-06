import { Refresh } from "../Misc/Refresh.ts";

export class Etage {

    nb = 0;
    ennemi1 = "";
    ennemi2 = "";
    ennemi3 = "";

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
        "#                                                                                                                     #",
        "#                                                                                                                     #",
        "#                                                                                                                     #",
        "#                                                                                                                     #",
        "#                                                                                                                     #",
        "#                                                                                                                     #",
        "#                                                                                                                     #",
        "#                                                                                                                     #",
        "#                                                                                                                     #",
        "#                                                                                                                     #",
        "#                                                                                                                     #",
        "#                                                                                                                     #",
        "#                                                                                                                     #",
        "#                                                                                                                     #",
        "#                                                                                                                     #",
        "#                                                                                                                     #",
        "#                                                                                                                     #",
        "#                                                                                                                     #",
        "#                                                                                                                     #",
        "#                                                                                                                     #",
        "#                                                                                                                     #",
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

    Affiche(allies: string[], ennemis: string[]): void {
        const frame = [...this.UI]; // Cloner le cadre de l'interface
        // Insérer "=== Interface de Combat ===" en haut du cadre
        frame[2] = this.insertCenteredText("=== Interface de Combat ===", frame[2]);

        let startLine = 4;
        for (let i = 0; i < Math.max(allies.length, ennemis.length); i++) {
            const leftText = allies[i] || "";
            const rightText = ennemis[i] || "";
            if (startLine + i < frame.length - 3) {
                frame[startLine + i] = this.insertTextInsideFrame(leftText, rightText, frame[startLine + i]);
            }
        }

        // Insérer "Préparez-vous pour le combat !" un peu plus bas
        frame[frame.length - 3] = this.insertCenteredText("Préparez-vous pour le combat !", frame[frame.length - 3]);

        // Afficher le cadre avec les textes insérés
        frame.forEach((line) => console.log(line));
    }

    private insertTextInsideFrame(leftText: string, rightText: string, line: string): string {
        const contentWidth = line.length - 4;
        const leftPadding = leftText.padEnd(Math.floor(contentWidth / 2), " ");
        const rightPadding = rightText.padStart(Math.ceil(contentWidth / 2), " ");
        return `# ${leftPadding}${rightPadding} #`;
    }

    private insertCenteredText(text: string, line: string): string {
        const contentWidth = line.length - 4;
        const centeredText = text.padStart((contentWidth + text.length) / 2, " ").padEnd(contentWidth, " ");
        return `# ${centeredText} #`;
    }

    constructor(nbennemis: number = 1) {
        if (nbennemis > 0) {
            this.nb = nbennemis;
            this.ennemi1 = "1";
            if (nbennemis > 1) {
                this.ennemi2 = "2";
            }
            if (nbennemis > 2) {
                this.ennemi3 = "3";
            }
        } else {
            this.ennemi1 = "BOSS";
        };
    }
}