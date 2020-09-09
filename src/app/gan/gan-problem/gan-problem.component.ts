import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-gan-problem',
    templateUrl: './gan-problem.component.html',
    styleUrls: ['./gan-problem.component.scss']
})
export class GanProblemComponent implements OnInit {
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

    submit() {
        if (this.answer1 === '2') {
            this.score += 25;
        }
        if (this.answer2 == '2') {
            this.score += 25;
        }
        if (this.answer3.trim() === '분류기' || this.answer3.toLowerCase() === 'discriminator') {
            this.score += 25;
        }
        if (this.answer3 == '1') {
            this.score += 25;
        }

        this.isSubmit = true;
    }
}
