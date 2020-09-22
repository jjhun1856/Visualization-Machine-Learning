import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DetailDialogComponent} from '../detail-dialog/detail-dialog.component';
import {KnnProblemComponent} from './knn-problem/knn-problem.component';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {LoadingService} from '../loading.service';

@Component({
    selector: 'app-knn',
    templateUrl: './knn.component.html',
    styleUrls: ['./knn.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class KnnComponent implements OnInit {
    k: number;
    x: number;
    y: number;
    xy: string;

    selectData: boolean = false;

    constructor(
        private dialog: MatDialog,
        private httpClient: HttpClient,
        public loadingService: LoadingService,
    ) {
    }

    ngOnInit(): void {
    }

    OpenDetailDialog(step: number) {
        let data = {
            step: '',
            image: [],
            pseudoCode: '',
        }

        switch (step) {
            case 1: {
                data = {
                    step: `Step1. 분류할 데이터 입력\n(X, Y) = (${this.x}, ${this.y})\nK = ${this.k}`,
                    image: [`${environment.appBaseUrl}/1.png`, `${environment.appBaseUrl}/2.png`],
                    pseudoCode: '<div><span class="current-step">Input: X,Y, K // X: training data, Y: class labels of X, K: parameter</span><span>for i = 1, ∈ Xi do</span><span>&nbsp;&nbsp;&nbsp;&nbsp;Compute distance d(Xi, x)</span><span>end for</span><span>Compute Set I containing indices for the K smallest distances d(Xi, x)</span><span>return majority label for {Yi where i ∈ I}</span></div>'
                }
                break;
            }
            case 2: {
                data = {
                    step: 'Step2. 모든 데이터셋과 거리 계산',
                    image: [],
                    pseudoCode: '<div><span>Input: X,Y, K // X: training data, Y: class labels of X, K: parameter</span><span class="current-step">for i = 1, ∈ Xi do</span><span class="current-step">&nbsp;&nbsp;&nbsp;&nbsp;Compute distance d(Xi, x)</span><span class="current-step">end for</span><span>Compute Set I containing indices for the K smallest distances d(Xi, x)</span><span>return majority label for {Yi where i ∈ I}</span></div>'
                }

                for (let i = 0; i < 12; i++) {
                    data.image.push(`${environment.appBaseUrl}/3_${i}.png`);
                }
                break;
            }
            case 3: {
                data = {
                    step: `Step3. 거리가 짧은 순서로 K개 만큼 선택\nK = ${this.k}`,
                    image: [`${environment.appBaseUrl}/4.png`],
                    pseudoCode: '<div><span>Input: X,Y, K // X: training data, Y: class labels of X, K: parameter</span><span>for i = 1, ∈ Xi do</span><span>&nbsp;&nbsp;&nbsp;&nbsp;Compute distance d(Xi, x)</span><span>end for</span><span class="current-step">Compute Set I containing indices for the K smallest distances d(Xi, x)</span><span>return majority label for {Yi where i ∈ I}</span></div>'
                }
                break;
            }
            case 4: {
                data = {
                    step: 'Step4. 선택된 값 중 다수 값으로 분류',
                    image: [`${environment.appBaseUrl}/2.png`, `${environment.appBaseUrl}/5.png`],
                    pseudoCode: '<div><span>Input: X,Y, K // X: training data, Y: class labels of X, K: parameter</span><span>for i = 1, ∈ Xi do</span><span>&nbsp;&nbsp;&nbsp;&nbsp;Compute distance d(Xi, x)</span><span>end for</span><span>Compute Set I containing indices for the K smallest distances d(Xi, x)</span><span class="current-step">return majority label for {Yi where i ∈ I}</span></div>'
                }
                break;
            }
        }

        this.dialog.open(DetailDialogComponent, {
            width: '1080px',
            height: '720px',
            data: data
        });
    }

    dataSelect() {
        this.loadingService.showLoading();
        this.httpClient.get(`${environment.apiBaseUrl}/make?k=${this.k}&x=[${this.x},${this.y}]`)
            .subscribe(rsp => {
                this.selectData = true;
                this.loadingService.hideLoading();
            });
    }

    resetData() {
        this.k = null;
        this.x = null;
        this.y = null;
        this.selectData = false;
    }

    openProblemDialog() {
        this.dialog.open(KnnProblemComponent, {
            width: '1080px',
            height: '720px'
        });
    }
}
