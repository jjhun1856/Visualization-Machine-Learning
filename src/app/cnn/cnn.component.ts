import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DetailDialogComponent} from '../detail-dialog/detail-dialog.component';
import { ViewEncapsulation } from '@angular/core';

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
            timeExpand: null
        }

        switch (step) {
            case 1: {
                data = {
                    step: `Step1. Input) 컴퓨터는 모든 이미지를 픽셀로 알려진 2차원 숫자의 배열로 인식한다.`,
                    image: ['/assets/result-img/cnn/CNN_01_1.png', '/assets/result-img/cnn/CNN_01_2.png'],
                    timeExpand: true
                }
                break;
            }
            case 2: {
                data = {
                    step: 'Step2. Convolution) 이미지의 특징을 추출하기위해 입력데이터와 필터의 합성곱 연산을 실행해서 특징맵을 출력한다.\n마지막 이미지에 필터 적용해서 추출한 특징맵 예시이다.',
                    image: ['/assets/result-img/cnn/CNN_02_1.png', '/assets/result-img/cnn/CNN_02_1.png', '/assets/result-img/cnn/CNN_02_1.png', '/assets/result-img/cnn/CNN_02_1.png', '/assets/result-img/cnn/CNN_02_1.png', '/assets/result-img/cnn/CNN_02_1.png', '/assets/result-img/cnn/CNN_02_2-0000.jpg', '/assets/result-img/cnn/CNN_02_2-0001.jpg', '/assets/result-img/cnn/CNN_02_2-0002.jpg', '/assets/result-img/cnn/CNN_02_2-0003.jpg', '/assets/result-img/cnn/CNN_02_2-0004.jpg', '/assets/result-img/cnn/CNN_02_2-0005.jpg', '/assets/result-img/cnn/CNN_02_2-0006.jpg', '/assets/result-img/cnn/CNN_02_2-0007.jpg', '/assets/result-img/cnn/CNN_02_2-0008.jpg', '/assets/result-img/cnn/CNN_02_3.png', '/assets/result-img/cnn/CNN_02_3.png', '/assets/result-img/cnn/CNN_02_3.png', '/assets/result-img/cnn/CNN_02_3.png', '/assets/result-img/cnn/CNN_02_3.png', '/assets/result-img/cnn/CNN_02_3.png'],
                    timeExpand: null,
                }
                break;
            }
            case 3: {
                data = {
                    step: 'Step3. Convolution2) 합성곱 과정을 거쳐서 출력되는 특징맵은 항상 입력데이터보다 크기가 작아지므로\n이를 막기위해 패딩을 사용한다.',
                    image: ['/assets/result-img/cnn/CNN_03_1.gif'],
                    timeExpand: null,
                }
                break;
            }
            case 4: {
                data = {
                    step: 'Step4. Relu) 합성곱 과정이 끝나면 비선형 데이터를 만들기 위한 활성화함수 Relu를 적용한다.',
                    image: ['/assets/result-img/cnn/CNN_04_1.png'],
                    timeExpand: null,
                }
                break;
            }
            case 5: {
                data = {
                    step: 'Step5. Pooling) Pooling은 특징맵의 정보는 유지하면서 피쳐 맵의 크기를 줄이는 방법이다.\n주로 Max Pooling을 사용하며 매개변수 및 연산을 줄여 훈련시간을 단축하고 오버핏을 제어할 수 있다.',
                    image: ['/assets/result-img/cnn/CNN_05_1.png'],
                    timeExpand: null,
                }
                break;
            }
            case 6: {
                data = {
                    step: 'Step6. 입력데이터가 Convolution > Relu > pooling 과정을 거쳐 특징맵으로 추출됨\n이 전체 과정을 Feature Extraction이라 하며 가중치 값을 바꿔가며 학습을 여러번 진행한다',
                    image: ['/assets/result-img/cnn/CNN_06/25-08-2020_15-38-16.jpg', '/assets/result-img/cnn/CNN_06/25-08-2020_15-38-17.jpg', '/assets/result-img/cnn/CNN_06/25-08-2020_15-38-18.jpg', 
                    '/assets/result-img/cnn/CNN_06/25-08-2020_15-38-19.jpg', '/assets/result-img/cnn/CNN_06/25-08-2020_15-38-20.jpg', '/assets/result-img/cnn/CNN_06/25-08-2020_15-38-21.jpg', 
                    '/assets/result-img/cnn/CNN_06/25-08-2020_15-38-22.jpg', '/assets/result-img/cnn/CNN_06/25-08-2020_15-38-23.jpg', '/assets/result-img/cnn/CNN_06/25-08-2020_15-38-24.jpg', 
                    '/assets/result-img/cnn/CNN_06/25-08-2020_15-38-25.jpg', '/assets/result-img/cnn/CNN_06/25-08-2020_15-38-26.jpg', '/assets/result-img/cnn/CNN_06/25-08-2020_15-38-27.jpg', 
                    '/assets/result-img/cnn/CNN_06/25-08-2020_15-38-28.jpg', '/assets/result-img/cnn/CNN_06/25-08-2020_15-38-29.jpg', '/assets/result-img/cnn/CNN_06/25-08-2020_15-38-30.jpg', 
                    '/assets/result-img/cnn/CNN_06/25-08-2020_15-38-30.jpg', '/assets/result-img/cnn/CNN_06/25-08-2020_15-38-32.jpg', '/assets/result-img/cnn/CNN_06/25-08-2020_15-38-33.jpg', 
                    '/assets/result-img/cnn/CNN_06/25-08-2020_15-38-34.jpg', '/assets/result-img/cnn/CNN_06/25-08-2020_15-38-35.jpg', '/assets/result-img/cnn/CNN_06/25-08-2020_15-38-36.jpg', 
                    '/assets/result-img/cnn/CNN_06/25-08-2020_15-38-37.jpg', '/assets/result-img/cnn/CNN_06/25-08-2020_15-38-38.jpg', '/assets/result-img/cnn/CNN_06/25-08-2020_15-38-39.jpg', 
                    '/assets/result-img/cnn/CNN_06/25-08-2020_15-38-40.jpg', '/assets/result-img/cnn/CNN_06/25-08-2020_15-38-41.jpg', '/assets/result-img/cnn/CNN_06/25-08-2020_15-38-42.jpg', 
                    '/assets/result-img/cnn/CNN_06/25-08-2020_15-38-43.jpg', '/assets/result-img/cnn/CNN_06/25-08-2020_15-38-44.jpg', '/assets/result-img/cnn/CNN_06/25-08-2020_15-38-45.jpg', 
                    '/assets/result-img/cnn/CNN_06/25-08-2020_15-38-46.jpg', '/assets/result-img/cnn/CNN_06/25-08-2020_15-38-47.jpg', '/assets/result-img/cnn/CNN_06/25-08-2020_15-38-48.jpg', 
                    '/assets/result-img/cnn/CNN_06/25-08-2020_15-38-49.jpg', '/assets/result-img/cnn/CNN_06/25-08-2020_15-38-50.jpg', '/assets/result-img/cnn/CNN_06/25-08-2020_15-38-51.jpg',
                    '/assets/result-img/cnn/CNN_06/25-08-2020_15-38-52.jpg', '/assets/result-img/cnn/CNN_06/25-08-2020_15-38-53.jpg', '/assets/result-img/cnn/CNN_06/25-08-2020_15-38-54.jpg',
                    '/assets/result-img/cnn/CNN_06/25-08-2020_15-38-55.jpg', '/assets/result-img/cnn/CNN_06/25-08-2020_15-38-56.jpg', '/assets/result-img/cnn/CNN_06/25-08-2020_15-38-57.jpg',
                    '/assets/result-img/cnn/CNN_06/25-08-2020_15-38-58.jpg', '/assets/result-img/cnn/CNN_06/25-08-2020_15-38-59.jpg', '/assets/result-img/cnn/CNN_06/25-08-2020_15-39-00.jpg',
                    '/assets/result-img/cnn/CNN_06/25-08-2020_15-39-01.jpg', '/assets/result-img/cnn/CNN_06/25-08-2020_15-39-02.jpg', '/assets/result-img/cnn/CNN_06/25-08-2020_15-39-03.jpg',
                    '/assets/result-img/cnn/CNN_06/25-08-2020_15-39-04.jpg' ],

                    timeExpand: null,
                }
                break;
            }
            case 7: {
                data = {
                    step: 'Step7. 여러번의 Feature Extraction의 학습이 끝난 후 추출한 특징을 바탕으로 Classification을 진행\nClassification을 진행하기 위해 다차원 배열을 1차원 데이터로 평면화(Flatten)',
                    image: ['/assets/result-img/cnn/CNN_07_1.png'],
                    timeExpand: null,
                }
                break;
            }
            case 8: {
                data = {
                    step: 'Step8. 평탄화 된 데이터를 전결합층(Fully Connected Layer) Softmax회귀를 사용하여 분류',
                    image: ['/assets/result-img/cnn/CNN_08_1.png'],
                    timeExpand: null,
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
}
