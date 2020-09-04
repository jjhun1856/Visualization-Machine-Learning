import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DetailDialogComponent} from '../detail-dialog/detail-dialog.component';
import { ViewEncapsulation } from '@angular/core';
// import * as tf from '@tensorflow/tfjs';

@Component({
  selector: 'app-knn',
  templateUrl: './knn.component.html',
  styleUrls: ['./knn.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class KnnComponent implements OnInit {

  // code: string =
  //   'Read number of data N and number of distances to choose K\n' +
  //   'Read training data X and class labels Y\n' +
  //   ' \n' +
  //   'For i = 1 to N :\n' +
  //   ' Read Xi\n' +
  //   ' Read Yi\n' +
  //   ' Next i\n' +
  //   ' \n' +
  //   'Calculate distance D\n' +
  //   'For i = 1 to N :\n' +
  //   ' Di = (Xi, x)\n' +
  //   ' Next i\n' +
  //   ' \n' +
  //   'Select K distances in ascending order\n' +
  //   'Sort class label of x by majority\n';
  //
  // codeArray: any;
  //
  // canvas: any;

  constructor(
    // private tensorFlowJs
      private dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    // this.codeArray = this.code.split('\n');
    //
    // this.canvas = document.getElementById('flowchart');
    //
    // const svgNS = 'http://www.w3.org/2000/svg';
    //
    // const svg1 = document.createElementNS(svgNS, 'svg');
    // svg1.setAttributeNS(null, 'x', '20');
    // svg1.setAttributeNS(null, 'y', '30');
    // svg1.setAttributeNS(null, 'width', '328');
    // svg1.setAttributeNS(null, 'height', '52');
    //
    // const rect1 = document.createElementNS(svgNS, 'rect');
    // rect1.setAttributeNS(null, 'x', '0');
    // rect1.setAttributeNS(null, 'y', '0');
    // rect1.setAttributeNS(null, 'width', '328');
    // rect1.setAttributeNS(null, 'height', '52');
    // rect1.setAttributeNS(null, 'fill', 'rgba(255, 255, 255, 0.65)');
    // rect1.setAttributeNS(null, 'stroke', 'black');
    // rect1.setAttributeNS(null, 'stroke-width', '2');
    // rect1.id = 'rect-1';
    // svg1.appendChild(rect1);
    //
    // const text1 = document.createElementNS(svgNS, 'text');
    // text1.setAttributeNS(null, 'x', '50%');
    // text1.setAttributeNS(null, 'y', '50%');
    // text1.setAttributeNS(null, 'dominant-baseline', 'central');
    // text1.setAttributeNS(null, 'text-anchor', 'middle');
    // text1.textContent = 'Read N, K';
    // text1.id = 'text-1';
    // svg1.appendChild(text1);
    //
    // this.canvas.appendChild(svg1);
    //
    // const svg2 = document.createElementNS(svgNS, 'svg');
    // svg2.setAttributeNS(null, 'x', '20');
    // svg2.setAttributeNS(null, 'y', '112');
    // svg2.setAttributeNS(null, 'width', '328');
    // svg2.setAttributeNS(null, 'height', '52');
    //
    // const rect2 = document.createElementNS(svgNS, 'rect');
    // rect2.setAttributeNS(null, 'x', '0');
    // rect2.setAttributeNS(null, 'y', '0');
    // rect2.setAttributeNS(null, 'width', '328');
    // rect2.setAttributeNS(null, 'height', '52');
    // rect2.setAttributeNS(null, 'fill', 'rgba(255, 255, 255, 0.65)');
    // rect2.setAttributeNS(null, 'stroke', 'black');
    // rect2.setAttributeNS(null, 'stroke-width', '2');
    // rect2.id = 'rect-2';
    // svg2.appendChild(rect2);
    //
    // const text2 = document.createElementNS(svgNS, 'text');
    // text2.setAttributeNS(null, 'x', '50%');
    // text2.setAttributeNS(null, 'y', '50%');
    // text2.setAttributeNS(null, 'dominant-baseline', 'central');
    // text2.setAttributeNS(null, 'text-anchor', 'middle');
    // text2.textContent = 'Read training data X and class labels of X, Y';
    // text2.id = 'text-2';
    // svg2.appendChild(text2);
    //
    // this.canvas.appendChild(svg2);
    //
    // const svg3 = document.createElementNS(svgNS, 'svg');
    // svg3.setAttributeNS(null, 'x', '20');
    // svg3.setAttributeNS(null, 'y', '194');
    // svg3.setAttributeNS(null, 'width', '328');
    // svg3.setAttributeNS(null, 'height', '52');
    //
    // const rect3 = document.createElementNS(svgNS, 'rect');
    // rect3.setAttributeNS(null, 'x', '0');
    // rect3.setAttributeNS(null, 'y', '0');
    // rect3.setAttributeNS(null, 'width', '328');
    // rect3.setAttributeNS(null, 'height', '52');
    // rect3.setAttributeNS(null, 'fill', 'rgba(255, 255, 255, 0.65)');
    // rect3.setAttributeNS(null, 'stroke', 'black');
    // rect3.setAttributeNS(null, 'stroke-width', '2');
    // rect3.id = 'rect-3';
    // svg3.appendChild(rect3);
    //
    // const text3 = document.createElementNS(svgNS, 'text');
    // text3.setAttributeNS(null, 'x', '50%');
    // text3.setAttributeNS(null, 'y', '50%');
    // text3.setAttributeNS(null, 'dominant-baseline', 'central');
    // text3.setAttributeNS(null, 'text-anchor', 'middle');
    // text3.textContent = 'Calculate distance d(X,x)';
    // text3.id = 'text-3';
    // svg3.appendChild(text3);
    //
    // this.canvas.appendChild(svg3);
    //
    // const svg4 = document.createElementNS(svgNS, 'svg');
    // svg4.setAttributeNS(null, 'x', '20');
    // svg4.setAttributeNS(null, 'y', '276');
    // svg4.setAttributeNS(null, 'width', '328');
    // svg4.setAttributeNS(null, 'height', '52');
    //
    // const rect4 = document.createElementNS(svgNS, 'rect');
    // rect4.setAttributeNS(null, 'x', '0');
    // rect4.setAttributeNS(null, 'y', '0');
    // rect4.setAttributeNS(null, 'width', '328');
    // rect4.setAttributeNS(null, 'height', '52');
    // rect4.setAttributeNS(null, 'fill', 'rgba(255, 255, 255, 0.65)');
    // rect4.setAttributeNS(null, 'stroke', 'black');
    // rect4.setAttributeNS(null, 'stroke-width', '2');
    // rect4.id = 'rect-4';
    // svg4.appendChild(rect4);
    //
    // const text4 = document.createElementNS(svgNS, 'text');
    // text4.setAttributeNS(null, 'x', '50%');
    // text4.setAttributeNS(null, 'y', '50%');
    // text4.setAttributeNS(null, 'dominant-baseline', 'central');
    // text4.setAttributeNS(null, 'text-anchor', 'middle');
    // text4.textContent = 'Select K distances in ascending order';
    // text4.id = 'text-4';
    // svg4.appendChild(text4);
    //
    // this.canvas.appendChild(svg4);
    //
    // const svg5 = document.createElementNS(svgNS, 'svg');
    // svg5.setAttributeNS(null, 'x', '20');
    // svg5.setAttributeNS(null, 'y', '358');
    // svg5.setAttributeNS(null, 'width', '328');
    // svg5.setAttributeNS(null, 'height', '52');
    //
    // const rect5 = document.createElementNS(svgNS, 'rect');
    // rect5.setAttributeNS(null, 'x', '0');
    // rect5.setAttributeNS(null, 'y', '0');
    // rect5.setAttributeNS(null, 'width', '328');
    // rect5.setAttributeNS(null, 'height', '52');
    // rect5.setAttributeNS(null, 'fill', 'rgba(255, 255, 255, 0.65)');
    // rect5.setAttributeNS(null, 'stroke', 'black');
    // rect5.setAttributeNS(null, 'stroke-width', '2');
    // rect5.id = 'rect-5';
    // svg5.appendChild(rect5);
    //
    // const text5 = document.createElementNS(svgNS, 'text');
    // text5.setAttributeNS(null, 'x', '50%');
    // text5.setAttributeNS(null, 'y', '50%');
    // text5.setAttributeNS(null, 'dominant-baseline', 'central');
    // text5.setAttributeNS(null, 'text-anchor', 'middle');
    // text5.textContent = 'Sort class label of x by majority';
    // text5.id = 'text-5';
    // svg5.appendChild(text5);
    //
    // this.canvas.appendChild(svg5);
    //
    // const arrowMarker = document.createElementNS(svgNS, 'svg');
    // const arrowMarkerDef = document.createElementNS(svgNS, 'defs');
    // const arrowMarkerM = document.createElementNS(svgNS, 'marker');
    // const arrowMarkerPath = document.createElementNS(svgNS, 'path');
    // arrowMarkerPath.setAttributeNS(null, 'd', 'M0,0L0,6L6,3z');
    // arrowMarkerPath.setAttributeNS(null, 'fill', 'black');
    // arrowMarkerM.appendChild(arrowMarkerPath);
    // arrowMarkerM.setAttributeNS(null, 'markerWidth', '10');
    // arrowMarkerM.setAttributeNS(null, 'markerHeight', '10');
    // arrowMarkerM.setAttributeNS(null, 'refX', '0');
    // arrowMarkerM.setAttributeNS(null, 'refY', '3');
    // arrowMarkerM.setAttributeNS(null, 'orient', 'auto');
    // arrowMarkerM.setAttributeNS(null, 'markerUnits', 'strokeWidth');
    // arrowMarkerM.id = 'arrow';
    // arrowMarkerDef.appendChild(arrowMarkerM);
    // arrowMarker.appendChild(arrowMarkerDef);
    // this.canvas.appendChild(arrowMarker);
    //
    // const arrow1 = document.createElementNS(svgNS, 'path');
    // arrow1.setAttributeNS(null, 'd', 'M184,82L184,102');
    // arrow1.setAttributeNS(null, 'stroke', 'black');
    // arrow1.setAttributeNS(null, 'stroke-width', '2');
    // arrow1.style.markerEnd = 'url(#arrow)';
    // this.canvas.appendChild(arrow1);
    //
    // const arrow2 = document.createElementNS(svgNS, 'path');
    // arrow2.setAttributeNS(null, 'd', 'M184,164L184,184');
    // arrow2.setAttributeNS(null, 'stroke', 'black');
    // arrow2.setAttributeNS(null, 'stroke-width', '2');
    // arrow2.style.markerEnd = 'url(#arrow)';
    // this.canvas.appendChild(arrow2);
    //
    // const arrow3 = document.createElementNS(svgNS, 'path');
    // arrow3.setAttributeNS(null, 'd', 'M184,246L184,266');
    // arrow3.setAttributeNS(null, 'stroke', 'black');
    // arrow3.setAttributeNS(null, 'stroke-width', '2');
    // arrow3.style.markerEnd = 'url(#arrow)';
    // this.canvas.appendChild(arrow3);
    //
    // const arrow4 = document.createElementNS(svgNS, 'path');
    // arrow4.setAttributeNS(null, 'd', 'M184,328L184,348');
    // arrow4.setAttributeNS(null, 'stroke', 'black');
    // arrow4.setAttributeNS(null, 'stroke-width', '2');
    // arrow4.style.markerEnd = 'url(#arrow)';
    // this.canvas.appendChild(arrow4);
  }

  // test() {
  //   this.clear();
  //
  //   document.getElementById('code0').style.backgroundColor = 'yellow';
  //   document.getElementById('rect-1').setAttributeNS(null, 'fill', 'yellow');
  //   document.getElementById('vis-result').setAttribute('src', '../../assets/result-img/KNN-Result-1.png');
  //
  //   setTimeout(() => {
  //     document.getElementById('code0').style.backgroundColor = 'rgba(255, 255, 255, 0)';
  //     document.getElementById('rect-1').setAttributeNS(null, 'fill', 'rgba(255, 255, 255, 0.65)');
  //
  //     document.getElementById('code1').style.backgroundColor = 'yellow';
  //     document.getElementById('rect-2').setAttributeNS(null, 'fill', 'yellow');
  //     document.getElementById('vis-result').setAttribute('src', '../../assets/result-img/KNN-Result-2.png');
  //
  //     setTimeout(() => {
  //       document.getElementById('code1').style.backgroundColor = 'rgba(255, 255, 255, 0)';
  //
  //       document.getElementById('code3').style.backgroundColor = 'yellow';
  //
  //       setTimeout(() => {
  //         document.getElementById('code3').style.backgroundColor = 'rgba(255, 255, 255, 0)';
  //
  //         document.getElementById('code4').style.backgroundColor = 'yellow';
  //         document.getElementById('code5').style.backgroundColor = 'yellow';
  //
  //         setTimeout(() => {
  //           document.getElementById('code4').style.backgroundColor = 'rgba(255, 255, 255, 0)';
  //           document.getElementById('code5').style.backgroundColor = 'rgba(255, 255, 255, 0)';
  //
  //           document.getElementById('code6').style.backgroundColor = 'yellow';
  //
  //           setTimeout(() => {
  //             document.getElementById('code6').style.backgroundColor = 'rgba(255, 255, 255, 0)';
  //
  //             document.getElementById('code4').style.backgroundColor = 'yellow';
  //             document.getElementById('code5').style.backgroundColor = 'yellow';
  //
  //             setTimeout(() => {
  //               document.getElementById('code4').style.backgroundColor = 'rgba(255, 255, 255, 0)';
  //               document.getElementById('code5').style.backgroundColor = 'rgba(255, 255, 255, 0)';
  //
  //               document.getElementById('code6').style.backgroundColor = 'yellow';
  //
  //               setTimeout(() => {
  //                 document.getElementById('code6').style.backgroundColor = 'rgba(255, 255, 255, 0)';
  //                 document.getElementById('rect-2').setAttributeNS(null, 'fill', 'rgba(255, 255, 255, 0.65)');
  //
  //                 document.getElementById('code8').style.backgroundColor = 'yellow';
  //                 document.getElementById('rect-3').setAttributeNS(null, 'fill', 'yellow');
  //                 document.getElementById('vis-result').setAttribute('src', '../../assets/result-img/KNN-Result-3.png');
  //
  //                 setTimeout(() => {
  //                   document.getElementById('code8').style.backgroundColor = 'rgba(255, 255, 255, 0)';
  //
  //                   document.getElementById('code9').style.backgroundColor = 'yellow';
  //
  //                   setTimeout(() => {
  //                     document.getElementById('code9').style.backgroundColor = 'rgba(255, 255, 255, 0)';
  //
  //                     document.getElementById('code10').style.backgroundColor = 'yellow';
  //
  //                     setTimeout(() => {
  //                       document.getElementById('code10').style.backgroundColor = 'rgba(255, 255, 255, 0)';
  //
  //                       document.getElementById('code11').style.backgroundColor = 'yellow';
  //
  //                       setTimeout(() => {
  //                         document.getElementById('code11').style.backgroundColor = 'rgba(255, 255, 255, 0)';
  //
  //                         document.getElementById('code10').style.backgroundColor = 'yellow';
  //
  //                         setTimeout(() => {
  //                           document.getElementById('code10').style.backgroundColor = 'rgba(255, 255, 255, 0)';
  //
  //                           document.getElementById('code11').style.backgroundColor = 'yellow';
  //
  //                           setTimeout(() => {
  //                             document.getElementById('code11').style.backgroundColor = 'rgba(255, 255, 255, 0)';
  //                             document.getElementById('rect-3').setAttributeNS(null, 'fill', 'rgba(255, 255, 255, 0.65)');
  //
  //                             document.getElementById('code13').style.backgroundColor = 'yellow';
  //                             document.getElementById('rect-4').setAttributeNS(null, 'fill', 'yellow');
  //                             document.getElementById('vis-result').setAttribute('src', '../../assets/result-img/KNN-Result-4.png');
  //
  //                             setTimeout(() => {
  //                               document.getElementById('code13').style.backgroundColor = 'rgba(255, 255, 255, 0)';
  //                               document.getElementById('rect-4').setAttributeNS(null, 'fill', 'rgba(255, 255, 255, 0.65)');
  //
  //                               document.getElementById('code14').style.backgroundColor = 'yellow';
  //                               document.getElementById('rect-5').setAttributeNS(null, 'fill', 'yellow');
  //                               document.getElementById('vis-result').setAttribute('src', '../../assets/result-img/KNN-Result-5.png');
  //                             }, 500);
  //                           }, 500);
  //                         }, 500);
  //                       }, 500);
  //                     }, 500);
  //                   }, 500);
  //                 }, 500);
  //               }, 500);
  //             }, 500);
  //           }, 500);
  //         }, 500);
  //       }, 500);
  //     }, 500);
  //   }, 500);
  // }
  //
  // clear() {
  //   for (let i = 0; i < this.codeArray.length; i++) {
  //     document.getElementById('code' + i).style.backgroundColor = 'rgba(255, 255, 255, 0)';
  //   }
  //
  //   document.getElementById('rect-1').setAttributeNS(null, 'fill', 'rgba(255, 255, 255, 0.65)');
  //   document.getElementById('rect-2').setAttributeNS(null, 'fill', 'rgba(255, 255, 255, 0.65)');
  //   document.getElementById('rect-3').setAttributeNS(null, 'fill', 'rgba(255, 255, 255, 0.65)');
  //   document.getElementById('rect-4').setAttributeNS(null, 'fill', 'rgba(255, 255, 255, 0.65)');
  //   document.getElementById('rect-5').setAttributeNS(null, 'fill', 'rgba(255, 255, 255, 0.65)');
  //
  //   document.getElementById('vis-result').setAttribute('src', '');
  // }

  OpenDetailDialog(step: number) {
    let data = {
      step: '',
      image: []
    }

    switch (step) {
      case 1: {
        data = {
          step: `Step1. 데이터셋(X, Y), K(K)값 입력\nK = 3`,
          image: ['/assets/result-img/knn/KNN_1.png']
        }
        break;
      }
      case 2: {
        data = {
          step: 'Step2. 분류할 데이터 입력\n(X, Y) = (6, 4)',
          image: ['/assets/result-img/knn/KNN_2-1.png', '/assets/result-img/knn/KNN_2-2.png']
        }
        break;
      }
      case 3: {
        data = {
          step: 'Step3. 모든 데이터셋과 거리 계산',
          image: ['/assets/result-img/knn/KNN_3-01.png', '/assets/result-img/knn/KNN_3-02.png', '/assets/result-img/knn/KNN_3-03.png', '/assets/result-img/knn/KNN_3-04.png', '/assets/result-img/knn/KNN_3-05.png', '/assets/result-img/knn/KNN_3-06.png', '/assets/result-img/knn/KNN_3-07.png', '/assets/result-img/knn/KNN_3-08.png', '/assets/result-img/knn/KNN_3-09.png', '/assets/result-img/knn/KNN_3-10.png', '/assets/result-img/knn/KNN_3-11.png', '/assets/result-img/knn/KNN_3-12.png', '/assets/result-img/knn/KNN_3-13.png', '/assets/result-img/knn/KNN_3-14.png']
        }
        break;
      }
      case 4: {
        data = {
          step: 'Step4. 거리가 짧은 순서로 K개 만큼 선택\nK = 3',
          image: ['/assets/result-img/knn/KNN_4-1.png', '/assets/result-img/knn/KNN_4-1.png', '/assets/result-img/knn/KNN_4-1.png', '/assets/result-img/knn/KNN_4-2.png']
        }
        break;
      }
      case 5: {
        data = {
          step: 'Step5. 선택된 값 중 다수 값으로 분류',
          image: ['/assets/result-img/knn/KNN_5-1.png', '/assets/result-img/knn/KNN_5-1.png', '/assets/result-img/knn/KNN_5-1.png', '/assets/result-img/knn/KNN_5-2.png']
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
