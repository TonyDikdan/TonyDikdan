// filepath: /billiard-physics-simulator/billiard-physics-simulator/src/physics/dynamics.ts
export function updateBallPosition(ball, deltaTime) {
    ball.position.x += ball.velocity.x * deltaTime;
    ball.position.y += ball.velocity.y * deltaTime;
}

export function applyFriction(ball, frictionCoefficient) {
    ball.velocity.x *= (1 - frictionCoefficient);
    ball.velocity.y *= (1 - frictionCoefficient);
}

export function calculateAcceleration(force, mass) {
    return {
        x: force.x / mass,
        y: force.y / mass
    };
}

export function simulateBallMovement(ball, deltaTime, frictionCoefficient) {
    const acceleration = calculateAcceleration(ball.force, ball.mass);
    ball.velocity.x += acceleration.x * deltaTime;
    ball.velocity.y += acceleration.y * deltaTime;

    applyFriction(ball, frictionCoefficient);
    updateBallPosition(ball, deltaTime);
}