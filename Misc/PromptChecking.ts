export class PromptChecking {
    Check(prompt: string | null): boolean {
        if (prompt === null) {
            return false;
        }
        const int = parseInt(prompt);
        if (isNaN(int)) {
            return false;
        }
        return true;
    }
}