import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
    selector: 'app-detail-dialog',
    templateUrl: './detail-dialog.component.html',
    styleUrls: ['./detail-dialog.component.scss']
})
export class DetailDialogComponent implements OnInit, OnDestroy {
    detailData: any;

    image: string;
    image2: string;
    imageIndex: number = 0;

    step: string;
    stepIndex: number = 0;

    geneIndex: number = 2;
    genePseudoCode: string;

    filterSelected: boolean = false;

    timer: any;
    timerStop: boolean = false;

    epoch: number;
    D_loss: number;
    G_loss: number;
    epoch2: number;
    D_loss2: number;
    G_loss2: number;

    x: number = 0;
    y: number = 0;
    W: number = 0;
    b: number = 0;

    constructor(
        @Inject(MAT_DIALOG_DATA) private data: any,
    ) {
        this.detailData = data;
        if (this.detailData.image) this.image = this.detailData.image[0];
        if (this.detailData.logTxt) this.image2 = this.detailData.image[1];
        if (this.detailData.nextGene) {
            this.image = '../assets/result-img/genetic-algorithm/step2/fitness_' + this.geneIndex + '_000.png';
            this.image2 = '../assets/result-img/genetic-algorithm/step2/fitness_' + (this.geneIndex + 1) + '_000.png';
        }
    }

    ngOnInit(): void {
        this.SetImage();
    }

    ngOnDestroy() {
    }

    SetImage() {
        if (this.detailData.logTxt) {
            let i = 0;
            this.timer = setInterval(() => {
                this.image = this.detailData.image[i];
                this.epoch = this.detailData.logTxt[i].epoch;
                this.D_loss = this.detailData.logTxt[i].D_loss;
                this.G_loss = this.detailData.logTxt[i].G_loss;

                this.image2 = this.detailData.image[i + 1];
                this.epoch2 = this.detailData.logTxt[i + 1].epoch;
                this.D_loss2 = this.detailData.logTxt[i + 1].D_loss;
                this.G_loss2 = this.detailData.logTxt[i + 1].G_loss;

                if (i === this.detailData.image.length - 2) i = 0;
                else i++;
            }, 800);
        } else if (this.detailData.timeExpand && this.detailData.filter && this.detailData.image[this.imageIndex] === '') {
            let i = 0;
            this.timer = setInterval(() => {
                if (this.timerStop) {
                    clearInterval(this.timer);
                } else {
                    this.image = this.detailData.gifImg[i];
                }

                if (i === this.detailData.gifImg.length - 1) i = 0;
                else i++;
            }, 500);
        } else if (this.detailData.timeExpand && this.detailData.steps) {
            this.step = this.detailData.steps[this.stepIndex];
            if (this.timerStop) {
                clearInterval(this.timer);
                this.timer = null;
            }
            if (this.detailData.nextGene) {
                let i = 0;
                this.stepIndex = 0;
                this.step = this.detailData.steps[this.stepIndex];
                this.image = '../assets/result-img/genetic-algorithm/step2/fitness_' + this.geneIndex + '_000.png';
                this.image2 = '../assets/result-img/genetic-algorithm/step2/fitness_' + (this.geneIndex + 1) + '_000.png';
                this.timer = setInterval(() => {
                    if (i <= 9) {
                        this.image = '../assets/result-img/genetic-algorithm/step2/fitness_' + this.geneIndex + '_00' + i + '.png';
                        this.image2 = '../assets/result-img/genetic-algorithm/step2/fitness_' + (this.geneIndex + 1) + '_00' + i + '.png';
                        i++;
                    } else if (i === 13) {
                        i = 0;
                        this.stepIndex = 0;
                        this.step = this.detailData.steps[this.stepIndex];
                        this.image = '../assets/result-img/genetic-algorithm/step2/fitness_' + this.geneIndex + '_000.png';
                        this.image2 = '../assets/result-img/genetic-algorithm/step2/fitness_' + (this.geneIndex + 1) + '_000.png';
                    } else {
                        this.stepIndex++;
                        this.step = this.detailData.steps[this.stepIndex];
                        switch (this.stepIndex) {
                            case 1: {
                                this.image = '../assets/result-img/genetic-algorithm/step' + (this.stepIndex + 2) + '/selection_' + this.geneIndex + '.png'
                                this.image2 = '../assets/result-img/genetic-algorithm/step' + (this.stepIndex + 2) + '/selection_' + (this.geneIndex + 1) + '.png'
                                break;
                            }
                            case 2: {
                                this.image = '../assets/result-img/genetic-algorithm/step' + (this.stepIndex + 2) + '/mutation_' + this.geneIndex + '.png'
                                this.image2 = '../assets/result-img/genetic-algorithm/step' + (this.stepIndex + 2) + '/mutation_' + (this.geneIndex + 1) + '.png'
                                break;
                            }
                            case 3: {
                                this.image = '../assets/result-img/genetic-algorithm/step' + (this.stepIndex + 2) + '/generation_' + this.geneIndex + '.png'
                                this.image2 = '../assets/result-img/genetic-algorithm/step' + (this.stepIndex + 2) + '/generation_' + (this.geneIndex + 1) + '.png'
                                break;
                            }
                        }
                        i++;
                    }
                }, 800);
            } else {
                switch (this.stepIndex) {
                    case 0: {
                        this.image = '../assets/result-img/genetic-algorithm/step1/generation_0_000.png';
                        let i = 0;
                        this.timer = setInterval(() => {
                            this.image = '../assets/result-img/genetic-algorithm/step1/generation_0_00' + i + '.png';

                            if (i === 9) i = 0;
                            else i++;
                        }, 500);
                        break;
                    }
                    case 1: {
                        this.image = '../assets/result-img/genetic-algorithm/step2/fitness_1_000.png';
                        let i = 0;
                        this.timer = setInterval(() => {
                            this.image = '../assets/result-img/genetic-algorithm/step2/fitness_1_00' + i + '.png';

                            if (i === 9) i = 0;
                            else i++;
                        }, 500);
                        break;
                    }
                    case 2: {
                        this.image = '../assets/result-img/genetic-algorithm/step3/selection_1.png';
                        break;
                    }
                    case 3: {
                        this.image = '../assets/result-img/genetic-algorithm/step4/mutation_1.png';
                        break;
                    }
                    case 4: {
                        this.image = '../assets/result-img/genetic-algorithm/step5/generation_1.png';
                        break;
                    }
                }
            }
        } else if (this.detailData.timeExpand) {

        } else if (this.detailData.isStep) {
            let i = 0;
            this.timer = setInterval(() => {
                this.image = this.detailData.image[i];
                this.W = this.detailData.graphData[i].W;
                this.b = this.detailData.graphData[i].b;

                if (i === this.detailData.image.length - 1) i = 0;
                else i++;
            }, 500);
        } else if (this.detailData.stateNum === '1') {
            let i = 0;
            this.timer = setInterval(() => {
                this.image = this.detailData.image[i];
                this.x = this.detailData.graphData[i].x;
                this.y = this.detailData.graphData[i].y;

                if (i === this.detailData.image.length - 1) i = 0;
                else i++;
            }, 500)
        } else {
            let i = 0;
            this.timer = setInterval(() => {
                this.image = this.detailData.image[i];

                if (i === this.detailData.image.length - 1) i = 0;
                else i++;
            }, 800);
        }
    }

