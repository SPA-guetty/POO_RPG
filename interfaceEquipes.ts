import { Etage } from "./Etage/Etage.ts"; // Chemin corrigé pour correspondre au fichier réel

export class interfaceEquipes {
    private allies: { nom: string; pointsDeVie: number }[];
    private ennemis: { nom: string; pointsDeVie: number }[];

    constructor(
        allies: { nom: string; pointsDeVie: number }[],
        ennemis: { nom: string; pointsDeVie: number }[]
    ) {
        this.allies = allies;
        this.ennemis = ennemis;
    }

    getAllies(): { nom: string; pointsDeVie: number }[] {
        return this.allies;
    }

    getEnnemis(): { nom: string; pointsDeVie: number }[] {
        return this.ennemis;
    }

    afficher(): void {
        const etage = new Etage();
        etage.Affiche(this.allies, this.ennemis);
    }
}

// Exemple d'utilisation
const allies = [
    { nom: "Héros", pointsDeVie: 100 },
    { nom: "Mage", pointsDeVie: 80 },
];

const ennemis = [
    { nom: "Juju", pointsDeVie: 50 },
    { nom: "Tomtom", pointsDeVie: 60 },
];

const gestion = new interfaceEquipes(allies, ennemis);
gestion.afficher();