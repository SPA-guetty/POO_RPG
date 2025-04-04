import * as Items from "../Items/Items.ts";

export class Bosses {
    public classname: string;
    public ui: Array<string>;

    public processors: number; 
    public defense: number;
    public coding: number;
    public antivirus: number;
    public battery: number;
    public maxbattery: number;

    public exp: number;
    public drop: Items.Item | null; 

    constructor(classname: string, ui: Array<string>, processors: number, defense: number, coding: number, antivirus: number, battery: number, maxbattery: number, exp: number, drop: Items.Item | null) {
        this.classname = classname;
        this.ui = ui;
        this.processors = processors;
        this.defense = defense;
        this.coding = coding;
        this.antivirus = antivirus;
        this.battery = battery;
        this.maxbattery = maxbattery;

        this.exp = exp;
        this.drop = drop;
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
            6, //processors
            5, //defense
            4, //coding
            40, //antivirus
            200, //battery
            200, //maxbattery
            1000, //exp
            new Items.OldTiticomputer(), //drop
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
            3, //processors
            40, //defense
            7, //coding
            4, //antivirus
            320, //battery
            320, //maxbattery
            2000, //exp
            new Items.ShinyLaurentSkull(), //drop
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
            0, //processors
            12, //defense
            30, //coding
            40, //antivirus
            250, //battery
            250, //maxbattery
            3500, //exp
            new Items.RAMCleaner(), //drop
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
            30, //processors
            10, //defense
            30, //coding
            4, //antivirus
            500, //battery
            500, //maxbattery
            5000, //exp
            new Items.Battery(), //drop
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
            20, //processors
            20, //defense
            20, //coding
            20, //antivirus
            1000, //battery
            1000, //maxbattery
            4000, //exp
            null, //drop
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
            10, //processors
            8, //defense
            0, //coding
            7, //antivirus
            250, //battery
            250, //maxbattery
            4000, //exp
            null, //drop
        )
    }
}

export class RomeoJuliette {
    romeo: Romeo = new Romeo();
    juliette: Juliette = new Juliette();
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
            40, //processors
            40, //defense
            10, //coding
            40, //antivirus
            1000, //battery
            1000, //maxbattery
            10000, //exp
            new Items.ExitKeys(), //drop
        )
    }
}