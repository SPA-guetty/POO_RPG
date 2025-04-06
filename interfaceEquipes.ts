import { Etage } from "./Etage/Etage.ts";

export class interfaceEquipes {
    private characters: { numero: number; nom: string; symbols: string[] }[];
    private ennemis: { nom: string; pointsDeVie: number }[];

    constructor(
        characters: { numero: number; nom: string; symbols: string[] }[],
        ennemis: { nom: string; pointsDeVie: number }[]
    ) {
        this.characters = characters;
        this.ennemis = ennemis;
    }

    afficher(): void {
        const etage = new Etage();
        const maxWidth = 50; // Largeur maximale pour l'alignement
        const charactersFormatted = this.characters.flatMap((char) => [
            `${char.numero}. ${char.nom}`,
            ...char.symbols,
            "",
        ]);
        const ennemisFormatted = this.ennemis.flatMap((ennemi, index) => [
            `${(index + 1).toString().padStart(2, " ")}. ${ennemi.nom} (PV: ${ennemi.pointsDeVie})`.padStart(maxWidth, " "), // Align to the right
            "",
        ]);
        etage.Affiche(charactersFormatted, ennemisFormatted);
    }
}

// Exemple d'utilisation
const characters = [
    { numero: 1, nom: "Animatueur", symbols: ["の", "杀مــ", "刀"] },
    { numero: 2, nom: "Nainformaticien", symbols: ["の", "技ロ"] },
    { numero: 3, nom: "Cyberserker", symbols: ["尊", "⛨裁مــ", "清"] },
    { numero: 4, nom: "Captchattaque", symbols: ["樂", "Ɵ═攻═Ɵ", "勇"] },
    { numero: 5, nom: "Pèrecrea", symbols: ["护 ☥", "息─┤", "大 │"] },
    { numero: 6, nom: "Webscammer", symbols: ["の", "播", "扰"] },
    { numero: 7, nom: "Archicube", symbols: ["护 ⚘", "𓆰城─┤", "防 │"] },
];

const ennemis = [
    { nom: "Ennemi1", pointsDeVie: 50 },
    { nom: "Ennemi2", pointsDeVie: 60 },
    { nom: "Ennemi3", pointsDeVie: 90 },
];

const gestion = new interfaceEquipes(characters, ennemis);
gestion.afficher();