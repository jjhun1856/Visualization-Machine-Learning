import {Component, OnInit} from '@angular/core';
import * as tf from '@tensorflow/tfjs';
import * as tfvis from '@tensorflow/tfjs-vis';
import $ from 'jquery';
import {DetailDialogComponent} from '../detail-dialog/detail-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import { ViewEncapsulation } from '@angular/core';
import {LinearRegressionProblemComponent} from './linear-regression-problem/linear-regression-problem.component';


@Component({
  selector: 'app-linear-regression',
  templateUrl: './linear-regression.component.html',
  styleUrls: ['./linear-regression.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class LinearRegressionComponent implements OnInit {
  arr_Case1_1_x = [73.84701702, 68.78190405, 74.11010539, 71.7309784, 69.88179586, 67.25301569, 68.78508125, 68.34851551, 67.01894966, 63.45649398, 71.19538228, 71.64080512, 64.76632913, 69.2830701, 69.24373223, 58.91073204, 65.23001251, 63.36900376, 64.47999743, 61.79309615, 65.96801895, 62.85037864, 65.65215644, 61.89023374, 63.67786815, 68.10117224, 61.79887853, 63.37145896, 58.89588635, 58.4382491];
  arr_Case1_1_y = [241.8935632, 162.3104725, 212.7408556, 220.0424703, 206.3498006, 152.2121558, 183.9278886, 167.9711105, 175.9294404, 156.3996764, 186.6049256, 213.7411695, 167.1274611, 189.4461814, 186.434168, 102.0883264, 141.3058226, 131.0414027, 128.1715112, 129.781407, 156.8020826, 114.9690383, 165.0830012, 111.6761992, 104.1515596, 166.5756608, 106.233687, 128.1181691, 101.6826134, 98.19262093];
  arr_Case1_3_W = [0.000000, 15.712007, 12.272739, 11.833617, 9.938601, 11.138943, 10.765467, 10.959198, 9.975489, 8.129096, 7.841073, 8.014829, 7.418316, 7.418216, 7.418781, 7.812131, 8.013944, 8.173695, 8.420748, 8.293727, 8.303869, 8.544395, 8.494574, 8.660745, 8.949401, 8.924640, 9.073251, 9.098769, 8.919821, 8.773723];
  arr_Case1_3_b = [241.893565, -918.391289, -681.012183, -644.164018, -503.635704, -590.873076, -563.265830, -577.464184, -506.528855, -375.542430, -357.036915, -368.389546, -325.791495, -325.693595, -325.835218, -353.405217, -368.092341, -379.464144, -397.276377, -388.346916, -389.126130, -406.137630, -402.339124, -413.971014, -434.624790, -433.284358, -443.653641, -445.469350, -433.200218, -423.201568];

  arr_Case2_1_x = [69.57720237, 70.40092889, 69.07617117, 67.19352328, 65.80731565, 64.30418789, 67.97433623, 72.18942596, 65.27034552, 66.09017738, 67.51032152, 70.10478626, 68.25183644, 72.17270912, 69.17985762, 63.68506845, 60.28887039, 63.40728979, 60.63160012, 67.37359659, 66.8727416, 60.04714722, 64.15447227, 63.46166489, 67.24386795, 66.21359451, 64.69282138, 66.19928328, 65.85337582, 60.12312382];
  arr_Case2_1_y = [132.2829779, 133.1383556, 130.440809, 139.0011336, 192.0143354, 192.9035151, 146.023295, 109.7196963, 172.1355974, 154.0615748, 149.1185284, 128.8483894, 138.6808136, 114.6035259, 128.9509609, 163.8518249, 209.0708634, 168.6177462, 197.4882426, 183.8109732, 161.1934326, 194.0454049, 180.6983171, 187.0605522, 155.3582484, 163.1080171, 188.9223032, 158.8551942, 164.6602773, 204.1641255];
  arr_Case2_3_W = [0.000000, 1.038424, 1.937455, -2.060211, -11.639271, -11.606041, -11.639243, -10.869771, -10.470088, -10.008076, -9.991004, -9.915734, -9.945133, -9.510935, -9.592851, -8.497019, -8.392581, -8.034731, -7.834480, -7.779396, -7.783267, -7.407999, -7.457716, -7.525883, -7.518828, -7.521222, -7.623897, -7.621983, -7.623234, -7.556105];
  arr_Case2_3_b = [132.282978, 60.032315, -3.057063, 275.997998, 941.630000, 939.334021, 940.955600, 889.513104, 861.465671, 828.603188, 827.097624, 822.163060, 823.645066, 794.621184, 799.705638, 723.576815, 716.386361, 691.413850, 677.639695, 675.648096, 676.182539, 650.480430, 654.029084, 658.822368, 658.457479, 658.712783, 666.153224, 665.933202, 666.039079, 661.478496];

  pattern: string;

  selectData: boolean = false;

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
      linearTxt: [],
      linear: '',
      isStep: '',
      stateNum: '',
      graphData: [],
      pseudoCode: '',
    }

    switch (step) {
      case 1: {
        if (this.pattern === '1') {
          data = {
            step: `Step1. 데이터 입력 받기`,
            image: [],
            linearTxt: null,
            linear: '1',
            isStep: null,
            stateNum: '1',
            graphData: [],
            pseudoCode: '<div><span class="current-step">read number of data (N)</span><span class="current-step">for i from 1 to N</span><span class="current-step">&nbsp;&nbsp;&nbsp;&nbsp;read Xi and Yi</span><span>cacluate mean of X and Y</span><span>for i from 1 to N</span><span>&nbsp;&nbsp;&nbsp;&nbsp;sumX = sumX + Xi</span><span>&nbsp;&nbsp;&nbsp;&nbsp;sumX2 = sumX2 + Xi * Xi</span><span>&nbsp;&nbsp;&nbsp;&nbsp;sumY = sumY + Yi</span><span>&nbsp;&nbsp;&nbsp;&nbsp;sumXY = sumXY + Xi * Yi</span><span>yIntercept = (N * sumXY - sumX * sumY) / (N * sumX2 - sumX * sumX)</span><span>slope = (sumY - yIntercept * sumX) / N</span><span>display predictive linear function of slope and yIntercept</span><span>predict y for x</span></div>'
          }
          for (let i = 0; i < 30; i++) {
            if (i < 10) {
              data.image.push('/assets/result-img/linear-regression/case1/step1/input_00' + i + '.png');
            } else {
              data.image.push('/assets/result-img/linear-regression/case1/step1/input_0' + i + '.png');
            }
            data.graphData.push({
              x: this.arr_Case1_1_x[i],
              y: this.arr_Case1_1_y[i]
            })
          }
        } else if (this.pattern === '2') {
          data = {
            step: `Step1. 데이터 입력 받기`,
            image: [],
            linearTxt: null,
            linear: '1',
            isStep: null,
            stateNum: '1',
            graphData: [],
            pseudoCode: '<div><span class="current-step">read number of data (N)</span><span class="current-step">for i from 1 to N</span><span class="current-step">&nbsp;&nbsp;&nbsp;&nbsp;read Xi and Yi</span><span>cacluate mean of X and Y</span><span>for i from 1 to N</span><span>&nbsp;&nbsp;&nbsp;&nbsp;sumX = sumX + Xi</span><span>&nbsp;&nbsp;&nbsp;&nbsp;sumX2 = sumX2 + Xi * Xi</span><span>&nbsp;&nbsp;&nbsp;&nbsp;sumY = sumY + Yi</span><span>&nbsp;&nbsp;&nbsp;&nbsp;sumXY = sumXY + Xi * Yi</span><span>yIntercept = (N * sumXY - sumX * sumY) / (N * sumX2 - sumX * sumX)</span><span>slope = (sumY - yIntercept * sumX) / N</span><span>display predictive linear function of slope and yIntercept</span><span>predict y for x</span></div>'
          }
          for (let i = 0; i < 30; i++) {
            if (i < 10) {
              data.image.push('/assets/result-img/linear-regression/case2/step1/input_00' + i + '.png');
            } else {
              data.image.push('/assets/result-img/linear-regression/case2/step1/input_0' + i + '.png');
            }
            data.graphData.push({
              x: this.arr_Case2_1_x[i],
              y: this.arr_Case2_1_y[i]
            })
          }
        }
        break;
      }
      case 2: {
        if (this.pattern === '1') {
          data = {
            step: 'Step2. x, y좌표 평균 구하기',
            image: ['/assets/result-img/linear-regression/case1/step2/mean.png'],
            linearTxt: ['x좌표의 평균 = 66.12567728866665', 'y좌표의 평균 = 156.96681471766672'],
            linear: '1',
            isStep: null,
            stateNum: null,
            graphData: null,
            pseudoCode: '<div><span>read number of data (N)</span><span>for i from 1 to N</span><span>&nbsp;&nbsp;&nbsp;&nbsp;read Xi and Yi</span><span class="current-step">cacluate mean of X and Y</span><span>for i from 1 to N</span><span>&nbsp;&nbsp;&nbsp;&nbsp;sumX = sumX + Xi</span><span>&nbsp;&nbsp;&nbsp;&nbsp;sumX2 = sumX2 + Xi * Xi</span><span>&nbsp;&nbsp;&nbsp;&nbsp;sumY = sumY + Yi</span><span>&nbsp;&nbsp;&nbsp;&nbsp;sumXY = sumXY + Xi * Yi</span><span>yIntercept = (N * sumXY - sumX * sumY) / (N * sumX2 - sumX * sumX)</span><span>slope = (sumY - yIntercept * sumX) / N</span><span>display predictive linear function of slope and yIntercept</span><span>predict y for x</span></div>'
          }
        } else if (this.pattern === '2') {
          data = {
            step: 'Step2. x, y좌표 평균 구하기',
            image: ['/assets/result-img/linear-regression/case2/step2/mean.png'],
            linearTxt: ['x좌표의 평균 = 66.17838811266668', 'y좌표의 평균 = 161.42763437000005'],
            linear: '1',
            isStep: null,
            stateNum: null,
            graphData: null,
            pseudoCode: '<div><span>read number of data (N)</span><span>for i from 1 to N</span><span>&nbsp;&nbsp;&nbsp;&nbsp;read Xi and Yi</span><span class="current-step">cacluate mean of X and Y</span><span>for i from 1 to N</span><span>&nbsp;&nbsp;&nbsp;&nbsp;sumX = sumX + Xi</span><span>&nbsp;&nbsp;&nbsp;&nbsp;sumX2 = sumX2 + Xi * Xi</span><span>&nbsp;&nbsp;&nbsp;&nbsp;sumY = sumY + Yi</span><span>&nbsp;&nbsp;&nbsp;&nbsp;sumXY = sumXY + Xi * Yi</span><span>yIntercept = (N * sumXY - sumX * sumY) / (N * sumX2 - sumX * sumX)</span><span>slope = (sumY - yIntercept * sumX) / N</span><span>display predictive linear function of slope and yIntercept</span><span>predict y for x</span></div>'
          }
        }
        break;
      }
      case 3: {
        if (this.pattern === '1') {
          data = {
            step: 'Step3. 최소제곱법을 이용하여 기울기, y절편 구하기',
            image: [],
            linearTxt: null,
            linear: '1',
            isStep: '3',
            stateNum: '3',
            graphData: [],
            pseudoCode: '<div><span>read number of data (N)</span><span>for i from 1 to N</span><span>&nbsp;&nbsp;&nbsp;&nbsp;read Xi and Yi</span><span>cacluate mean of X and Y</span><span class="current-step">for i from 1 to N</span><span class="current-step">&nbsp;&nbsp;&nbsp;&nbsp;sumX = sumX + Xi</span><span class="current-step">&nbsp;&nbsp;&nbsp;&nbsp;sumX2 = sumX2 + Xi * Xi</span><span class="current-step">&nbsp;&nbsp;&nbsp;&nbsp;sumY = sumY + Yi</span><span class="current-step">&nbsp;&nbsp;&nbsp;&nbsp;sumXY = sumXY + Xi * Yi</span><span class="current-step">slope = (sumY - yIntercept * sumX) / N</span><span>display predictive linear function of slope and yIntercept</span><span>predict y for x</span></div>'
          }

          for (let i = 0; i < 30; i++) {
            if (i < 10) {
              data.image.push('/assets/result-img/linear-regression/case1/step3/distance_00' + i + '.png');
            } else {
              data.image.push('/assets/result-img/linear-regression/case1/step3/distance_0' + i + '.png');
            }
            data.graphData.push({
              W: this.arr_Case1_3_W[i],
              b: this.arr_Case1_3_b[i]
            })
          }
        } else if (this.pattern === '2') {
          data = {
            step: 'Step3. 최소제곱법을 이용하여 기울기, y절편 구하기',
            image: [],
            linearTxt: null,
            linear: '1',
            isStep: '3',
            stateNum: '3',
            graphData: [],
            pseudoCode: '<div><span>read number of data (N)</span><span>for i from 1 to N</span><span>&nbsp;&nbsp;&nbsp;&nbsp;read Xi and Yi</span><span>cacluate mean of X and Y</span><span class="current-step">for i from 1 to N</span><span class="current-step">&nbsp;&nbsp;&nbsp;&nbsp;sumX = sumX + Xi</span><span class="current-step">&nbsp;&nbsp;&nbsp;&nbsp;sumX2 = sumX2 + Xi * Xi</span><span class="current-step">&nbsp;&nbsp;&nbsp;&nbsp;sumY = sumY + Yi</span><span class="current-step">&nbsp;&nbsp;&nbsp;&nbsp;sumXY = sumXY + Xi * Yi</span><span class="current-step">slope = (sumY - yIntercept * sumX) / N</span><span>display predictive linear function of slope and yIntercept</span><span>predict y for x</span></div>'
          }

          for (let i = 0; i < 30; i++) {
            if (i < 10) {
              data.image.push('/assets/result-img/linear-regression/case2/step3/distance_00' + i + '.png');
            } else {
              data.image.push('/assets/result-img/linear-regression/case2/step3/distance_0' + i + '.png');
            }
            data.graphData.push({
              W: this.arr_Case2_3_W[i],
              b: this.arr_Case2_3_b[i]
            })
          }
        }
        break;
      }
      case 4: {
        if (this.pattern === '1') {
          data = {
            step: 'Step4. 예측 선형 함수 그리기',
            image: ['/assets/result-img/linear-regression/case1/step4/output.png'],
            linearTxt: ['y = 8.7737231x - 423.20156773958104'],
            linear: '1',
            isStep: null,
            stateNum: null,
            graphData: null,
            pseudoCode: '<div><span>read number of data (N)</span><span>for i from 1 to N</span><span>&nbsp;&nbsp;&nbsp;&nbsp;read Xi and Yi</span><span>cacluate mean of X and Y</span><span>for i from 1 to N</span><span>&nbsp;&nbsp;&nbsp;&nbsp;sumX = sumX + Xi</span><span>&nbsp;&nbsp;&nbsp;&nbsp;sumX2 = sumX2 + Xi * Xi</span><span>&nbsp;&nbsp;&nbsp;&nbsp;sumY = sumY + Yi</span><span>&nbsp;&nbsp;&nbsp;&nbsp;sumXY = sumXY + Xi * Yi</span><span>yIntercept = (N * sumXY - sumX * sumY) / (N * sumX2 - sumX * sumX)</span><span>slope = (sumY - yIntercept * sumX) / N</span><span class="current-step">display predictive linear function of slope and yIntercept</span><span>predict y for x</span></div>'
          }
        } else if (this.pattern === '2') {
          data = {
            step: 'Step4. 예측 선형 함수 그리기',
            image: ['/assets/result-img/linear-regression/case2/step4/output.png'],
            linearTxt: ['y = -7.556105x + 661.478496'],
            linear: '1',
            isStep: null,
            stateNum: null,
            graphData: null, 
            pseudoCode: '<div><span>read number of data (N)</span><span>for i from 1 to N</span><span>&nbsp;&nbsp;&nbsp;&nbsp;read Xi and Yi</span><span>cacluate mean of X and Y</span><span>for i from 1 to N</span><span>&nbsp;&nbsp;&nbsp;&nbsp;sumX = sumX + Xi</span><span>&nbsp;&nbsp;&nbsp;&nbsp;sumX2 = sumX2 + Xi * Xi</span><span>&nbsp;&nbsp;&nbsp;&nbsp;sumY = sumY + Yi</span><span>&nbsp;&nbsp;&nbsp;&nbsp;sumXY = sumXY + Xi * Yi</span><span>yIntercept = (N * sumXY - sumX * sumY) / (N * sumX2 - sumX * sumX)</span><span>slope = (sumY - yIntercept * sumX) / N</span><span class="current-step">display predictive linear function of slope and yIntercept</span><span>predict y for x</span></div>'
          }
        }
        break;
      }
      case 5: {
        if (this.pattern === '1') {
          data = {
            step: 'Step5. x = 70 값 예측해보기',
            image: ['/assets/result-img/linear-regression/case1/step5/predict.png'],
            linearTxt: ['y = 190.95904939'],
            linear: '1',
            isStep: null,
            stateNum: null,
            graphData: null,
            pseudoCode: '<div><span>read number of data (N)</span><span>for i from 1 to N</span><span>&nbsp;&nbsp;&nbsp;&nbsp;read Xi and Yi</span><span>cacluate mean of X and Y</span><span>for i from 1 to N</span><span>&nbsp;&nbsp;&nbsp;&nbsp;sumX = sumX + Xi</span><span>&nbsp;&nbsp;&nbsp;&nbsp;sumX2 = sumX2 + Xi * Xi</span><span>&nbsp;&nbsp;&nbsp;&nbsp;sumY = sumY + Yi</span><span>&nbsp;&nbsp;&nbsp;&nbsp;sumXY = sumXY + Xi * Yi</span><span>yIntercept = (N * sumXY - sumX * sumY) / (N * sumX2 - sumX * sumX)</span><span>slope = (sumY - yIntercept * sumX) / N</span><span>display predictive linear function of slope and yIntercept</span><span class="current-step">predict y for x</span></div>'
          }
        } else if (this.pattern === '2') {
          data = {
            step: 'Step5. x = 70 값 예측해보기',
            image: ['/assets/result-img/linear-regression/case2/step5/predict.png'],
            linearTxt: ['y = 132.55113299'],
            linear: '1',
            isStep: null,
            stateNum: null,
            graphData: null,
            pseudoCode: '<div><span>read number of data (N)</span><span>for i from 1 to N</span><span>&nbsp;&nbsp;&nbsp;&nbsp;read Xi and Yi</span><span>cacluate mean of X and Y</span><span>for i from 1 to N</span><span>&nbsp;&nbsp;&nbsp;&nbsp;sumX = sumX + Xi</span><span>&nbsp;&nbsp;&nbsp;&nbsp;sumX2 = sumX2 + Xi * Xi</span><span>&nbsp;&nbsp;&nbsp;&nbsp;sumY = sumY + Yi</span><span>&nbsp;&nbsp;&nbsp;&nbsp;sumXY = sumXY + Xi * Yi</span><span>yIntercept = (N * sumXY - sumX * sumY) / (N * sumX2 - sumX * sumX)</span><span>slope = (sumY - yIntercept * sumX) / N</span><span>display predictive linear function of slope and yIntercept</span><span class="current-step">predict y for x</span></div>'
          }
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

  dataChange(event: any) {
    this.pattern = event.value;
  }

  dataSelect() {
    this.selectData = true;
  }

  resetData() {
    this.pattern = null;
    this.selectData = false;
  }

  openProblemDialog() {
    this.dialog.open(LinearRegressionProblemComponent, {
      width: '1080px',
      height: '720px'
    });
  }
}
