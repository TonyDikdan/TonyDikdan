// filepath: /billiard-physics-simulator/billiard-physics-simulator/src/components/CueStick.ts
export class CueStick {
    private position: { x: number; y: number };
    private angle: number;
    private length: number;

    constructor(position: { x: number; y: number }, angle: number, length: number = 100) {
        this.position = position;
        this.angle = angle;
        this.length = length;
    }

    public setPosition(x: number, y: number): void {
        this.position = { x, y };
    }

    public setAngle(angle: number): void {
        this.angle = angle;
    }

    public getTrajectory(): { endX: number; endY: number } {
        const endX = this.position.x + this.length * Math.cos(this.angle);
        const endY = this.position.y + this.length * Math.sin(this.angle);
        return { endX, endY };
    }

    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.save();
        ctx.translate(this.position.x, this.position.y);
        ctx.rotate(this.angle);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(this.length, 0);
        ctx.strokeStyle = 'brown';
        ctx.lineWidth = 5;
        ctx.stroke();
        ctx.restore();
    }
}