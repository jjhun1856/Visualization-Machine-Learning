import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-linear-regression',
  templateUrl: './linear-regression.component.html',
  styleUrls: ['./linear-regression.component.scss']
})
export class LinearRegressionComponent implements OnInit {

  code: string =
    'Read number of data N\n' +
    'Read training data\n' +
    'For i = 1 to N :\n' +
    ' Read Xi and Yi\n' +
    ' Next i\n' +
    ' \n' +
    'Initialize\n' +
    ' SumX = 0, SumY = 0\n' +
    ' SumX2 = 0, SumXY = 0\n' +
    ' \n' +
    'Calculate required sum\n' +
    'For i = 1 to N :\n' +
    ' SumX = SumX + Xi\n' +
    ' SumY = SumY + Yi\n' +
    ' SumX2 = SumX2 + Xi * Xi\n' +
    ' SumXY = SumXY + Xi * Yi\n' +
    ' Next i\n' +
    ' \n' +
    'Calculate required constant a and b of y = ax + b\n' +
    ' a = (N * SumXY - SumX * SumY) / (N * SumX2 - SumX * SumX)\n' +
    ' b = (SumY - a * SumX) / N\n' +
    ' \n' +
    'Predict test data\n' +
    'Display value of a and b\n';

  codeArray: any;

  canvas: any;

  constructor() {
  }

