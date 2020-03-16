import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormViewComponent } from './components/form-view/form-view.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'home', redirectTo:'/', pathMatch: 'full' },
  { path: "forms/create", component: ReactiveFormComponent },
  { path: "forms/view/:id", component: FormViewComponent },
  { path: "**", component: NotFoundComponent }
];

// const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
