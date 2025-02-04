// filepath: /billiard-physics-simulator/billiard-physics-simulator/src/physics/collisions.ts
export function detectBallCollision(ballA, ballB) {
    const dx = ballB.position.x - ballA.position.x;
    const dy = ballB.position.y - ballA.position.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const minDistance = ballA.radius + ballB.radius;

    if (distance < minDistance) {
        const angle = Math.atan2(dy, dx);
        const overlap = minDistance - distance;

        // Adjust positions to prevent overlap
        ballA.position.x -= (overlap / 2) * Math.cos(angle);
        ballA.position.y -= (overlap / 2) * Math.sin(angle);
        ballB.position.x += (overlap / 2) * Math.cos(angle);
        ballB.position.y += (overlap / 2) * Math.sin(angle);

        // Calculate new velocities based on elastic collision
        const tempVx = ballA.velocity.x;
        const tempVy = ballA.velocity.y;

        ballA.velocity.x = ballB.velocity.x;
        ballA.velocity.y = ballB.velocity.y;
        ballB.velocity.x = tempVx;
        ballB.velocity.y = tempVy;
    }
}

export function detectWallCollision(ball, tableWidth, tableHeight) {
    if (ball.position.x - ball.radius < 0) {
        ball.position.x = ball.radius; // Left wall
        ball.velocity.x *= -1; // Reverse velocity
    } else if (ball.position.x + ball.radius > tableWidth) {
        ball.position.x = tableWidth - ball.radius; // Right wall
        ball.velocity.x *= -1; // Reverse velocity
    }

    if (ball.position.y - ball.radius < 0) {
        ball.position.y = ball.radius; // Top wall
        ball.velocity.y *= -1; // Reverse velocity
    } else if (ball.position.y + ball.radius > tableHeight) {
        ball.position.y = tableHeight - ball.radius; // Bottom wall
        ball.velocity.y *= -1; // Reverse velocity
    }
}