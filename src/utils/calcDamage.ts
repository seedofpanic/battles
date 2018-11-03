export function calcDamage(minDamage: number, maxDamage: number) {
    return Math.ceil(Math.random() * (maxDamage - minDamage)) + minDamage;
}