export function fairRandom(max: number): number {
    return Math.floor((Math.random() * (max - 0.000001)));
}