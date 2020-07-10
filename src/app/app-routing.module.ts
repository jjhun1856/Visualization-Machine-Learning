import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';
import {KnnComponent} from './knn/knn.component';
import {LinearRegressionComponent} from './linear-regression/linear-regression.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'knn',
    component: KnnComponent,
  },
  {
    path: 'linear-regression',
    component: LinearRegressionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
