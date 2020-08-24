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

    constructor(
        @Inject(MAT_DIALOG_DATA) private data: any,
    ) {
        this.detailData = data;
        this.image = this.detailData.image[0];
    }

    ngOnInit(): void {
        const timer = TimerObservable.create(0, 500 * (this.detailData.image.length) + 1500);
        this.autoImageAnimation = timer.subscribe(t => {
            this.SetImage();
        });
    }

    ngOnDestroy() {
        this.autoImageAnimation.unsubscribe();
    }

    SetImage() {
        for (let i = 0; i <= this.detailData.image.length - 1; i++) {
            setTimeout(() => {
                this.image = this.detailData.image[i];
            }, 500 * (i + 1));
        }
    }
}
