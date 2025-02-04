import { Ball } from './Ball';
import { CueStick } from './CueStick';

export class Table {
    private width: number;
    private height: number;
    private balls: Ball[];
    private cueStick: CueStick;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.balls = [];
        this.cueStick = new CueStick();
    }

    public addBall(ball: Ball): void {
        this.balls.push(ball);
    }

    public render(ctx: CanvasRenderingContext2D): void {
        this.drawTable(ctx);
        this.balls.forEach(ball => ball.render(ctx));
        this.cueStick.render(ctx);
    }

    private drawTable(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = '#008000'; // Green color for the table
        ctx.fillRect(0, 0, this.width, this.height);
        ctx.strokeStyle = '#000000'; // Black color for the border
        ctx.strokeRect(0, 0, this.width, this.height);
    }

    public detectWallCollisions(): void {
        this.balls.forEach(ball => {
            if (ball.position.x - ball.radius < 0 || ball.position.x + ball.radius > this.width) {
                ball.velocity.x *= -1; // Reverse x velocity on wall collision
            }
            if (ball.position.y - ball.radius < 0 || ball.position.y + ball.radius > this.height) {
                ball.velocity.y *= -1; // Reverse y velocity on wall collision
            }
        });
    }

    public update(): void {
        this.balls.forEach(ball => ball.update());
        this.detectWallCollisions();
    }
}