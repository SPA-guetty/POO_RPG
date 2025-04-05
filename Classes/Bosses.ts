import * as Items from "../Items/Items.ts";
import * as capacity from '../Main/Capacity.ts';

export class Bosses {
    public classname: string;
    public ui: Array<string>;

    public attack: number; 
    public defense: number;
    public processors: number;
    public antivirus: number;
    public battery: number;
    public maxbattery: number;

    public exp: number;
    public drop: Items.Item | null; 

    public capacity1: capacity.Capacity;
    public capacity2: capacity.Capacity | null;

    constructor(classname: string, ui: Array<string>, attack: number, defense: number, processors: number, antivirus: number, battery: number, maxbattery: number, exp: number, drop: Items.Item | null, capacity1: capacity.Capacity, capacity2: capacity.Capacity | null = null) {
        this.classname = classname;
        this.ui = ui;
        this.attack = attack;
        this.defense = defense;
        this.processors = processors;
        this.antivirus = antivirus;
        this.battery = battery;
        this.maxbattery = maxbattery;

        this.exp = exp;
        this.drop = drop;

        this.capacity1 = capacity1;
        this.capacity2 = capacity2;
    }
}

export class Titi extends Bosses {
    constructor() {
        super(
            "Titi", //classname
            [
                "  乁   ",
                "  風༄  ",
                "  死   ",
            ],
            6, //attack
            5, //defense
            4, //processors
            40, //antivirus
            200, //battery
            200, //maxbattery
            1000, //exp
            new Items.OldTiticomputer(), //drop

            new capacity.Capacity(
                "Celestial wind", // name
                "Un vent puissant d'origine inconnue", // description
                3, // number of targets
                true, // random ennemy
                "physical", // type
                0, // RAM
                [new capacity.CapacityEffect("batterie", -10)], // statistics
            ),

            new capacity.Capacity(
                "Green smoke", // name
                "Une brume verte et asphixiante", // description
                3, // number of targets
                true, // random ennemy
                "physical", // type
                0, // RAM
                [new capacity.CapacityEffect("batterie", -25)], // statistics
            ),
        )
    }
}

export class Laurent extends Bosses {
    constructor() {
        super(
            "Laurent", //classname
            [
                "  乁   ",
                "  秃   ",
                "  大   ",
            ],
            5, //attack
            40, //defense
            7, //processors
            4, //antivirus
            320, //battery
            320, //maxbattery
            2000, //exp
            new Items.ShinyLaurentSkull(), //drop

            new capacity.Capacity(
                "Charge", // name
                "Fonce sur son adversaire", // description
                1, // number of targets
                true, // random ennemy
                "physical", // type
                0, // RAM
                [new capacity.CapacityEffect("batterie", -25)], // statistics
            ),

            new capacity.Capacity(
                "Reflection", // name
                "Renvoie la prochaine attaque physique du tour", // description
                0, // number of targets
                true, // random ennemy
                "mirror", // type
                0, // RAM
                [new capacity.CapacityEffect("defense", 999), new capacity.CapacityEffect("battery", -1)], // statistics
            ),
        )
    }
}

export class Pascalou extends Bosses {
    constructor() {
        super(
            "Pascalou", //classname
            [
                "  乁   ",
                "  攻   ",
                "  防   ",
            ],
            0, //attack
            12, //defense
            30, //processors
            40, //antivirus
            250, //battery
            250, //maxbattery
            3500, //exp
            new Items.RAMCleaner(), //drop

            new capacity.Capacity(
                "Hacking", // name
                "Attaque un adversaire à distance, inflige des dégâts élevés", // description
                1, // number of targets
                true, // random ennemy
                "code", // type
                0, // RAM
                [new capacity.CapacityEffect("battery", 40)], // statistics
            ),

            new capacity.Capacity(
                "Malware", // name
                "Utilise un malware", // description
                null, // number of targets
                true, // random ennemy
                "physical, random" , // type
                0, // RAM
                [new capacity.CapacityEffect("batterie", -25), new capacity.CapacityEffect("batterie", -10), new capacity.CapacityEffect("defense", -0.8), new capacity.CapacityEffect("attaque", -0.5)], // statistics
            ),
        )
    }
}

