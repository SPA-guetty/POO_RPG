export class Randomnumber {
    static Random(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}