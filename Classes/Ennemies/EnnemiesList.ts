import { Marijuana } from './Marijuana.ts';
import { Remy } from './Remy.ts';
import { Tomtom } from './Tomtom.ts';

import { Ennemi } from './Ennemies.ts';
import * as bosses from '../Bosses.ts';

import { Randomnumber } from '../../Misc/Randomizer.ts';

export class EnnemiesList {
    private ennemies: Array<Ennemi> = [
        new Marijuana(),
        new Remy(),
        new Tomtom(),
    ];

    getEnnemies(id: number): Array<Ennemi> | bosses.Boss | bosses.RomeoJuliette {
        if (id >= 0) {
            return this.getEnnemiList(id);
        } else {
            return this.getBoss(id);
        }
    }

    getEnnemiList(id: number): Array<Ennemi> {
        const list: Array<Ennemi> = [];

        for (let i = 0; i < id; i++) {
            const ennemi = new Randomnumber().Random(0,2);
            list.push(this.ennemies[ennemi]);
        }

        return list;
    }

    getBoss(id: number): bosses.Boss | bosses.RomeoJuliette {
        if (id == -1) {
            return new bosses.Laurent();
        } else if (id == -2) {
            return new bosses.Bidoof();
        }
        else if (id == -3) {
            return new bosses.Titi();
        }
        else if (id == -4) {
            return new bosses.Juju();
        }
        else if (id == -5) {        
            return new bosses.Pascalou();
        }
        else if (id == -6) {
            return new bosses.RomeoJuliette();
        }
        return new bosses.AnilMagellanDende();
    }
}