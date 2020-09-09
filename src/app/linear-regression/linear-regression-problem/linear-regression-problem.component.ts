import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-linear-regression-problem',
    templateUrl: './linear-regression-problem.component.html',
    styleUrls: ['./linear-regression-problem.component.scss']
})
export class LinearRegressionProblemComponent implements OnInit {
    answer1: string;
    answer2: string;
    answer3: string;

    score: number = 0;

    isSubmit: boolean = false;

    constructor() {
    }

    ngOnInit(): void {
    }

    submit() {
        if (this.answer1 === '1') {
            this.score += 33;
        }
        if (this.answer2.trim() === '단순선형회귀' || this.answer2.toLowerCase() === 'simple linear regression') {
            this.score += 33;
        }
        if (this.answer3.trim() === '최소제곱법' || this.answer3.toLowerCase() === 'methods of least squares') {
            this.score += 34;
        }

        this.isSubmit = true;
    }
}
