import { Ympeldown } from "./Ympeldown.ts";
import { creerEnnemi } from "./ennemi.ts";

export class Game {
    ympeldown = new Ympeldown();
    joueur1 = { 
        nom: "Héros 1", 
        pointsDeVie: 100, 
        attaque: 15, 
        inventaire: ["Potion de soin"] 
    }; // Définition du joueur 1
    joueur2 = { 
        nom: "Héros 2", 
        pointsDeVie: 100, 
        attaque: 15, 
        inventaire: ["Potion de soin"] 
    }; // Définition du joueur 2

    Start(): void {
        console.log("Bienvenue dans le jeu !");
        console.log("Préparez-vous à affronter des ennemis !");
        
        // Choix du personnage
        console.log("Choisissez votre personnage :");
        console.log("1. Juju");
        console.log("2. Tomtom");
        console.log("3. Marijuana");
        console.log("4. Rems");
        console.log("5. Bidoof");

        const choix = prompt("Entrez le numéro de votre choix : ");
        if (choix) {
            console.log(`Vous avez choisi le personnage numéro ${choix}`);
            
            console.log("Préparation du jeu...");
            console.log("Chargement des ennemis...");
            
            // Initialisation des ennemis
            const ennemis = [
                creerEnnemi("juju"),
                creerEnnemi("tomtom"),
                creerEnnemi("marijuana"),
                creerEnnemi("rems"),
                creerEnnemi("bidoof")
            ].filter((ennemi) => ennemi !== null); // Filtrer les ennemis valides
            console.log("Ennemis chargés !");
            
            console.log("Lancez le jeu !");
            console.log("Combat en cours...");

            // Boucle principale du jeu
            let jeuEnCours = true;
            let tourJoueur1 = true;
            while (jeuEnCours && (this.joueur1.pointsDeVie > 0 || this.joueur2.pointsDeVie > 0)) {
                const joueurActuel = tourJoueur1 ? this.joueur1 : this.joueur2;
                console.log(`\nTour de ${joueurActuel.nom}`);
                
                // Afficher les actions disponibles
                this.afficherActions();

                const action = prompt("Entrez le numéro de votre action : ");
                switch (action) {
                    case "1":
                        this.combat(joueurActuel, ennemis);
                        break;
                    case "2":
                        this.utiliserObjet(joueurActuel);
                        break;
                    case "3":
                        this.utiliserCompetence(joueurActuel, ennemis);
                        break;
                    case "4":
                        this.chargerJeu();
                        break;
                    case "5":
                        console.log("Vous quittez le jeu. Au revoir !");
                        jeuEnCours = false; // Arrêter la boucle
                        break;
                    default:
                        console.log("Action non reconnue. Essayez encore.");
                }

                // Alterner les tours
                tourJoueur1 = !tourJoueur1;
            }

            if (this.joueur1.pointsDeVie <= 0 && this.joueur2.pointsDeVie <= 0) {
                console.log("Vous êtes mort. Game Over !");
            }

            console.log("Jeu terminé !");
            console.log("Merci d'avoir joué !");
        }
    }

    combat(joueur: any, ennemis: any []): void {
        console.log("Vous attaquez un ennemi !");
        const ennemi = ennemis.find((e) => e.pointsDeVie > 0); // Trouver un ennemi vivant
        if (!ennemi) {
            console.log("Il n'y a plus d'ennemis à attaquer !");
            return;
        }

        // Tour du joueur
        console.log(`Vous attaquez ${ennemi.nom} et infligez ${joueur.attaque} points de dégâts.`);
        ennemi.recevoirDegats(joueur.attaque);
        if (ennemi.pointsDeVie <= 0) {
            console.log(`${ennemi.nom} est vaincu !`);
        } else {
            console.log(`${ennemi.nom} a encore ${ennemi.pointsDeVie} points de vie.`);
        }

        // Tour de l'ennemi
        if (ennemi.pointsDeVie > 0) {
            console.log(`${ennemi.nom} vous attaque et inflige ${ennemi.attaque} points de dégâts.`);
            joueur.pointsDeVie -= ennemi.attaque;
            console.log(`Il vous reste ${joueur.pointsDeVie} points de vie.`);
        }
    }

    // Utiliser un objet de l'inventaire
    utiliserObjet(joueur: any): void {
        if (joueur.inventaire.includes("Potion de soin")) {
            console.log("Vous utilisez une potion de soin !");
            joueur.pointsDeVie += 20;
            console.log(`Vos points de vie sont maintenant : ${joueur.pointsDeVie}`);
        } else {
            console.log("Objet inconnu ou inutilisable !");
        }
    }

    // Afficher les actions disponibles
    afficherActions(): void {
        console.log("\n\x1b[33mQue voulez-vous faire ?\x1b[0m"); // Texte en jaune
        console.log("\x1b[32m1. Attaquer un ennemi\x1b[0m"); // Texte en vert
        console.log("\x1b[34m2. Utiliser un objet\x1b[0m"); // Texte en bleu
        console.log("\x1b[35m3. Utiliser une compétence spéciale\x1b[0m"); // Texte en violet
        console.log("\x1b[36m4. Charger le jeu\x1b[0m"); // Texte en cyan
        console.log("\x1b[31m5. Quitter le jeu\x1b[0m"); // Texte en rouge
    }

    // Utiliser une compétence
    utiliserCompetence(joueur: any, ennemis: any[]): void {
        console.log(`${joueur.nom} utilise une compétence spéciale !`);
        // Implémenter la logique de compétence ici
    }

    // Sauvegarder le jeu
    sauvegarderJeu(): void {
        console.log("Jeu sauvegardé !");
        // Implémenter la logique de sauvegarde ici
    }

    // Charger le jeu
    chargerJeu(): void {
        try {
            const sauvegarde = Deno.readTextFileSync("sauvegarde.json"); // Lire le fichier de sauvegarde
            const data = JSON.parse(sauvegarde); // Convertir le contenu JSON en objet
            this.joueur1 = data.joueur1; // Charger les données du joueur 1
            this.joueur2 = data.joueur2; // Charger les données du joueur 2
            console.log("Jeu chargé avec succès !");
        } catch (error) {
            console.log("Erreur : Impossible de charger la sauvegarde. Aucune sauvegarde trouvée.");
        }
    }
}
