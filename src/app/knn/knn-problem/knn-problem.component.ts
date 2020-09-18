import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-knn-problem',
    templateUrl: './knn-problem.component.html',
    styleUrls: ['./knn-problem.component.scss']
})
export class KnnProblemComponent implements OnInit {
    answer1: string;
    answer2: string;
    answer3: string;
    answer4: string;

    score: number = 0;

    isSubmit: boolean = false;

    constructor() {
    }

    ngOnInit(): void {
    }

    selectAnswer3(event: any) {
        this.answer3 = event.value;
    }

    selectAnswer4(event: any) {
        this.answer4 = event.value;
    }

    submit() {
        if (this.answer1.toLowerCase() === 'k-nearest neighbor' || this.answer1.toLowerCase() === 'k nearest neighbor') {
            this.score += 25;
        }
        if (this.answer2 === '지도학습') {
            this.score += 25;
        }
        if (this.answer3 === '3') {
            this.score += 25;
        }
        if (this.answer4 === '3') {
            this.score += 25;
        }
        this.isSubmit = true;
    }
}
