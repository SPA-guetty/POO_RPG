import { Etage } from "./Etage.ts";

export class Ympeldown {
    Etage1_1 = new Etage(1);
    Etage1_2 = new Etage(1);
    EtageBoss1 = new Etage(-1); // Laurent
    Etage2_1 = new Etage(1);
    Etage2_2 = new Etage(2);
    EtageBoss2 = new Etage(-2); // Bidoof
    Etage3_1 = new Etage(2);
    Etage3_2 = new Etage(2);
    EtageBoss3 = new Etage(-3); // Titi
    Etage4_1 = new Etage(2)
    Etage4_2 = new Etage(2);
    Etage4_3 = new Etage(2);
    EtageBoss4 = new Etage(-4); // Juju
    Etage5_1 = new Etage(2)
    Etage5_2 = new Etage(3);
    Etage5_3 = new Etage(3);
    EtageBoss5 = new Etage(-5); // Pascalou
    Etage6_1 = new Etage(-2) // Bidoof
    Etage6_2 = new Etage(-4) // Juju
    Etage6_3 = new Etage(-6) // Roméo et Juliette
    EtageBoss6 = new Etage(-7) // Anil Magellan Dende
    
    Etages: Etage[] = [
        this.Etage1_1, this.Etage1_2, this.EtageBoss1,
        this.Etage2_1, this.Etage2_2, this.EtageBoss2,
        this.Etage3_1, this.Etage3_2, this.EtageBoss3,
        this.Etage4_1, this.Etage4_2, this.Etage4_3, this.EtageBoss4,
        this.Etage5_1, this.Etage5_2, this.Etage5_3, this.EtageBoss5,
        this.Etage6_1, this.Etage6_2, this.Etage6_3, this.EtageBoss6,
    ];
}