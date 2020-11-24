import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewRequestComponent } from './components/new-request/new-request.component';
import { TrackingNumberComponent } from './components/tracking-number/tracking-number.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  { path: 'nuevasolicitud', component: NewRequestComponent },
  { path: 'seguimiento', component: TrackingNumberComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
