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

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        KnnComponent,
        LinearRegressionComponent,
        DetailDialogComponent,
        FadeInDirective
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatDialogModule,
        FlexLayoutModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [
        DetailDialogComponent
    ]
})
export class AppModule {
}
