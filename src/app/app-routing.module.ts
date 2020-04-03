import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormViewComponent } from './components/pages/form-view/form-view.component';
import { ReactiveFormComponent } from './components/reactive-form-maker/reactive-form/reactive-form.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'home', redirectTo:'/', pathMatch: 'full' },
  { path: "forms/create", component: ReactiveFormComponent },
  { path: "forms/view/:id", component: FormViewComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
