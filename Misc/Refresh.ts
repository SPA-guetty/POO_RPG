// Alternative to console.clear() which does not clear everything and shows some previous lines

export class Refresh { 
    constructor() {
        for (let i = 0; i < 30; i++) {
            console.log("\n");
        }
    }
}