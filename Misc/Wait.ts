export class Wait {
    static Time(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}