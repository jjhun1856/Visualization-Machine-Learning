import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { KnnComponent } from './knn/knn.component';
import { LinearRegressionComponent } from './linear-regression/linear-regression.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    KnnComponent,
    LinearRegressionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