  ngOnInit(): void {
    this.codeArray = this.code.split('\n');

    this.canvas = document.getElementById('flowchart');

    const svgNS = 'http://www.w3.org/2000/svg';

    const svg1 = document.createElementNS(svgNS, 'svg');
    svg1.setAttributeNS(null, 'x', '20');
    svg1.setAttributeNS(null, 'y', '30');
    svg1.setAttributeNS(null, 'width', '328');
    svg1.setAttributeNS(null, 'height', '52');

    const rect1 = document.createElementNS(svgNS, 'rect');
    rect1.setAttributeNS(null, 'x', '0');
    rect1.setAttributeNS(null, 'y', '0');
    rect1.setAttributeNS(null, 'width', '328');
    rect1.setAttributeNS(null, 'height', '52');
    rect1.setAttributeNS(null, 'fill', 'rgba(255, 255, 255, 0.65)');
    rect1.setAttributeNS(null, 'stroke', 'black');
    rect1.setAttributeNS(null, 'stroke-width', '2');
    rect1.id = 'rect-1';
    svg1.appendChild(rect1);

    const text1 = document.createElementNS(svgNS, 'text');
    text1.setAttributeNS(null, 'x', '50%');
    text1.setAttributeNS(null, 'y', '50%');
    text1.setAttributeNS(null, 'dominant-baseline', 'central');
    text1.setAttributeNS(null, 'text-anchor', 'middle');
    text1.textContent = 'Read N';
    text1.id = 'text-1';
    svg1.appendChild(text1);

    this.canvas.appendChild(svg1);

    const svg2 = document.createElementNS(svgNS, 'svg');
    svg2.setAttributeNS(null, 'x', '20');
    svg2.setAttributeNS(null, 'y', '112');
    svg2.setAttributeNS(null, 'width', '328');
    svg2.setAttributeNS(null, 'height', '52');

    const rect2 = document.createElementNS(svgNS, 'rect');
    rect2.setAttributeNS(null, 'x', '0');
    rect2.setAttributeNS(null, 'y', '0');
    rect2.setAttributeNS(null, 'width', '328');
    rect2.setAttributeNS(null, 'height', '52');
    rect2.setAttributeNS(null, 'fill', 'rgba(255, 255, 255, 0.65)');
    rect2.setAttributeNS(null, 'stroke', 'black');
    rect2.setAttributeNS(null, 'stroke-width', '2');
    rect2.id = 'rect-2';
    svg2.appendChild(rect2);

    const text2 = document.createElementNS(svgNS, 'text');
    text2.setAttributeNS(null, 'x', '50%');
    text2.setAttributeNS(null, 'y', '50%');
    text2.setAttributeNS(null, 'dominant-baseline', 'central');
    text2.setAttributeNS(null, 'text-anchor', 'middle');
    text2.textContent = 'Read training data';
    text2.id = 'text-2';
    svg2.appendChild(text2);

    this.canvas.appendChild(svg2);

    const svg3 = document.createElementNS(svgNS, 'svg');
    svg3.setAttributeNS(null, 'x', '20');
    svg3.setAttributeNS(null, 'y', '194');
    svg3.setAttributeNS(null, 'width', '328');
    svg3.setAttributeNS(null, 'height', '52');

    const rect3 = document.createElementNS(svgNS, 'rect');
    rect3.setAttributeNS(null, 'x', '0');
    rect3.setAttributeNS(null, 'y', '0');
    rect3.setAttributeNS(null, 'width', '328');
    rect3.setAttributeNS(null, 'height', '52');
    rect3.setAttributeNS(null, 'fill', 'rgba(255, 255, 255, 0.65)');
    rect3.setAttributeNS(null, 'stroke', 'black');
    rect3.setAttributeNS(null, 'stroke-width', '2');
    rect3.id = 'rect-3';
    svg3.appendChild(rect3);

    const text3 = document.createElementNS(svgNS, 'text');
    text3.setAttributeNS(null, 'x', '50%');
    text3.setAttributeNS(null, 'y', '50%');
    text3.setAttributeNS(null, 'dominant-baseline', 'central');
    text3.setAttributeNS(null, 'text-anchor', 'middle');
    text3.textContent = 'Initialize';
    text3.id = 'text-3';
    svg3.appendChild(text3);

    this.canvas.appendChild(svg3);

    const svg4 = document.createElementNS(svgNS, 'svg');
    svg4.setAttributeNS(null, 'x', '20');
    svg4.setAttributeNS(null, 'y', '276');
    svg4.setAttributeNS(null, 'width', '328');
    svg4.setAttributeNS(null, 'height', '52');

    const rect4 = document.createElementNS(svgNS, 'rect');
    rect4.setAttributeNS(null, 'x', '0');
    rect4.setAttributeNS(null, 'y', '0');
    rect4.setAttributeNS(null, 'width', '328');
    rect4.setAttributeNS(null, 'height', '52');
    rect4.setAttributeNS(null, 'fill', 'rgba(255, 255, 255, 0.65)');
    rect4.setAttributeNS(null, 'stroke', 'black');
    rect4.setAttributeNS(null, 'stroke-width', '2');
    rect4.id = 'rect-4';
    svg4.appendChild(rect4);

    const text4 = document.createElementNS(svgNS, 'text');
    text4.setAttributeNS(null, 'x', '50%');
    text4.setAttributeNS(null, 'y', '50%');
    text4.setAttributeNS(null, 'dominant-baseline', 'central');
    text4.setAttributeNS(null, 'text-anchor', 'middle');
    text4.textContent = 'Calculate required sum';
    text4.id = 'text-4';
    svg4.appendChild(text4);

    this.canvas.appendChild(svg4);

    const svg5 = document.createElementNS(svgNS, 'svg');
    svg5.setAttributeNS(null, 'x', '20');
    svg5.setAttributeNS(null, 'y', '358');
    svg5.setAttributeNS(null, 'width', '328');
    svg5.setAttributeNS(null, 'height', '52');

    const rect5 = document.createElementNS(svgNS, 'rect');
    rect5.setAttributeNS(null, 'x', '0');
    rect5.setAttributeNS(null, 'y', '0');
    rect5.setAttributeNS(null, 'width', '328');
    rect5.setAttributeNS(null, 'height', '52');
    rect5.setAttributeNS(null, 'fill', 'rgba(255, 255, 255, 0.65)');
    rect5.setAttributeNS(null, 'stroke', 'black');
    rect5.setAttributeNS(null, 'stroke-width', '2');
    rect5.id = 'rect-5';
    svg5.appendChild(rect5);

    const text5 = document.createElementNS(svgNS, 'text');
    text5.setAttributeNS(null, 'x', '50%');
    text5.setAttributeNS(null, 'y', '50%');
    text5.setAttributeNS(null, 'dominant-baseline', 'central');
    text5.setAttributeNS(null, 'text-anchor', 'middle');
    text5.textContent = 'Calculate required constant a and b of y=ax+b';
    text5.id = 'text-5';
    svg5.appendChild(text5);

    this.canvas.appendChild(svg5);

    const svg6 = document.createElementNS(svgNS, 'svg');
    svg6.setAttributeNS(null, 'x', '20');
    svg6.setAttributeNS(null, 'y', '440');
    svg6.setAttributeNS(null, 'width', '328');
    svg6.setAttributeNS(null, 'height', '52');

    const rect6 = document.createElementNS(svgNS, 'rect');
    rect6.setAttributeNS(null, 'x', '0');
    rect6.setAttributeNS(null, 'y', '0');
    rect6.setAttributeNS(null, 'width', '328');
    rect6.setAttributeNS(null, 'height', '52');
    rect6.setAttributeNS(null, 'fill', 'rgba(255, 255, 255, 0.65)');
    rect6.setAttributeNS(null, 'stroke', 'black');
    rect6.setAttributeNS(null, 'stroke-width', '2');
    rect6.id = 'rect-6';
    svg6.appendChild(rect6);

    const text6 = document.createElementNS(svgNS, 'text');
    text6.setAttributeNS(null, 'x', '50%');
    text6.setAttributeNS(null, 'y', '50%');
    text6.setAttributeNS(null, 'dominant-baseline', 'central');
    text6.setAttributeNS(null, 'text-anchor', 'middle');
    text6.textContent = 'Predict test data';
    text6.id = 'text-6';
    svg6.appendChild(text6);

    this.canvas.appendChild(svg6);

    const svg7 = document.createElementNS(svgNS, 'svg');
    svg7.setAttributeNS(null, 'x', '20');
    svg7.setAttributeNS(null, 'y', '522');
    svg7.setAttributeNS(null, 'width', '328');
    svg7.setAttributeNS(null, 'height', '52');

    const rect7 = document.createElementNS(svgNS, 'rect');
    rect7.setAttributeNS(null, 'x', '0');
    rect7.setAttributeNS(null, 'y', '0');
    rect7.setAttributeNS(null, 'width', '328');
    rect7.setAttributeNS(null, 'height', '52');
    rect7.setAttributeNS(null, 'fill', 'rgba(255, 255, 255, 0.65)');
    rect7.setAttributeNS(null, 'stroke', 'black');
    rect7.setAttributeNS(null, 'stroke-width', '2');
    rect7.id = 'rect-7';
    svg7.appendChild(rect7);

    const text7 = document.createElementNS(svgNS, 'text');
    text7.setAttributeNS(null, 'x', '50%');
    text7.setAttributeNS(null, 'y', '50%');
    text7.setAttributeNS(null, 'dominant-baseline', 'central');
    text7.setAttributeNS(null, 'text-anchor', 'middle');
    text7.textContent = 'Display result';
    text7.id = 'text-7';
    svg7.appendChild(text7);

    this.canvas.appendChild(svg7);

    const arrowMarker = document.createElementNS(svgNS, 'svg');
    const arrowMarkerDef = document.createElementNS(svgNS, 'defs');
    const arrowMarkerM = document.createElementNS(svgNS, 'marker');
    const arrowMarkerPath = document.createElementNS(svgNS, 'path');
    arrowMarkerPath.setAttributeNS(null, 'd', 'M0,0L0,6L6,3z');
    arrowMarkerPath.setAttributeNS(null, 'fill', 'black');
    arrowMarkerM.appendChild(arrowMarkerPath);
    arrowMarkerM.setAttributeNS(null, 'markerWidth', '10');
    arrowMarkerM.setAttributeNS(null, 'markerHeight', '10');
    arrowMarkerM.setAttributeNS(null, 'refX', '0');
    arrowMarkerM.setAttributeNS(null, 'refY', '3');
    arrowMarkerM.setAttributeNS(null, 'orient', 'auto');
    arrowMarkerM.setAttributeNS(null, 'markerUnits', 'strokeWidth');
    arrowMarkerM.id = 'arrow';
    arrowMarkerDef.appendChild(arrowMarkerM);
    arrowMarker.appendChild(arrowMarkerDef);
    this.canvas.appendChild(arrowMarker);

    const arrow1 = document.createElementNS(svgNS, 'path');
    arrow1.setAttributeNS(null, 'd', 'M184,82L184,102');
    arrow1.setAttributeNS(null, 'stroke', 'black');
    arrow1.setAttributeNS(null, 'stroke-width', '2');
    arrow1.style.markerEnd = 'url(#arrow)';
    this.canvas.appendChild(arrow1);

    const arrow2 = document.createElementNS(svgNS, 'path');
    arrow2.setAttributeNS(null, 'd', 'M184,164L184,184');
    arrow2.setAttributeNS(null, 'stroke', 'black');
    arrow2.setAttributeNS(null, 'stroke-width', '2');
    arrow2.style.markerEnd = 'url(#arrow)';
    this.canvas.appendChild(arrow2);

    const arrow3 = document.createElementNS(svgNS, 'path');
    arrow3.setAttributeNS(null, 'd', 'M184,246L184,266');
    arrow3.setAttributeNS(null, 'stroke', 'black');
    arrow3.setAttributeNS(null, 'stroke-width', '2');
    arrow3.style.markerEnd = 'url(#arrow)';
    this.canvas.appendChild(arrow3);

    const arrow4 = document.createElementNS(svgNS, 'path');
    arrow4.setAttributeNS(null, 'd', 'M184,328L184,348');
    arrow4.setAttributeNS(null, 'stroke', 'black');
    arrow4.setAttributeNS(null, 'stroke-width', '2');
    arrow4.style.markerEnd = 'url(#arrow)';
    this.canvas.appendChild(arrow4);

    const arrow5 = document.createElementNS(svgNS, 'path');
    arrow5.setAttributeNS(null, 'd', 'M184,410L184,430');
    arrow5.setAttributeNS(null, 'stroke', 'black');
    arrow5.setAttributeNS(null, 'stroke-width', '2');
    arrow5.style.markerEnd = 'url(#arrow)';
    this.canvas.appendChild(arrow5);

    const arrow6 = document.createElementNS(svgNS, 'path');
    arrow6.setAttributeNS(null, 'd', 'M184,492L184,512');
    arrow6.setAttributeNS(null, 'stroke', 'black');
    arrow6.setAttributeNS(null, 'stroke-width', '2');
    arrow6.style.markerEnd = 'url(#arrow)';
    this.canvas.appendChild(arrow6);
  }

