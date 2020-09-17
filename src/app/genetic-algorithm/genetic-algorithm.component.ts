import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {GeneticAlgorithmProblemComponent} from './genetic-algorithm-problem/genetic-algorithm-problem.component';
import {DetailDialogComponent} from '../detail-dialog/detail-dialog.component';

@Component({
    selector: 'app-genetic-algorithm',
    templateUrl: './genetic-algorithm.component.html',
    styleUrls: ['./genetic-algorithm.component.scss']
})
export class GeneticAlgorithmComponent implements OnInit {

    constructor(
        private dialog: MatDialog,
    ) {
    }

    ngOnInit(): void {
    }

    OpenDetailDialog(step: number) {
        let data = {
            steps: [],
            timeExpand: null,
            nextGene: null,
        }

        switch (step) {
            case 1: {
                data = {
                    steps: ['Step1. 최초 염색체 생성(Initialization)', 'Step2. 세대 적합도 평가(Fitness evaluation)', 'Step3. 우성 염색체 선별(Selection)', 'Step4. 세대 교차(Crossover)와 돌연변이(Mutation)', 'Step5. 다음 세대 생성(Update generation)\n적합도 평가 후 목표 적합도 미달성 시 2번으로, 달성 시 종료한다.'],
                    timeExpand: true,
                    nextGene: null
                }
                break;
            }
            case 2: {
                data = {
                    steps: ['Step2. 세대 적합도 평가(Fitness evaluation)', 'Step3. 우성 염색체 선별(Selection)', 'Step4. 세대 교차(Crossover)와 돌연변이(Mutation)', 'Step5. 다음 세대 생성(Update generation)\n적합도 평가 후 목표 적합도 미달성 시 2번으로, 달성 시 종료한다.'],
                    timeExpand: true,
                    nextGene: true
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

    openProblemDialog() {
        this.dialog.open(GeneticAlgorithmProblemComponent, {
            width: '1080px',
            height: '640px'
        })
    }
}
