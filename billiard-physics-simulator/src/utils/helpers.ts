// filepath: /billiard-physics-simulator/billiard-physics-simulator/src/utils/helpers.ts
export function randomInRange(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

export function degreesToRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
}

export function radiansToDegrees(radians: number): number {
    return radians * (180 / Math.PI);
}

export function normalizeVector(vector: { x: number; y: number }): { x: number; y: number } {
    const length = Math.sqrt(vector.x ** 2 + vector.y ** 2);
    return length > 0 ? { x: vector.x / length, y: vector.y / length } : { x: 0, y: 0 };
}

export function vectorAdd(v1: { x: number; y: number }, v2: { x: number; y: number }): { x: number; y: number } {
    return { x: v1.x + v2.x, y: v1.y + v2.y };
}

export function vectorSubtract(v1: { x: number; y: number }, v2: { x: number; y: number }): { x: number; y: number } {
    return { x: v1.x - v2.x, y: v1.y - v2.y };
}

export function vectorScale(vector: { x: number; y: number }, scalar: number): { x: number; y: number } {
    return { x: vector.x * scalar, y: vector.y * scalar };
}