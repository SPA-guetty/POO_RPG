// Énumération pour les genres d'attaque
enum GenreAttaque {
    PHYSIQUE,
    MAGIQUE,
    RAPIDE,
    PUISSANTE,
    DEFENSIVE
}

// Classe Ennemi
export class Ennemi {
    public nom: string;
    public pointsDeVie: number;
    public attaque: number;
    public defense: number;
    public genreAttaque: GenreAttaque;
    public statistiques: {
        force: number;
        intelligence: number;
        agilite: number;
        endurance: number;
    };

    constructor(nom: string, pointsDeVie: number, attaque: number, defense: number, genreAttaque: GenreAttaque, statistiques: {
        force: number;
        intelligence: number;
        agilite: number;
        endurance: number;
    }) {
        this.nom = nom;
        this.pointsDeVie = pointsDeVie;
        this.attaque = attaque;
        this.defense = defense;
        this.genreAttaque = genreAttaque;
        this.statistiques = statistiques;
    }

    agir(): void {
        console.log(`${this.nom} utilise une attaque ${GenreAttaque[this.genreAttaque]} !`);
    }

    recevoirDegats(degats: number): void {
        console.log(`${this.nom} reçoit ${degats} points de dégâts !`);
        this.pointsDeVie -= degats;
    }

    attaquer(cible: Ennemi): void {
        const degats = this.attaque - cible.defense;
        if (degats > 0) {
            cible.recevoirDegats(degats);
            console.log(`${this.nom} inflige ${degats} points de dégâts à ${cible.nom} !`);
        } else {
            console.log(`${this.nom} rate son attaque contre ${cible.nom} !`);
        }
    }
}

// Classe Juju
export class Juju extends Ennemi {
    constructor() {
        super("Juju", 50, 10, 5, GenreAttaque.PHYSIQUE, {
            force: 15,
            intelligence: 10,
            agilite: 8,
            endurance: 12
        });
    }

    agir(): void {
        console.log(`${this.nom} utilise une attaque physique !`);
    }

    attaquer(cible: Ennemi): void {
        super.attaquer(cible);
        if (cible.pointsDeVie <= 0) {
            console.log(`${this.nom} a vaincu ${cible.nom} !`);
        }
    }
}

// Classe Tomtom
export class Tomtom extends Ennemi {
    constructor() {
        super("Tomtom", 60, 12, 6, GenreAttaque.MAGIQUE, {
            force: 10,
            intelligence: 15,
            agilite: 12,
            endurance: 8
        });
    }

    agir(): void {
        console.log(`${this.nom} utilise une attaque magique !`);
    }

    attaquer(cible: Ennemi): void {
        super.attaquer(cible);
        if (cible.pointsDeVie <= 0) {
            console.log(`${this.nom} a vaincu ${cible.nom} !`);
        }
    }
}

// Classe Marijuana
export class Marijuana extends Ennemi {
    constructor() {
        super("Marijuana", 45, 8, 5, GenreAttaque.DEFENSIVE, {
            force: 10,
            intelligence: 15,
            agilite: 12,
            endurance: 8
        });
    }

    agir(): void {
        console.log(`${this.nom} utilise une attaque défensive !`);
    }

    attaquer(cible: Ennemi): void {
        super.attaquer(cible);
        if (cible.pointsDeVie <= 0) {
            console.log(`${this.nom} a vaincu ${cible.nom} !`);
        }
    }
}

// Classe Rems 
export class Rems extends Ennemi {
    constructor() {
        super("Rems", 50, 10, 5, GenreAttaque.RAPIDE, {
            force: 15,
            intelligence: 10,
            agilite: 8,
            endurance: 12
        });
    }

    agir(): void {
        console.log(`${this.nom} utilise une attaque rapide !`);
    }

    attaquer(cible: Ennemi): void {
        super.attaquer(cible);
        if (cible.pointsDeVie <= 0) {
            console.log(`${this.nom} a vaincu ${cible.nom} !`);
        }
    }
}

// Classe Bidoof
export class Bidoof extends Ennemi {
    constructor() {
        super("Bidoof", 55, 11, 7, GenreAttaque.PUISSANTE, {
            force: 12,
            intelligence: 10,
            agilite: 9,
            endurance: 11
        });
    }

    agir(): void {
        console.log(`${this.nom} utilise une attaque puissante !`);
    }

    attaquer(cible: Ennemi): void {
        super.attaquer(cible);
        if (cible.pointsDeVie <= 0) {
            console.log(`${this.nom} a vaincu ${cible.nom} !`);
        }
    }
}