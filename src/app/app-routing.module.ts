import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewRequestComponent } from './components/new-request/new-request.component';
import { TrackingNumberComponent } from './components/tracking-number/tracking-number.component';
import { FrequentQuestionsComponent } from './components/frequent-questions/frequent-questions.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  { path: 'nuevasolicitud', component: NewRequestComponent },
  { path: 'seguimiento', component: TrackingNumberComponent },
  { path: 'preguntasfrecuentes', component: FrequentQuestionsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
