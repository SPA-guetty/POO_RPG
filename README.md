# **POO_RPG**

**Yscape** est un jeu de rôle immersif développé en utilisant les principes de la programmation orientée objet (POO). Ce projet met en avant des concepts fondamentaux tels que l'héritage, le polymorphisme et l'encapsulation, tout en offrant une expérience ludique et éducative.

## **Table des matières**
1. À propos du projet
2. Concepts de la POO
3. Fonctionnalités
4. Technologies utilisées
5. Installation
7. Structure du projet
8. Auteurs

## **À propos du projet**

**Yscape** est un jeu de rôle textuel où les joueurs peuvent :
- Créer des personnages personnalisés.
- Explorer des mondes imaginaires.
- Combattre des ennemis.
- Progresser en compétences et débloquer de nouvelles capacités.

Ce projet a été conçu pour démontrer l'application des concepts de la POO dans un contexte pratique et amusant.

## **Concepts de la POO**

Le projet met en œuvre les concepts fondamentaux de la programmation orientée objet :

1. **Polymorphisme** :
   - Permet à une méthode ou une fonction d'avoir plusieurs formes.
   - Exemple : Une méthode `attaquer()` définie dans une classe parent peut être redéfinie dans des sous-classes (comme `Guerrier` ou `Mage`) pour fournir des comportements spécifiques.

2. **Héritage** :
   - Permet à une classe enfant de réutiliser les attributs et méthodes d'une classe parent.
   - Exemple : Une classe `Personnage` peut être la classe parent, et des classes comme `Guerrier` ou `Mage` peuvent hériter de ses propriétés et méthodes tout en ajoutant leurs propres spécificités.

3. **Encapsulation** :
   - Restreint l'accès direct à certaines données ou méthodes d'une classe pour protéger son intégrité.
   - Exemple : Les attributs d'une classe peuvent être rendus privés et manipulés uniquement via des méthodes publiques comme des getters et setters.

Ces concepts permettent de structurer le code de manière modulaire, réutilisable et maintenable.


## **Fonctionnalités**

- **Création de personnages** : Personnalisez votre héros avec des attributs uniques.
- **Système de combat** : Engagez des batailles stratégiques contre des ennemis.
- **Gestion des inventaires** : Collectez, utilisez et échangez des objets.
- **Progression** : Gagnez de l'expérience, montez en niveau et débloquez de nouvelles compétences.
- **Exploration** : Parcourez des environnements variés et découvrez des quêtes.


## **Technologies utilisées**

- **Langage** : TypeScript
- **Environnement d'exécution** : [Deno](https://deno.land/)
- **Paradigme** : Programmation orientée objet (POO)
- **Outils** : Visual Studio Code, Deno CLI


## **Installation**

1. **Prérequis** :
   - Installez [Deno](https://deno.land/).

2. **Cloner le projet** :
   ```bash
   git clone https://github.com/votre-repo/POO_RPG.git
   cd POO_RPG
   ```

3. **Exécuter le jeu** :

   deno run PrinterGUI.ts
  
  
## **Structure du projet**

Voici une description des fichiers et dossiers principaux qui composent ce projet :

- **`main.ts`** : Le point d'entrée du jeu. Ce fichier initialise le jeu et gère la boucle principale.
- **`Game.ts`** : Contient la logique principale du jeu, y compris la gestion des tours, des combats, et des interactions entre les joueurs et les ennemis.
- **`ennemi.ts`** : Définit les classes pour les ennemis, leurs comportements et leurs caractéristiques.
- **`Ympeldown.ts`** : Gère les étages ou niveaux du jeu, y compris leur structure et leur contenu.
- **`Etage.ts`** : Implémente la classe `Etage`, qui représente un niveau ou une zone spécifique du jeu.
- **`PrinterGUI.ts`** : Gère l'affichage des éléments textuels dans le terminal.
- **`Menu.ts`** : Implémente le menu principal du jeu, permettant de commencer une nouvelle partie, charger une partie existante ou quitter le jeu.
- **`README.md`** : Ce fichier, qui documente le projet et fournit des instructions pour son utilisation.
- **`sauvegarde.json`** : (Optionnel) Fichier de sauvegarde contenant l'état actuel du jeu.

## **Auteurs**

- **Thomas**
- **Gracia**
- **Amory**
