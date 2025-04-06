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

**Yscape** est un jeu de rôle textuel où les joueurs peuvent sélectionner 3 classes parmis une liste de 6 et dont le but est de s'évader de la terrible prison de Ympeldown.

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

- **Création de personnages** : Personnalisez votre héros inspirés d'Ynov.
- **Système de combat** : Engagez des batailles stratégiques contre des ennemis.
- **Gestion des inventaires** : Collectez, utilisez et échangez des objets.
- **Progression** : Gagnez de l'expérience, montez en niveau et devenez plus puissant.
- **Objectif** : Vaincre le directeur général de la prison de Ympeldown afin d'y échapper.


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

   deno run Loader.ts
  
  
## **Structure du projet**

Voici une description des dossiers principaux qui composent ce projet :

- **`Menus`** : Le point d'entrée du jeu. Ce dossier initialise le jeu.
- **`Main`** : Contient la logique principale du jeu, y compris la gestion des tours, des combats, et des interactions entre les joueurs et les ennemis.
- **`Classes/Ennemies`** : Définit les classes pour les ennemis et leurs caractéristiques.
- **`Classes/Allies`** : Définit les classes pour les personnages jouables et leurs caractéristiques.
- **`Classes/Bosses`** : Définit les classes pour les bosses et leurs caractéristiques.
- **`Etage`** : Gère les étages ou niveaux du jeu, y compris leur structure et leur contenu.
- **`Misc`** : Contient des éléments plus ou moins importants au fonctionnennement du jeu, sans en être directement lié.
- **`README.md`** : Ce fichier, qui documente le projet et fournit des instructions pour son utilisation.

## **Auteurs**

- **Thomas**
- **Gracia**
- **Amory**
