import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-genetic-algorithm-problem',
    templateUrl: './genecit-algorithm-problem.component.html',
    styleUrls: ['./genecit-algorithm-problem.component.scss']
})
export class GeneticAlgorithmProblemComponent implements OnInit {
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
        if (this.answer1 === '2') {
            this.score += 33;
        }
        if (this.answer2 === '3') {
            this.score += 33;
        }
        if (this.answer3 === '4') {
            this.score += 34;
        }

        this.isSubmit = true;
    }
}
