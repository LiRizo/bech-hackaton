import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewRequestComponent } from './components/new-request/new-request.component';
import { TrackingNumberComponent } from './components/tracking-number/tracking-number.component';
import { FrequentQuestionsAllComponent } from './components/frequent-questions-all/frequent-questions-all.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  { path: 'nuevasolicitud', component: NewRequestComponent },
  { path: 'seguimiento', component: TrackingNumberComponent },
  { path: 'preguntasfrecuentesall', component: FrequentQuestionsAllComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
