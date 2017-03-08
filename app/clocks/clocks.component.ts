import {Component, ViewChild, OnInit, ElementRef, OnDestroy} from "@angular/core"

@Component({
    selector: "clocks",
    templateUrl: "app/clocks/clocks.template.html"
})
export class ClocksComponent implements OnInit, OnDestroy{

    cloackBckgImagePath: string = "./app/clocks/clocks_bckg.jpg";

    @ViewChild("clocks") clocks : ElementRef;
    context : CanvasRenderingContext2D;
    canvas : HTMLCanvasElement;
    image : HTMLImageElement;
    timer : any;

    date : Date = new Date();
    angle : number = 0;

    clockDivisions: number = 60;

    get imagePath(): string{
        return this.cloackBckgImagePath;
    }

    ngOnInit(): void {
        this.canvas = this.clocks.nativeElement;
        this.context = this.canvas.getContext("2d");
        this.image = <HTMLImageElement>$("#clocks-bckg")[0];
        this.startClocks();
    }

    ngOnDestroy(): void {
        clearInterval(this.timer);
    }

    startClocks(): void {
        this.timer = setInterval(this.updateClock.bind(this), 50);
    }

    updateClock(): void {
            this.date = new Date;
            this.canvasClear();
            this.canvasDrawClockView();
            this.canvasDrawClockTime();
    }

    canvasDrawClockView(): void {
        this.canvasDrawCircle(10);
        this.canvasDrawHours();
        this.canvasDrawCenter();
    }

    canvasDrawClockTime(): void {
        this.canvasDrawSecondArrow();
        this.canvasDrawMinuteArrow();
        this.canvasDrawHourArrow();
    }

    canvasClear(): void {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawBckgImage(image): void {
        this.context.beginPath();
        this.context.arc(this.canvas.width/2, this.canvas.height/2, this.canvas.height/2, 0, Math.PI*2, true);
        this.context.closePath();
        this.context.fill();
        this.context.drawImage(image, 0, 0);
    }

    canvasDrawCircle(radius: number): void {
        this.context.beginPath();
        this.context.arc(this.canvas.width / 2, this.canvas.height / 2, this.clockDivisions + radius, 0, Math.PI * 2);
        this.context.lineWidth = 2;
        this.context.strokeStyle = '#b4b4b4';
        this.context.stroke();
    }

    canvasDrawCenter(): void {
        this.context.beginPath();
        this.context.arc(this.canvas.width / 2, this.canvas.height / 2, 2, 0, Math.PI * 2);
        this.context.lineWidth = 3;
        this.context.fillStyle = '#353535';
        this.context.strokeStyle = '#5a5a5a';
        this.context.stroke();
    }
    canvasDrawHours(): void  {
        this.context.lineWidth = 1;
        for (let i = 0; i < 12; i++) {
            this.angle = (i + 1 - 3) * (Math.PI * 2) / 12;
            this.context.beginPath();
            let x = (this.canvas.width / 2) + Math.cos(this.angle) * (this.clockDivisions) - 4;
            let y = (this.canvas.height / 2) + Math.sin(this.angle) * (this.clockDivisions) + 3;
            //this.context.font = "Arial";
            this.context.strokeStyle = "#000000";
            this.context.font="normal 10px 'Times New Roman'"
            this.context.strokeText((i + 1).toString(), x, y);
            this.context.stroke();

        }
    }
    canvasDrawSecondArrow(): void {
        let milsec = this.date.getSeconds() * 1000 + this.date.getMilliseconds();
        this.angle = ((Math.PI * 2) * (milsec / 60000)) - ((Math.PI * 2) / 4);
        this.context.lineWidth = 0.5;
        this.context.beginPath();
        this.context.moveTo(this.canvas.width / 2, this.canvas.height / 2);
        this.context.lineTo((this.canvas.width / 2 + Math.cos(this.angle) * this.clockDivisions),
            this.canvas.height / 2 + Math.sin(this.angle) * this.clockDivisions);
        this.context.moveTo(this.canvas.width / 2, this.canvas.height / 2);
        this.context.lineTo((this.canvas.width / 2 - Math.cos(this.angle) * 20),
            this.canvas.height / 2 - Math.sin(this.angle) * 20);
        this.context.strokeStyle = '#555555';
        this.context.stroke();

    }
    canvasDrawMinuteArrow(): void {
        let min = this.date.getMinutes();
        this.angle = ((Math.PI * 2) * (min / 60)) - ((Math.PI * 2) / 4);
        this.context.lineWidth = 1.5;
        this.context.beginPath();
        this.context.moveTo(this.canvas.width / 2, this.canvas.height / 2);
        this.context.lineTo((this.canvas.width / 2 + Math.cos(this.angle) * this.clockDivisions / 1.1),
            this.canvas.height / 2 + Math.sin(this.angle) * this.clockDivisions / 1.1);
        this.context.strokeStyle = '#999999';
        this.context.stroke();
    }
    canvasDrawHourArrow(): void {
        let hour = this.date.getHours();
        let min = this.date.getMinutes();
        this.angle = ((Math.PI * 2) * ((hour * 5 + (min / 60) * 5) / 60)) - ((Math.PI * 2) / 4);
        this.context.lineWidth = 1.5;
        this.context.beginPath();
        this.context.moveTo(this.canvas.width / 2, this.canvas.height / 2);
        this.context.lineTo((this.canvas.width / 2 + Math.cos(this.angle) * this.clockDivisions / 1.5),
        this.canvas.height / 2 + Math.sin(this.angle) * this.clockDivisions / 1.5);
        this.context.strokeStyle = '#000000';
        this.context.stroke();
    }
}
