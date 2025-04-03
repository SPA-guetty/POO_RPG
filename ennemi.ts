export class Ennemi {
    constructor(
        public nom: string,
        public pointsDeVie: number,
        public attaque: number,
        public defense: number
    ) {}

    agir(): void {
        console.log(`${this.nom} agit !`);
    }

    recevoirDegats(degats: number): void {
        const degatsReels = Math.max(0, degats - this.defense);
        this.pointsDeVie -= degatsReels;
        console.log(`${this.nom} reçoit ${degatsReels} points de dégâts. PV restants : ${this.pointsDeVie}`);
    }
}

export class Juju extends Ennemi {
    constructor() {
        super("Juju", 50, 10, 5);
    }
}

export class Tomtom extends Ennemi {
    constructor() {
        super("Tomtom", 60, 12, 6);
    }
}

export class Marijuana extends Ennemi {
    constructor() {
        super("Marijuana", 45, 8, 5);
    }

    agir(): void {
        console.log(`${this.nom} utilise une attaque défensive !`);
    }
}

export class Rems extends Ennemi {
    constructor() {
        super("Rems", 50, 10, 5);
    }

    agir(): void {
        console.log(`${this.nom} lance une attaque puissante !`);
    }
}

export class Bidoof extends Ennemi {
    constructor() {
        super("Bidoof", 30, 5, 3);
    }

    agir(): void {
        console.log(`${this.nom} utilise une attaque rapide !`);
    }
}

// Exemple de création des ennemis
export const creerEnnemi = (type: string): Ennemi | null => {
    switch (type.toLowerCase()) {
        case "juju":
            return new Juju();
        case "tomtom":
            return new Tomtom();
        case "marijuana":
            return new Marijuana();
        case "rems":
            return new Rems();
        case "bidoof":
            return new Bidoof();
        default:
            console.log(`Type d'ennemi inconnu : ${type}`);
            return null;
    }
};

// Exemple d'utilisation
const ennemi1 = creerEnnemi("juju");
const ennemi2 = creerEnnemi("tomtom");
const ennemi3 = creerEnnemi("marijuana");
const ennemi4 = creerEnnemi("rems");
const ennemi5 = creerEnnemi("bidoof");

if (ennemi1) ennemi1.agir();
if (ennemi2) ennemi2.agir();
if (ennemi3) ennemi3.agir();
if (ennemi4) ennemi4.agir();
if (ennemi5) ennemi5.agir();