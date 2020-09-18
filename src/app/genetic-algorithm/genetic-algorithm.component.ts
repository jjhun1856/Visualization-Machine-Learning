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
            pseudoCode: [],
        }

        switch (step) {
            case 1: {
                data = {
                    steps: ['Step1. 최초 염색체 생성(Initialization)', 'Step2. 세대 적합도 평가(Fitness evaluation)', 'Step3. 우성 염색체 선별(Selection)', 'Step4. 세대 교차(Crossover)와 돌연변이(Mutation)', 'Step5. 다음 세대 생성(Update generation)\n적합도 평가 후 목표 적합도 미달성 시 2번으로, 달성 시 종료한다.'],
                    timeExpand: true,
                    nextGene: null,
                    pseudoCode: ['<div><span class="current-step">generation = 0</span><span class="current-step">initialize population</span><span>while (generation < max_generation)</span><span>&nbsp;&nbsp;evaluate fitness of population members</span><span>&nbsp;&nbsp;for i from 1 to elites</span><span>&nbsp;&nbsp;&nbsp;&nbsp;select best individual</span><span>&nbsp;&nbsp;for i from elites to population-size</span><span>&nbsp;&nbsp;&nbsp;&nbsp;for j from 1 to tournament-size</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;select best parents</span><span>&nbsp;&nbsp;&nbsp;&nbsp;for k from elites to population_size * (1 - mutation_rate)</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;crossover parent -> child</span><span>&nbsp;&nbsp;&nbsp;&nbsp;for k from population_size * (1 - mutation_rate) to population_size</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mutate parent -> child</span><span>&nbsp;&nbsp;&nbsp;&nbsp;insert child into next generation\'s population</span><span>&nbsp;&nbsp;update current population</span><span>&nbsp;&nbsp;generation = generation + 1</span></div>', '<div><span>generation = 0</span><span>initialize population</span><span class="current-step">while (generation < max_generation)</span><span class="current-step">&nbsp;&nbsp;evaluate fitness of population members</span><span>&nbsp;&nbsp;for i from 1 to elites</span><span>&nbsp;&nbsp;&nbsp;&nbsp;select best individual</span><span>&nbsp;&nbsp;for i from elites to population-size</span><span>&nbsp;&nbsp;&nbsp;&nbsp;for j from 1 to tournament-size</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;select best parents</span><span>&nbsp;&nbsp;&nbsp;&nbsp;for k from elites to population_size * (1 - mutation_rate)</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;crossover parent -> child</span><span>&nbsp;&nbsp;&nbsp;&nbsp;for k from population_size * (1 - mutation_rate) to population_size</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mutate parent -> child</span><span>&nbsp;&nbsp;&nbsp;&nbsp;insert child into next generation\'s population</span><span>&nbsp;&nbsp;update current population</span><span>&nbsp;&nbsp;generation = generation + 1</span></div>', '<div><span>generation = 0</span><span>initialize population</span><span>while (generation < max_generation)</span><span>&nbsp;&nbsp;evaluate fitness of population members</span><span class="current-step">&nbsp;&nbsp;for i from 1 to elites</span><span class="current-step">&nbsp;&nbsp;&nbsp;&nbsp;select best individual</span><span>&nbsp;&nbsp;for i from elites to population-size</span><span>&nbsp;&nbsp;&nbsp;&nbsp;for j from 1 to tournament-size</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;select best parents</span><span>&nbsp;&nbsp;&nbsp;&nbsp;for k from elites to population_size * (1 - mutation_rate)</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;crossover parent -> child</span><span>&nbsp;&nbsp;&nbsp;&nbsp;for k from population_size * (1 - mutation_rate) to population_size</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mutate parent -> child</span><span>&nbsp;&nbsp;&nbsp;&nbsp;insert child into next generation\'s population</span><span>&nbsp;&nbsp;update current population</span><span>&nbsp;&nbsp;generation = generation + 1</span></div>', '<div><span>generation = 0</span><span>initialize population</span><span>while (generation < max_generation)</span><span>&nbsp;&nbsp;evaluate fitness of population members</span><span>&nbsp;&nbsp;for i from 1 to elites</span><span>&nbsp;&nbsp;&nbsp;&nbsp;select best individual</span><span class="current-step">&nbsp;&nbsp;for i from elites to population-size</span><span class="current-step">&nbsp;&nbsp;&nbsp;&nbsp;for j from 1 to tournament-size</span><span class="current-step">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;select best parents</span><span class="current-step">&nbsp;&nbsp;&nbsp;&nbsp;for k from elites to population_size * (1 - mutation_rate)</span><span class="current-step">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;crossover parent -> child</span><span class="current-step">&nbsp;&nbsp;&nbsp;&nbsp;for k from population_size * (1 - mutation_rate) to population_size</span><span class="current-step">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mutate parent -> child</span><span class="current-step">&nbsp;&nbsp;&nbsp;&nbsp;insert child into next generation\'s population</span><span>&nbsp;&nbsp;update current population</span><span>&nbsp;&nbsp;generation = generation + 1</span></div>', '<div><span>generation = 0</span><span>initialize population</span><span>while (generation < max_generation)</span><span>&nbsp;&nbsp;evaluate fitness of population members</span><span>&nbsp;&nbsp;for i from 1 to elites</span><span>&nbsp;&nbsp;&nbsp;&nbsp;select best individual</span><span>&nbsp;&nbsp;for i from elites to population-size</span><span>&nbsp;&nbsp;&nbsp;&nbsp;for j from 1 to tournament-size</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;select best parents</span><span>&nbsp;&nbsp;&nbsp;&nbsp;for k from elites to population_size * (1 - mutation_rate)</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;crossover parent -> child</span><span>&nbsp;&nbsp;&nbsp;&nbsp;for k from population_size * (1 - mutation_rate) to population_size</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mutate parent -> child</span><span>&nbsp;&nbsp;&nbsp;&nbsp;insert child into next generation\'s population</span><span class="current-step">&nbsp;&nbsp;update current population</span><span class="current-step">&nbsp;&nbsp;generation = generation + 1</span></div>']
                }
                break;
            }
            case 2: {
                data = {
                    steps: ['Step2. 세대 적합도 평가(Fitness evaluation)', 'Step3. 우성 염색체 선별(Selection)', 'Step4. 세대 교차(Crossover)와 돌연변이(Mutation)', 'Step5. 다음 세대 생성(Update generation)\n적합도 평가 후 목표 적합도 미달성 시 2번으로, 달성 시 종료한다.'],
                    timeExpand: true,
                    nextGene: true,
                    pseudoCode: ['<div><span>generation = 0</span><span>initialize population</span><span class="current-step">while (generation < max_generation)</span><span class="current-step">&nbsp;&nbsp;evaluate fitness of population members</span><span>&nbsp;&nbsp;for i from 1 to elites</span><span>&nbsp;&nbsp;&nbsp;&nbsp;select best individual</span><span>&nbsp;&nbsp;for i from elites to population-size</span><span>&nbsp;&nbsp;&nbsp;&nbsp;for j from 1 to tournament-size</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;select best parents</span><span>&nbsp;&nbsp;&nbsp;&nbsp;for k from elites to population_size * (1 - mutation_rate)</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;crossover parent -> child</span><span>&nbsp;&nbsp;&nbsp;&nbsp;for k from population_size * (1 - mutation_rate) to population_size</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mutate parent -> child</span><span>&nbsp;&nbsp;&nbsp;&nbsp;insert child into next generation\'s population</span><span>&nbsp;&nbsp;update current population</span><span>&nbsp;&nbsp;generation = generation + 1</span></div>', '<div><span>generation = 0</span><span>initialize population</span><span>while (generation < max_generation)</span><span>&nbsp;&nbsp;evaluate fitness of population members</span><span class="current-step">&nbsp;&nbsp;for i from 1 to elites</span><span class="current-step">&nbsp;&nbsp;&nbsp;&nbsp;select best individual</span><span>&nbsp;&nbsp;for i from elites to population-size</span><span>&nbsp;&nbsp;&nbsp;&nbsp;for j from 1 to tournament-size</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;select best parents</span><span>&nbsp;&nbsp;&nbsp;&nbsp;for k from elites to population_size * (1 - mutation_rate)</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;crossover parent -> child</span><span>&nbsp;&nbsp;&nbsp;&nbsp;for k from population_size * (1 - mutation_rate) to population_size</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mutate parent -> child</span><span>&nbsp;&nbsp;&nbsp;&nbsp;insert child into next generation\'s population</span><span>&nbsp;&nbsp;update current population</span><span>&nbsp;&nbsp;generation = generation + 1</span></div>', '<div><span>generation = 0</span><span>initialize population</span><span>while (generation < max_generation)</span><span>&nbsp;&nbsp;evaluate fitness of population members</span><span>&nbsp;&nbsp;for i from 1 to elites</span><span>&nbsp;&nbsp;&nbsp;&nbsp;select best individual</span><span class="current-step">&nbsp;&nbsp;for i from elites to population-size</span><span class="current-step">&nbsp;&nbsp;&nbsp;&nbsp;for j from 1 to tournament-size</span><span class="current-step">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;select best parents</span><span class="current-step">&nbsp;&nbsp;&nbsp;&nbsp;for k from elites to population_size * (1 - mutation_rate)</span><span class="current-step">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;crossover parent -> child</span><span class="current-step">&nbsp;&nbsp;&nbsp;&nbsp;for k from population_size * (1 - mutation_rate) to population_size</span><span class="current-step">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mutate parent -> child</span><span class="current-step">&nbsp;&nbsp;&nbsp;&nbsp;insert child into next generation\'s population</span><span>&nbsp;&nbsp;update current population</span><span>&nbsp;&nbsp;generation = generation + 1</span></div>', '<div><span>generation = 0</span><span>initialize population</span><span>while (generation < max_generation)</span><span>&nbsp;&nbsp;evaluate fitness of population members</span><span>&nbsp;&nbsp;for i from 1 to elites</span><span>&nbsp;&nbsp;&nbsp;&nbsp;select best individual</span><span>&nbsp;&nbsp;for i from elites to population-size</span><span>&nbsp;&nbsp;&nbsp;&nbsp;for j from 1 to tournament-size</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;select best parents</span><span>&nbsp;&nbsp;&nbsp;&nbsp;for k from elites to population_size * (1 - mutation_rate)</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;crossover parent -> child</span><span>&nbsp;&nbsp;&nbsp;&nbsp;for k from population_size * (1 - mutation_rate) to population_size</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mutate parent -> child</span><span>&nbsp;&nbsp;&nbsp;&nbsp;insert child into next generation\'s population</span><span class="current-step">&nbsp;&nbsp;update current population</span><span class="current-step">&nbsp;&nbsp;generation = generation + 1</span></div>']
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
            height: '720px'
        })
    }
}