  test() {
    this.clear();

    document.getElementById('code0').style.backgroundColor = 'yellow';
    document.getElementById('rect-1').setAttributeNS(null, 'fill', 'yellow');
    document.getElementById('vis-result').setAttribute('src', '../../assets/result-img/Linear Regression-Result-1.png');

    setTimeout(() => {
      document.getElementById('code0').style.backgroundColor = 'rgba(255, 255, 255, 0)';
      document.getElementById('rect-1').setAttributeNS(null, 'fill', 'rgba(255, 255, 255, 0.65)');

      document.getElementById('code1').style.backgroundColor = 'yellow';
      document.getElementById('rect-2').setAttributeNS(null, 'fill', 'yellow');

      setTimeout(() => {
        document.getElementById('code1').style.backgroundColor = 'rgba(255, 255, 255, 0)';

        document.getElementById('code2').style.backgroundColor = 'yellow';

        setTimeout(() => {
          document.getElementById('code2').style.backgroundColor = 'rgba(255, 255, 255, 0)';

          document.getElementById('code3').style.backgroundColor = 'yellow';

          setTimeout(() => {
            document.getElementById('code3').style.backgroundColor = 'rgba(255, 255, 255, 0)';

            document.getElementById('code4').style.backgroundColor = 'yellow';

            setTimeout(() => {
              document.getElementById('code4').style.backgroundColor = 'rgba(255, 255, 255, 0)';

              document.getElementById('code3').style.backgroundColor = 'yellow';

              setTimeout(() => {
                document.getElementById('code3').style.backgroundColor = 'rgba(255, 255, 255, 0)';

                document.getElementById('code4').style.backgroundColor = 'yellow';

                setTimeout(() => {
                  document.getElementById('code4').style.backgroundColor = 'rgba(255, 255, 255, 0)';
                  document.getElementById('rect-2').setAttributeNS(null, 'fill', 'rgba(255, 255, 255, 0.65)');

                  document.getElementById('code6').style.backgroundColor = 'yellow';
                  document.getElementById('code7').style.backgroundColor = 'yellow';
                  document.getElementById('code8').style.backgroundColor = 'yellow';
                  document.getElementById('rect-3').setAttributeNS(null, 'fill', 'yellow');

                  setTimeout(() => {
                    document.getElementById('code6').style.backgroundColor = 'rgba(255, 255, 255, 0)';
                    document.getElementById('code7').style.backgroundColor = 'rgba(255, 255, 255, 0)';
                    document.getElementById('code8').style.backgroundColor = 'rgba(255, 255, 255, 0)';
                    document.getElementById('rect-3').setAttributeNS(null, 'fill', 'rgba(255, 255, 255, 0.65)');

                    document.getElementById('code10').style.backgroundColor = 'yellow';
                    document.getElementById('rect-4').setAttributeNS(null, 'fill', 'yellow');

                    setTimeout(() => {
                      document.getElementById('code10').style.backgroundColor = 'rgba(255, 255, 255, 0)';

                      document.getElementById('code11').style.backgroundColor = 'yellow';

                      setTimeout(() => {
                        document.getElementById('code11').style.backgroundColor = 'rgba(255, 255, 255, 0)';

                        document.getElementById('code12').style.backgroundColor = 'yellow';
                        document.getElementById('code13').style.backgroundColor = 'yellow';
                        document.getElementById('code14').style.backgroundColor = 'yellow';
                        document.getElementById('code15').style.backgroundColor = 'yellow';

                        setTimeout(() => {
                          document.getElementById('code12').style.backgroundColor = 'rgba(255, 255, 255, 0)';
                          document.getElementById('code13').style.backgroundColor = 'rgba(255, 255, 255, 0)';
                          document.getElementById('code14').style.backgroundColor = 'rgba(255, 255, 255, 0)';
                          document.getElementById('code15').style.backgroundColor = 'rgba(255, 255, 255, 0)';

                          document.getElementById('code16').style.backgroundColor = 'yellow';

                          setTimeout(() => {
                            document.getElementById('code16').style.backgroundColor = 'rgba(255, 255, 255, 0)';

                            document.getElementById('code12').style.backgroundColor = 'yellow';
                            document.getElementById('code13').style.backgroundColor = 'yellow';
                            document.getElementById('code14').style.backgroundColor = 'yellow';
                            document.getElementById('code15').style.backgroundColor = 'yellow';

                            setTimeout(() => {
                              document.getElementById('code12').style.backgroundColor = 'rgba(255, 255, 255, 0)';
                              document.getElementById('code13').style.backgroundColor = 'rgba(255, 255, 255, 0)';
                              document.getElementById('code14').style.backgroundColor = 'rgba(255, 255, 255, 0)';
                              document.getElementById('code15').style.backgroundColor = 'rgba(255, 255, 255, 0)';

                              document.getElementById('code16').style.backgroundColor = 'yellow';

                              setTimeout(() => {
                                document.getElementById('code16').style.backgroundColor = 'rgba(255, 255, 255, 0)';
                                document.getElementById('rect-4').setAttributeNS(null, 'fill', 'rgba(255, 255, 255, 0.65)');

                                document.getElementById('code18').style.backgroundColor = 'yellow';
                                document.getElementById('rect-5').setAttributeNS(null, 'fill', 'yellow');

                                setTimeout(() => {
                                  document.getElementById('code18').style.backgroundColor = 'rgba(255, 255, 255, 0)';

                                  document.getElementById('code19').style.backgroundColor = 'yellow';

                                  setTimeout(() => {
                                    document.getElementById('code19').style.backgroundColor = 'rgba(255, 255, 255, 0)';

                                    document.getElementById('code20').style.backgroundColor = 'yellow';

                                    setTimeout(() => {
                                      document.getElementById('code20').style.backgroundColor = 'rgba(255, 255, 255, 0)';
                                      document.getElementById('rect-5').setAttributeNS(null, 'fill', 'rgba(255, 255, 255, 0.65)');

                                      document.getElementById('code22').style.backgroundColor = 'yellow';
                                      document.getElementById('rect-6').setAttributeNS(null, 'fill', 'yellow');

                                      setTimeout(() => {
                                        document.getElementById('code22').style.backgroundColor = 'rgba(255, 255, 255, 0)';
                                        document.getElementById('rect-6').setAttributeNS(null, 'fill', 'rgba(255, 255, 255, 0.65)');

                                        document.getElementById('code23').style.backgroundColor = 'yellow';
                                        document.getElementById('rect-7').setAttributeNS(null, 'fill', 'yellow');
                                        document.getElementById('vis-result').setAttribute('src', '../../assets/result-img/Linear Regression-Result-2.png');
                                      }, 500);
                                    }, 500);
                                  }, 500);
                                }, 500);
                              }, 500);
                            }, 500);
                          }, 500);
                        }, 500);
                      }, 500);
                    }, 500);
                  }, 500);
                }, 500);
              }, 500);
            }, 500);
          }, 500);
        }, 500);
      }, 500);
    }, 500);
  }

  clear() {
    for (let i = 0; i < this.codeArray.length; i++) {
      document.getElementById('code' + i).style.backgroundColor = 'rgba(255, 255, 255, 0)';
    }

    document.getElementById('rect-1').setAttributeNS(null, 'fill', 'rgba(255, 255, 255, 0.65)');
    document.getElementById('rect-2').setAttributeNS(null, 'fill', 'rgba(255, 255, 255, 0.65)');
    document.getElementById('rect-3').setAttributeNS(null, 'fill', 'rgba(255, 255, 255, 0.65)');
    document.getElementById('rect-4').setAttributeNS(null, 'fill', 'rgba(255, 255, 255, 0.65)');
    document.getElementById('rect-5').setAttributeNS(null, 'fill', 'rgba(255, 255, 255, 0.65)');
    document.getElementById('rect-6').setAttributeNS(null, 'fill', 'rgba(255, 255, 255, 0.65)');
    document.getElementById('rect-7').setAttributeNS(null, 'fill', 'rgba(255, 255, 255, 0.65)');

    document.getElementById('vis-result').setAttribute('src', '');
  }
}
