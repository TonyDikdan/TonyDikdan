// filepath: /billiard-physics-simulator/billiard-physics-simulator/src/physics/trigonometry.ts
export function calculateAngle(opposite: number, adjacent: number): number {
    return Math.atan2(opposite, adjacent) * (180 / Math.PI);
}

export function calculateTrajectory(initialVelocity: number, angle: number): { x: number, y: number } {
    const radians = angle * (Math.PI / 180);
    return {
        x: initialVelocity * Math.cos(radians),
        y: initialVelocity * Math.sin(radians)
    };
}

export function calculateDistance(pointA: { x: number, y: number }, pointB: { x: number, y: number }): number {
    return Math.sqrt(Math.pow(pointB.x - pointA.x, 2) + Math.pow(pointB.y - pointA.y, 2));
}

export function calculateSpinEffect(spin: number, velocity: number): number {
    return spin * velocity; // Simplified spin effect calculation
}

export function calculateReflectionAngle(incidentAngle: number, surfaceAngle: number): number {
    return surfaceAngle - (incidentAngle - surfaceAngle); // Basic reflection angle calculation
}