    PrevImage() {
        if (this.detailData.image && this.detailData.image[this.imageIndex] === '') {
            this.timerStop = true;
            this.image = this.detailData.image[--this.imageIndex];
        } else if (this.detailData.image && this.detailData.image[this.imageIndex - 1] === '') {
            this.imageIndex--;
            this.timerStop = false;
            this.image = this.detailData.gifImg[0];
            this.SetImage();
        } else if (this.detailData.nextGene) {
            this.geneIndex--;
            this.timerStop = true;
            this.SetImage();
        } else if (this.detailData.steps) {
            this.stepIndex--;
            this.timerStop = true;
            this.SetImage();
        } else {
            this.image = this.detailData.image[--this.imageIndex];
        }
    }

    NextImage() {
        if (this.detailData.image && this.detailData.image[this.imageIndex] === '') {
            this.timerStop = true;
            this.image = this.detailData.image[++this.imageIndex];
        } else if (this.detailData.image && this.detailData.image[this.imageIndex + 1] === '') {
            this.imageIndex++;
            this.timerStop = false;
            this.image = this.detailData.gifImg[0];
            this.SetImage();
        } else if (this.detailData.nextGene) {
            this.geneIndex++;
            this.timerStop = true;
            this.SetImage();
        } else if (this.detailData.steps) {
            this.stepIndex++;
            this.timerStop = true;
            this.SetImage();
        } else {
            this.image = this.detailData.image[++this.imageIndex];
        }
    }

    VerticalFilter() {
        this.image = '/assets/result-img/cnn/vertical.png';
        this.filterSelected = true;
    }

    HorizontalFilter() {
        this.image = '/assets/result-img/cnn/horizon.png';
        this.filterSelected = true;
    }

    Back() {
        this.image = this.detailData.image[this.imageIndex];
        this.filterSelected = false;
    }
}
