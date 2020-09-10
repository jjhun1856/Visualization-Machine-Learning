import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {KnnComponent} from './knn/knn.component';
import {LinearRegressionComponent} from './linear-regression/linear-regression.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {FlexLayoutModule} from '@angular/flex-layout';
import { DetailDialogComponent } from './detail-dialog/detail-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FadeInDirective } from './fade-in.directive';
import { GanComponent } from './gan/gan.component';
import { CnnComponent } from './cnn/cnn.component';
import {MathJaxModule} from 'ngx-mathjax';
import {MatSelectModule} from '@angular/material/select';
import { KnnProblemComponent } from './knn/knn-problem/knn-problem.component';
import {MatRadioModule} from '@angular/material/radio';
import { LinearRegressionProblemComponent } from './linear-regression/linear-regression-problem/linear-regression-problem.component';
import {GanProblemComponent} from './gan/gan-problem/gan-problem.component';
import {CnnProblemComponent} from './cnn/cnn-problem/cnn-problem.component';
import {GeneticAlgorithmProblemComponent} from './genetic-algorithm/genetic-algorithm-problem/genetic-algorithm-problem.component';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        KnnComponent,
        LinearRegressionComponent,
        DetailDialogComponent,
        FadeInDirective,
        GanComponent,
        CnnComponent,
        KnnProblemComponent,
        LinearRegressionProblemComponent,
        GanProblemComponent,
        CnnProblemComponent,
        GeneticAlgorithmProblemComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatDialogModule,
        FlexLayoutModule,
        MathJaxModule.forRoot(),
        MatSelectModule,
        MatRadioModule,
        // MathJaxModule.forRoot({
        //     version: '2.7.5',
        //     config: 'TeX-AMS_HTML',
        //     hostname: 'cdnjs.cloudflare.com'
        // })
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [
        DetailDialogComponent,
        KnnProblemComponent,
        LinearRegressionProblemComponent,
        GanProblemComponent,
        CnnProblemComponent,
        GeneticAlgorithmProblemComponent,
    ]
})
export class AppModule {
}
