import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-cnn-problem',
    templateUrl: './cnn-problem.component.html',
    styleUrls: ['./cnn-problem.component.scss']
})
export class CnnProblemComponent implements OnInit {
    answer1: string;
    answer2: string;
    answer3: string;
    answer4: string;
    answer5: string;
    answer6: string;
    answer7: string;
    answer8: string;
    answer9: string;
    answer10: string;
    answer11: string;
    answer12: string;
    
    score: number = 0;
    isSubmit: boolean = false;

    constructor() {
    }

    ngOnInit(): void {
    }

    submit() {
        if (this.answer1.toLowerCase() === 'convolutional neural networks') {
            this.score += 12.5;
        }
        if (this.answer2.trim() === '강화학습') {
            this.score += 12.5;
        }
        if (this.answer3.toLowerCase() === 'feature extraction' && this.answer4.toLowerCase() ==='classification') {
            this.score += 12.5;
        }
        if (this.answer5.toLowerCase() === 'convolution' && this.answer6.toLowerCase() ==='relu' && this.answer7.toLowerCase() ==='pooling') {
            this.score += 12.5;
        }
        if (this.answer8.toLowerCase() === 'filter' || this.answer9.toLowerCase() ==='kernel') {
            this.score += 12.5;
        }
        if (this.answer10 === '3') {
            this.score += 12.5;
        }
        if (this.answer11 === '3') {
            this.score += 12.5;
        }
        if (this.answer12.toLowerCase() === 'padding') {
            this.score += 12.5;
        }

        
        this.isSubmit = true;
    }
}
