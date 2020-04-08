import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as Pages from './components/pages/index';
import { ReactiveFormComponent } from './form-maker/reactive-form/reactive-form.component';


const routes: Routes = [
  { path: '', component: Pages.HomeComponent },
  { path: 'home', redirectTo: '/', pathMatch: 'full' },
  { path: "dashboard", component: Pages.DashboardComponent },
  { path: "forms/create", component: ReactiveFormComponent },
  { path: "forms/view/:id", component: Pages.FormViewComponent },
  { path: "**", component: Pages.NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
