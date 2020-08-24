import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {TimerObservable} from 'rxjs/observable/TimerObservable'
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-detail-dialog',
    templateUrl: './detail-dialog.component.html',
    styleUrls: ['./detail-dialog.component.scss']
})
export class DetailDialogComponent implements OnInit, OnDestroy {
    detailData: any;

    image: string;
    private autoImageAnimation: any;

    epoch: number;
    D_loss: number;
    G_loss: number;

    constructor(
        @Inject(MAT_DIALOG_DATA) private data: any,
    ) {
        this.detailData = data;
        // if (this.detailData.image.length > 1) {
        //     this.image = null;
        // } else {
            this.image = this.detailData.image[0];
        // }
    }

    ngOnInit(): void {
        if (this.detailData.image.length > 1) {
            if (this.detailData.timeExpand) {
                const timer = TimerObservable.create(0, 3000 * (this.detailData.image.length) + 3000);
                this.autoImageAnimation = timer.subscribe(t => {
                    this.SetImage();
                });
            } else {
                const timer = TimerObservable.create(0, 500 * (this.detailData.image.length) + 1500);
                this.autoImageAnimation = timer.subscribe(t => {
                    this.SetImage();
                });
            }
        }
    }

    ngOnDestroy() {
        if (this.detailData.image.length > 1) {
            this.autoImageAnimation.unsubscribe();
        }
    }

    SetImage() {
        if (this.detailData.logTxt) {
            for (let i = 0; i <= this.detailData.image.length - 1; i++) {
                setTimeout(() => {
                    this.image = this.detailData.image[i];
                    this.epoch = this.detailData.logTxt[i].epoch;
                    this.D_loss = this.detailData.logTxt[i].D_loss;
                    this.G_loss = this.detailData.logTxt[i].G_loss;
                }, 500 * (i + 1));
            }
        } else if (this.detailData.timeExpand) {
            for (let i = 0; i <= this.detailData.image.length - 1; i++) {
                setTimeout(() => {
                    this.image = this.detailData.image[i];
                }, 3000 * (i + 1));
            }
        } else {
            for (let i = 0; i <= this.detailData.image.length - 1; i++) {
                setTimeout(() => {
                    this.image = this.detailData.image[i];
                }, 500 * (i + 1));
            }
        }
    }
}
