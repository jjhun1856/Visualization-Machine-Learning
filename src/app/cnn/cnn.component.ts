import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DetailDialogComponent} from '../detail-dialog/detail-dialog.component';
import { ViewEncapsulation } from '@angular/core';
import {CnnProblemComponent} from './cnn-problem/cnn-problem.component';

@Component({
    selector: 'app-cnn',
    templateUrl: './cnn.component.html',
    styleUrls: ['./cnn.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class CnnComponent implements OnInit {

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
            timeExpand: null,
            filter: null,
            gifImg: null,
            pseudoCode: '',
        }

        switch (step) {
            case 1: {
                data = {
                    step: `Step1. Input) 컴퓨터는 모든 이미지를 픽셀로 알려진 2차원 숫자의 배열로 인식한다.`,
                    image: ['/assets/result-img/cnn/CNN_01_1.png', '/assets/result-img/cnn/CNN_01_2.png'],
                    timeExpand: true,
                    filter: null,
                    gifImg: null,
                    pseudoCode: '<div><span class="current-step">Input : img</span><span class="current-step">Convert img to Binary input[W][H][D]</span><span>for (w = 0; w < W ; w++) &#123;</span><span>&nbsp;&nbsp;for (h = 0; h < H ; h++) &#123;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;for (d = 0; d < D ; D++) &#123;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sum = bias[l];</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (k = 0;k < K ;k ++) &#123;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (s1 = 0; s1 < S1; s1++) &#123;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (s2 = 0; s2 < S2; s2 ++) &#123;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sum+=weight[k][w][s1][s2] × input[k][h + s1][d + s2];</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;output[w][h][d] = sum;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;}}}</span><span>for (w = 0; w < W; w++) &#123;</span><span>&nbsp;&nbsp;for (h = 0; h < H; h++) &#123;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;for (d = 0; d < D; D++) &#123;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if(output[w][h][d] < 0) relu[w][h][d] = 0;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else relu[w][h][d] = output[w][h][d];</span><span>&nbsp;&nbsp;&nbsp;&nbsp;}}}</span><span>MaxPooling = [output, pool_size]</span><span>for feature_map in range (len(relu)):</span><span>&nbsp;&nbsp;for i in range (0, len(relu[feature_map]) - pool_size[0], pool_size[0]):</span><span>&nbsp;&nbsp;&nbsp;&nbsp;for j in range (0, len(relu[feature_map]) - pool_size[0], pool_size[0]): </span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pooling[-1].append(np.array(max((relu[feature_map][j:j+pool_size[0], i:i+pool_size[0]]).flatten())))</span><span>for (w = 0; w < W; w++) &#123;</span><span>&nbsp;&nbsp;for (h = 0; h < H; h++) &#123;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;flatten[H*w + h] = pooling[w][h]</span><span>&nbsp;&nbsp;}}</span><span>for (i = 0; i < W; i++) &#123;</span><span>&nbsp;&nbsp;sum = bias[i];</span><span>&nbsp;&nbsp;for (j = 0; j < H; j++) &#123;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;sum + = weight[i][j] × flatten[j];</span><span>&nbsp;&nbsp;}</span><span>&nbsp;&nbsp;result[i] = activation_func_softmax(sum);</span><span>}</span></div>'
                }
                break;
            }
            case 2: {
                data = {
                    step: 'Step2. Convolution) 이미지의 특징을 추출하기위해 입력데이터와 필터의 합성곱 연산을 실행해서 특징맵을 출력한다.\n',
                    image: ['/assets/result-img/cnn/CNN_02_1.png', '', '/assets/result-img/cnn/original.png'],
                    timeExpand: true,
                    filter: true,
                    gifImg: ['/assets/result-img/cnn/CNN_02_2.gif'],
                    pseudoCode: '<div><span>Input : img</span><span>Convert img to Binary input[W][H][D]</span><span class="current-step">for (w = 0; w < W ; w++) &#123;</span><span class="current-step">&nbsp;&nbsp;for (h = 0; h < H ; h++) &#123;</span><span class="current-step">&nbsp;&nbsp;&nbsp;&nbsp;for (d = 0; d < D ; D++) &#123;</span><span class="current-step">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sum = bias[l];</span><span class="current-step">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (k = 0;k < K ;k ++) &#123;</span><span class="current-step">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (s1 = 0; s1 < S1; s1++) &#123;</span><span class="current-step">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (s2 = 0; s2 < S2; s2 ++) &#123;</span><span class="current-step">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sum+=weight[k][w][s1][s2] × input[k][h + s1][d + s2];</span><span class="current-step">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;output[w][h][d] = sum;</span><span class="current-step">&nbsp;&nbsp;&nbsp;&nbsp;}}}</span><span>for (w = 0; w < W; w++) &#123;</span><span>&nbsp;&nbsp;for (h = 0; h < H; h++) &#123;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;for (d = 0; d < D; D++) &#123;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if(output[w][h][d] < 0) relu[w][h][d] = 0;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else relu[w][h][d] = output[w][h][d];</span><span>&nbsp;&nbsp;&nbsp;&nbsp;}}}</span><span>MaxPooling = [output, pool_size]</span><span>for feature_map in range (len(relu)):</span><span>&nbsp;&nbsp;for i in range (0, len(relu[feature_map]) - pool_size[0], pool_size[0]):</span><span>&nbsp;&nbsp;&nbsp;&nbsp;for j in range (0, len(relu[feature_map]) - pool_size[0], pool_size[0]): </span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pooling[-1].append(np.array(max((relu[feature_map][j:j+pool_size[0], i:i+pool_size[0]]).flatten())))</span><span>for (w = 0; w < W; w++) &#123;</span><span>&nbsp;&nbsp;for (h = 0; h < H; h++) &#123;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;flatten[H*w + h] = pooling[w][h]</span><span>&nbsp;&nbsp;}}</span><span>for (i = 0; i < W; i++) &#123;</span><span>&nbsp;&nbsp;sum = bias[i];</span><span>&nbsp;&nbsp;for (j = 0; j < H; j++) &#123;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;sum + = weight[i][j] × flatten[j];</span><span>&nbsp;&nbsp;}</span><span>&nbsp;&nbsp;result[i] = activation_func_softmax(sum);</span><span>}</span></div>'
                }
                break;
            }
            case 3: {
                data = {
                    step: 'Convolution2) 합성곱 과정을 거쳐서 출력되는 특징맵은 항상 입력데이터보다 크기가 작아지므로\n이를 막기위해 패딩을 사용한다.',
                    image: ['/assets/result-img/cnn/CNN_03_1.gif'],
                    timeExpand: null,
                    filter: null,
                    gifImg: null,
                    pseudoCode: null
                }
                break;
            }
            case 4: {
                data = {
                    step: 'Step3. Relu) 합성곱 과정이 끝나면 비선형 데이터를 만들기 위한 활성화함수 Relu를 적용한다.',
                    image: ['/assets/result-img/cnn/CNN_04_1.png'],
                    timeExpand: null,
                    filter: null,
                    gifImg: null,
                    pseudoCode: '<div><span>Input : img</span><span>Convert img to Binary input[W][H][D]</span><span>for (w = 0; w < W ; w++) &#123;</span><span>&nbsp;&nbsp;for (h = 0; h < H ; h++) &#123;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;for (d = 0; d < D ; D++) &#123;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sum = bias[l];</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (k = 0;k < K ;k ++) &#123;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (s1 = 0; s1 < S1; s1++) &#123;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (s2 = 0; s2 < S2; s2 ++) &#123;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sum+=weight[k][w][s1][s2] × input[k][h + s1][d + s2];</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;output[w][h][d] = sum;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;}}}</span><span class="current-step">for (w = 0; w < W; w++) &#123;</span><span class="current-step">&nbsp;&nbsp;for (h = 0; h < H; h++) &#123;</span><span class="current-step">&nbsp;&nbsp;&nbsp;&nbsp;for (d = 0; d < D; D++) &#123;</span><span class="current-step">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if(output[w][h][d] < 0) relu[w][h][d] = 0;</span><span class="current-step">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else relu[w][h][d] = output[w][h][d];</span><span class="current-step">&nbsp;&nbsp;&nbsp;&nbsp;}}}</span><span>MaxPooling = [output, pool_size]</span><span>for feature_map in range (len(relu)):</span><span>&nbsp;&nbsp;for i in range (0, len(relu[feature_map]) - pool_size[0], pool_size[0]):</span><span>&nbsp;&nbsp;&nbsp;&nbsp;for j in range (0, len(relu[feature_map]) - pool_size[0], pool_size[0]): </span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pooling[-1].append(np.array(max((relu[feature_map][j:j+pool_size[0], i:i+pool_size[0]]).flatten())))</span><span>for (w = 0; w < W; w++) &#123;</span><span>&nbsp;&nbsp;for (h = 0; h < H; h++) &#123;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;flatten[H*w + h] = pooling[w][h]</span><span>&nbsp;&nbsp;}}</span><span>for (i = 0; i < W; i++) &#123;</span><span>&nbsp;&nbsp;sum = bias[i];</span><span>&nbsp;&nbsp;for (j = 0; j < H; j++) &#123;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;sum + = weight[i][j] × flatten[j];</span><span>&nbsp;&nbsp;}</span><span>&nbsp;&nbsp;result[i] = activation_func_softmax(sum);</span><span>}</span></div>'
                }
                break;
            }
            case 5: {
                data = {
                    step: 'Step4. Pooling) Pooling은 특징맵의 정보는 유지하면서 피쳐 맵의 크기를 줄이는 방법이다.\n주로 Max Pooling을 사용하며 매개변수 및 연산을 줄여 훈련시간을 단축하고 오버핏을 제어할 수 있다.',
                    image: ['/assets/result-img/cnn/CNN_05_1.png'],
                    timeExpand: null,
                    filter: null,
                    gifImg: null,
                    pseudoCode: '<div><span>Input : img</span><span>Convert img to Binary input[W][H][D]</span><span>for (w = 0; w < W ; w++) &#123;</span><span>&nbsp;&nbsp;for (h = 0; h < H ; h++) &#123;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;for (d = 0; d < D ; D++) &#123;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sum = bias[l];</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (k = 0;k < K ;k ++) &#123;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (s1 = 0; s1 < S1; s1++) &#123;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (s2 = 0; s2 < S2; s2 ++) &#123;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sum+=weight[k][w][s1][s2] × input[k][h + s1][d + s2];</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;output[w][h][d] = sum;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;}}}</span><span>for (w = 0; w < W; w++) &#123;</span><span>&nbsp;&nbsp;for (h = 0; h < H; h++) &#123;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;for (d = 0; d < D; D++) &#123;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if(output[w][h][d] < 0) relu[w][h][d] = 0;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else relu[w][h][d] = output[w][h][d];</span><span>&nbsp;&nbsp;&nbsp;&nbsp;}}}</span><span class="current-step">MaxPooling = [output, pool_size]</span><span class="current-step">for feature_map in range (len(relu)):</span><span class="current-step">&nbsp;&nbsp;for i in range (0, len(relu[feature_map]) - pool_size[0], pool_size[0]):</span><span class="current-step">&nbsp;&nbsp;&nbsp;&nbsp;for j in range (0, len(relu[feature_map]) - pool_size[0], pool_size[0]): </span><span class="current-step">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pooling[-1].append(np.array(max((relu[feature_map][j:j+pool_size[0], i:i+pool_size[0]]).flatten())))</span><span>for (w = 0; w < W; w++) &#123;</span><span>&nbsp;&nbsp;for (h = 0; h < H; h++) &#123;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;flatten[H*w + h] = pooling[w][h]</span><span>&nbsp;&nbsp;}}</span><span>for (i = 0; i < W; i++) &#123;</span><span>&nbsp;&nbsp;sum = bias[i];</span><span>&nbsp;&nbsp;for (j = 0; j < H; j++) &#123;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;sum + = weight[i][j] × flatten[j];</span><span>&nbsp;&nbsp;}</span><span>&nbsp;&nbsp;result[i] = activation_func_softmax(sum);</span><span>}</span></div>'
                    }
                break;
            }
            case 6: {
                data = {
                    step: '입력데이터가 Convolution > Relu > pooling 과정을 거쳐 특징맵으로 추출됨\n이 전체 과정을 Feature Extraction이라 하며 가중치 값을 바꿔가며 학습을 여러번 진행한다',
                    image: ['/assets/result-img/cnn/CNN_06/cnn.gif'],
                    timeExpand: null,
                    filter: null,
                    gifImg: null,
                    pseudoCode: null
                }
                break;
            }
            case 7: {
                data = {
                    step: 'Step5. 여러번의 Feature Extraction의 학습이 끝난 후 추출한 특징을 바탕으로 Classification을 진행\nClassification을 진행하기 위해 다차원 배열을 1차원 데이터로 평면화(Flatten)',
                    image: ['/assets/result-img/cnn/CNN_07_1.png'],
                    timeExpand: null,
                    filter: null,
                    gifImg: null,
                    pseudoCode: '<div><span>Input : img</span><span>Convert img to Binary input[W][H][D]</span><span>for (w = 0; w < W ; w++) &#123;</span><span>&nbsp;&nbsp;for (h = 0; h < H ; h++) &#123;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;for (d = 0; d < D ; D++) &#123;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sum = bias[l];</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (k = 0;k < K ;k ++) &#123;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (s1 = 0; s1 < S1; s1++) &#123;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (s2 = 0; s2 < S2; s2 ++) &#123;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sum+=weight[k][w][s1][s2] × input[k][h + s1][d + s2];</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;output[w][h][d] = sum;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;}}}</span><span>for (w = 0; w < W; w++) &#123;</span><span>&nbsp;&nbsp;for (h = 0; h < H; h++) &#123;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;for (d = 0; d < D; D++) &#123;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if(output[w][h][d] < 0) relu[w][h][d] = 0;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else relu[w][h][d] = output[w][h][d];</span><span>&nbsp;&nbsp;&nbsp;&nbsp;}}}</span><span>MaxPooling = [output, pool_size]</span><span>for feature_map in range (len(relu)):</span><span>&nbsp;&nbsp;for i in range (0, len(relu[feature_map]) - pool_size[0], pool_size[0]):</span><span>&nbsp;&nbsp;&nbsp;&nbsp;for j in range (0, len(relu[feature_map]) - pool_size[0], pool_size[0]): </span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pooling[-1].append(np.array(max((relu[feature_map][j:j+pool_size[0], i:i+pool_size[0]]).flatten())))</span><span class="current-step">for (w = 0; w < W; w++) &#123;</span><span class="current-step">&nbsp;&nbsp;for (h = 0; h < H; h++) &#123;</span><span class="current-step">&nbsp;&nbsp;&nbsp;&nbsp;flatten[H*w + h] = pooling[w][h]</span><span class="current-step">&nbsp;&nbsp;}}</span><span>for (i = 0; i < W; i++) &#123;</span><span>&nbsp;&nbsp;sum = bias[i];</span><span>&nbsp;&nbsp;for (j = 0; j < H; j++) &#123;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;sum + = weight[i][j] × flatten[j];</span><span>&nbsp;&nbsp;}</span><span>&nbsp;&nbsp;result[i] = activation_func_softmax(sum);</span><span>}</span></div>'
                }
                break;
            }
            case 8: {
                data = {
                    step: 'Step6. 평탄화 된 데이터를 전결합층(Fully Connected Layer) Softmax회귀를 사용하여 분류',
                    image: ['/assets/result-img/cnn/CNN_08_1.png'],
                    timeExpand: null,
                    filter: null,
                    gifImg: null,
                    pseudoCode: '<div><span>Input : img</span><span>Convert img to Binary input[W][H][D]</span><span>for (w = 0; w < W ; w++) &#123;</span><span>&nbsp;&nbsp;for (h = 0; h < H ; h++) &#123;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;for (d = 0; d < D ; D++) &#123;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sum = bias[l];</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (k = 0;k < K ;k ++) &#123;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (s1 = 0; s1 < S1; s1++) &#123;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (s2 = 0; s2 < S2; s2 ++) &#123;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sum+=weight[k][w][s1][s2] × input[k][h + s1][d + s2];</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;output[w][h][d] = sum;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;}}}</span><span>for (w = 0; w < W; w++) &#123;</span><span>&nbsp;&nbsp;for (h = 0; h < H; h++) &#123;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;for (d = 0; d < D; D++) &#123;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if(output[w][h][d] < 0) relu[w][h][d] = 0;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else relu[w][h][d] = output[w][h][d];</span><span>&nbsp;&nbsp;&nbsp;&nbsp;}}}</span><span>MaxPooling = [output, pool_size]</span><span>for feature_map in range (len(relu)):</span><span>&nbsp;&nbsp;for i in range (0, len(relu[feature_map]) - pool_size[0], pool_size[0]):</span><span>&nbsp;&nbsp;&nbsp;&nbsp;for j in range (0, len(relu[feature_map]) - pool_size[0], pool_size[0]): </span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pooling[-1].append(np.array(max((relu[feature_map][j:j+pool_size[0], i:i+pool_size[0]]).flatten())))</span><span>for (w = 0; w < W; w++) &#123;</span><span>&nbsp;&nbsp;for (h = 0; h < H; h++) &#123;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;flatten[H*w + h] = pooling[w][h]</span><span>&nbsp;&nbsp;}}</span><span class="current-step">for (i = 0; i < W; i++) &#123;</span><span class="current-step">&nbsp;&nbsp;sum = bias[i];</span><span class="current-step">&nbsp;&nbsp;for (j = 0; j < H; j++) &#123;</span><span class="current-step">&nbsp;&nbsp;&nbsp;&nbsp;sum + = weight[i][j] × flatten[j];</span><span class="current-step">&nbsp;&nbsp;}</span><span class="current-step">&nbsp;&nbsp;result[i] = activation_func_softmax(sum);</span><span class="current-step">}</span></div>'
                }
                break;
            }
        }

        this.dialog.open(DetailDialogComponent, {
            minWidth: '1080px',
            height: '720px',
            data: data
        });
    }

    openProblemDialog() {
        this.dialog.open(CnnProblemComponent, {
            width: '1080px',
            height: '720px'
        });
    }
}
