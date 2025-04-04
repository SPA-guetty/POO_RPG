import { Juju, Tomtom, Marijuana, Rems, Bidoof } from "./ennemi.ts";

// Création des ennemis
const juju = new Juju();
const tomtom = new Tomtom();
const marijuana = new Marijuana();
const rems = new Rems();
const bidoof = new Bidoof();

// Exemple de combat
console.log("Début du combat !");
juju.agir();
juju.attaquer(tomtom);

tomtom.agir();
tomtom.attaquer(juju);

marijuana.agir();
marijuana.attaquer(rems);

rems.agir();
rems.attaquer(bidoof);

bidoof.agir();
bidoof.attaquer(juju);

console.log("Fin du combat !");
