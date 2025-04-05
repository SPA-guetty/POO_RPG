import { Refresh } from "../Refresh.ts";

export class Start {
    constructor() {
        new Refresh();
        console.log("Bienvenue dans la prison de Ympeldown.");
        console.log("Votre but sera de vaincre les gardes et de vous échapper.");
        console.log("Vous pourrez choisir 3 classes parmis 6 disponibles");
    }
}