export class Bidoof extends Bosses {
    constructor() {
        super(
            "Bidoof", //classname
            [
                "  乁   ",
                "  齿   ",
                "  共   ",
            ],
            30, //attack
            10, //defense
            30, //processors
            4, //antivirus
            500, //battery
            500, //maxbattery
            5000, //exp
            new Items.Battery(), //drop

            new capacity.Capacity(
                "Charge", // name
                "Fonce sur son adversaire", // description
                1, // number of targets
                true, // random ennemy
                "physical", // type
                0, // RAM
                [new capacity.CapacityEffect("batterie", -25)], // statistics
            ),

            new capacity.Capacity(
                "USB key", // name
                "Utilise une clé usb au contenu inconnu, peut infliger de gros dégâts voir aucun", // description
                null, // number of targets
                true, // random ennemy
                "physical, random" , // type
                0, // RAM
                [new capacity.CapacityEffect("batterie", -50), new capacity.CapacityEffect("batterie", 0)], // statistics
            ),
        )
    }
}

class Romeo extends Bosses {
    constructor() {
        super(
            "Romeo", //classname
            [
                "  乁   ",
                "  你   ",
                "  好   ",
            ],
            20, //attack
            20, //defense
            20, //processors
            20, //antivirus
            1000, //battery
            1000, //maxbattery
            4000, //exp
            null, //drop

            new capacity.Capacity(
                "Fake email", // name
                "Envoie un email piégé à ses adversaires", // description
                null, // number of targets
                true, // random ennemy
                "code", // type
                0, // RAM
                [new capacity.CapacityEffect("battery", -10)], // statistics
            ),

            new capacity.Capacity(
                "Connection killer", // name
                "Un code qui inflige des dégâts de code et empêche l'attaque", // description
                1, // number of targets
                true, // random ennemy
                "code", // type
                0, // RAM
                [new capacity.CapacityEffect("attaque", -999), new capacity.CapacityEffect("battery", 20)], // statistics
            ),
        )
    }
}

class Juliette extends Bosses {
    constructor() {
        super(
            "Juliette", //classname
            [
                "  乁   ",
                "  你   ",
                "  好   ",
            ],
            10, //attack
            8, //defense
            0, //processors
            7, //antivirus
            250, //battery
            250, //maxbattery
            4000, //exp
            null, //drop

            new capacity.Capacity(
                "Fake email", // name
                "Envoie un email piégé à ses adversaires", // description
                null, // number of targets
                true, // random ennemy
                "code", // type
                0, // RAM
                [new capacity.CapacityEffect("battery", -10)], // statistics
            ),

            new capacity.Capacity(
                "Intimidation", // name
                "Baisse la défense de tous ses adversaires", // description
                3, // number of targets
                true, // random ennemy
                "code", // type
                0, // RAM
                [new capacity.CapacityEffect("defense", -0.6)], // statistics
            ),
        )
    }
}

export class RomeoJuliette {
    romeo: Romeo = new Romeo();
    juliette: Juliette = new Juliette();
}

export class Juju extends Bosses {
    constructor() {
        super(
            "Juju", //classname
            [
                "  乁   ",
                "  風༄  ",
                "  死   ",
            ],
            30, //attack
            50, //defense
            40, //processors
            50, //antivirus
            500, //battery
            500, //maxbattery
            10000, //expreward
            new Items.Tiesselune(), //drop



            new capacity.Capacity(
                "\"I know the code\"", // name
                "Reflect the next attack", // description
                1, // number of targets
                false, // random ennemy
                "mirror", // type
                0, // RAM
                [new capacity.CapacityEffect("defense", 999), new capacity.CapacityEffect("battery", -1)], // statistics
            ),
            
            // passif voir attaque supplémentaire
            /*"On va voir si t’as compris... ou juste copié."
            Analyse les ennemis. 
            Si un adversaire a utilisé une compétence déjà vue dans le combat, 
            peut pas utiliser la même attaque 2 tours de suite*/
        )
    }
}

export class AnilMagellanDende extends Bosses {
    constructor() {
        super(
            "Anil Magellan-Dende", //classname
            [
                "    单 ",
                "  强大的",
                "  领导者",
                "  秃  秃",
            ],
            40, //attack
            40, //defense
            10, //processors
            40, //antivirus
            1000, //battery
            1000, //maxbattery
            10000, //exp
            new Items.ExitKeys(), //drop

            new capacity.Capacity(
                "Campus poison", // name
                "Attaque 2 alliés: l'un prend des dégâts, l'autre voit son attaque baissée", // description
                2, // number of targets
                true, // random ennemy
                "physical", // type
                0, // RAM
                [new capacity.CapacityEffect("batterie", -20), new capacity.CapacityEffect("attack", -0.5)], // statistics
            ),

            new capacity.Capacity(
                "Projects overflow", // name
                "Donne des projets épuisants la batterie des alliés", // description
                3, // number of targets
                true, // random ennemy
                "physical", // type
                0, // RAM
                [new capacity.CapacityEffect("batterie", -20)], // statistics
            ),
        )
    }
}