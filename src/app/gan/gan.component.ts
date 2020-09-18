import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DetailDialogComponent} from '../detail-dialog/detail-dialog.component';
import {GanProblemComponent} from './gan-problem/gan-problem.component';

@Component({
    selector: 'app-gan',
    templateUrl: './gan.component.html',
    styleUrls: ['./gan.component.scss']
})
export class GanComponent implements OnInit {
    arr_D_loss = [-0.4298, -0.1712, -0.1334, -0.6033, -0.3432, -0.3686, -0.2794, -0.3925, -0.1858, -0.4699, -0.4642, -0.5489, -0.2868, -0.4922, -0.4625, -0.4018, -0.2557, -0.3342, -0.6281, -0.3486, -0.5028, -0.4242, -0.3221, -0.3047, -0.4947, -0.37, -0.5315, -0.4593, -0.6194, -0.4762, -0.4682, -0.611, -0.5726, -0.4993, -0.457, -0.4585, -0.6244, -0.6004, -0.6396, -0.6275, -0.6609, -0.4591, -0.698, -0.6064, -0.8197, -0.6026, -0.6733, -0.6438, -0.7465, -0.4977, -0.7514, -0.8642, -0.7767, -0.6728, -0.6277, -0.666, -0.7833, -0.7492, -0.6909, -0.6742, -0.6282, -0.6908, -0.876, -0.7595, -0.663, -0.7574, -0.794, -0.8702, -0.6194, -0.7694, -0.8459, -0.7842, -0.7413, -0.8866, -0.698, -0.8913, -0.7055, -0.7438, -0.7748, -0.819, -0.6697, -0.7679, -0.7848, -0.8181, -0.8655, -0.7473, -0.7116, -0.7313, -0.7649, -0.7776, -0.7636, -0.7039, -0.7601, -0.6779, -0.743, -0.7323, -0.7376, -0.6617, -0.6329, -0.7143];
    arr_G_loss = [-2.012, -2.881, -3.188, -1.566, -2.077, -2.167, -2.474, -2.221, -2.565, -2.07, -2.0, -2.296, -2.5, -1.887, -2.456, -2.584, -2.785, -2.618, -2.34, -2.714, -2.512, -2.437, -2.697, -2.573, -2.683, -2.793, -2.493, -2.39, -2.693, -2.426, -2.644, -2.34, -2.566, -2.481, -2.629, -2.542, -2.501, -2.37, -2.365, -2.304, -2.372, -2.273, -1.986, -2.625, -2.069, -2.176, -2.216, -2.204, -2.006, -2.189, -2.016, -1.896, -1.795, -1.946, -1.922, -2.127, -1.997, -2.18, -2.001, -2.017, -2.079, -2.223, -1.746, -2.115, -1.725, -1.948, -1.844, -1.904, -1.773, -2.006, -1.909, -1.821, -2.094, -1.716, -1.907, -1.84, -2.117, -2.052, -1.758, -1.763, -1.943, -1.85, -1.786, -1.791, -1.969, -1.87, -1.934, -1.967, -1.889, -1.938, -1.954, -2.076, -1.912, -1.933, -2.059, -1.786, -2.163, -1.936, -1.975, -2.03];

    constructor(
        private dialog: MatDialog,
    ) {
    }

    ngOnInit(): void {
    }

    OpenDetailDialog(step: number) {
        let data = {
            step: '',
            image: [],
            logTxt: [],
            pseudoCode: '',
            linearTxt: [],
        }

        switch (step) {
            case 1: {
                data = {
                    step: `Step1. GAN 구조 정의하기(learning rate, epoch, batch size, noise 입력)`,
                    image: [],
                    logTxt: null,
                    linearTxt: ['learning rate = 0.001, epoch = 100, batch size = 64, noise = 100'],
                    pseudoCode: '<div><span class="current-step">define architecture of GAN</span><span>for i from 1 to n</span><span>&nbsp;&nbsp;&nbsp;&nbsp;train discriminator on real data</span><span>&nbsp;&nbsp;&nbsp;&nbsp;generate fake inputs for generator</span><span>&nbsp;&nbsp;&nbsp;&nbsp;train discriminator on fake data</span><span>&nbsp;&nbsp;&nbsp;&nbsp;train generator with the ouput of discriminator</span><span>&nbsp;&nbsp;&nbsp;&nbsp;if fake data == legit</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;stop</span></div>'
                }
                break;
            }
            case 2: {
                data = {
                    step: 'Step2. 모델 훈련하기\n\nEpoch: 학습 횟수\nD(iscriminator) loss: 작을수록 좋음\n G(enerator) loss: 클수록 성능 높음',
                    image: [],
                    logTxt: [],
                    linearTxt: null,
                    pseudoCode: '<div><span>define architecture of GAN</span><span class="current-step">for i from 1 to n</span><span class="current-step">&nbsp;&nbsp;&nbsp;&nbsp;train discriminator on real data</span><span class="current-step">&nbsp;&nbsp;&nbsp;&nbsp;generate fake inputs for generator</span><span class="current-step">&nbsp;&nbsp;&nbsp;&nbsp;train discriminator on fake data</span><span class="current-step">&nbsp;&nbsp;&nbsp;&nbsp;train generator with the ouput of discriminator</span><span class="current-step">&nbsp;&nbsp;&nbsp;&nbsp;if fake data == legit</span><span class="current-step">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;stop</span></div>'
                }

                for (let i = 0; i < 100; i++) {
                    if (i < 10) {
                        data.image.push('/assets/result-img/gan/00' + i + '.png');
                        data.logTxt.push({
                            epoch: '000' + i,
                            D_loss: this.arr_D_loss[i],
                            G_loss: this.arr_G_loss[i],
                        })
                    } else {
                        data.image.push('/assets/result-img/gan/0' + i + '.png');
                        data.logTxt.push({
                            epoch: '00' + i,
                            D_loss: this.arr_D_loss[i],
                            G_loss: this.arr_G_loss[i],
                        })
                    }
                }
                break;
            }
        }

        this.dialog.open(DetailDialogComponent, {
            width: '1080px',
            height: '640px',
            data: data
        });
    }

    openProblemDialog() {
        this.dialog.open(GanProblemComponent, {
            width: '1080px',
            height: '720px'
        });
    }
}
