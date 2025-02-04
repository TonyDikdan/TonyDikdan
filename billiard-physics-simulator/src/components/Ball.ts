class Ball {
    constructor(x, y, radius) {
        this.position = { x: x, y: y };
        this.velocity = { x: 0, y: 0 };
        this.radius = radius;
    }

    update() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }

    handleCollision(otherBall) {
        const dx = otherBall.position.x - this.position.x;
        const dy = otherBall.position.y - this.position.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.radius + otherBall.radius) {
            const angle = Math.atan2(dy, dx);
            const targetX = this.position.x + Math.cos(angle) * (this.radius + otherBall.radius);
            const targetY = this.position.y + Math.sin(angle) * (this.radius + otherBall.radius);
            const ax = targetX - otherBall.position.x;
            const ay = targetY - otherBall.position.y;

            this.velocity.x -= ax;
            this.velocity.y -= ay;
            otherBall.velocity.x += ax;
            otherBall.velocity.y += ay;
        }
    }

    render(ctx) {
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.stroke();
    }
}

export default Ball;