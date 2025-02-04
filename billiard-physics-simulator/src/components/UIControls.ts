import { Ball } from './Ball';
import { CueStick } from './CueStick';

export class UIControls {
    private speedInput: HTMLInputElement;
    private spinInput: HTMLInputElement;
    private ballCountInput: HTMLInputElement;
    private cueStick: CueStick;

    constructor(cueStick: CueStick) {
        this.cueStick = cueStick;
        this.speedInput = document.getElementById('speed') as HTMLInputElement;
        this.spinInput = document.getElementById('spin') as HTMLInputElement;
        this.ballCountInput = document.getElementById('ballCount') as HTMLInputElement;

        this.initializeControls();
    }

    private initializeControls() {
        this.speedInput.addEventListener('input', this.updateSpeed.bind(this));
        this.spinInput.addEventListener('input', this.updateSpin.bind(this));
        this.ballCountInput.addEventListener('input', this.updateBallCount.bind(this));
    }

    private updateSpeed() {
        const speed = parseFloat(this.speedInput.value);
        this.cueStick.setSpeed(speed);
    }

    private updateSpin() {
        const spin = parseFloat(this.spinInput.value);
        this.cueStick.setSpin(spin);
    }

    private updateBallCount() {
        const ballCount = parseInt(this.ballCountInput.value);
        // Logic to update the number of balls in the simulation
    }
}