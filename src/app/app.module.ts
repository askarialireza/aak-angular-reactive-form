import { fas } from '@fortawesome/free-solid-svg-icons';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSummernoteModule } from 'ngx-summernote';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { FormMakerModule } from './form-maker/form-maker.module';

import * as Services from './services/index';

import { AppComponent } from './components/app/app.component';
import { NavbarComponent } from './components/user-interface/navbar/navbar.component';
import { LoadingComponent } from './components/user-interface/loading/loading.component';
import { NotificationComponent } from './components/user-interface/notification/notification.component';
import { FormViewComponent } from './components/pages/form-view/form-view.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { FooterComponent } from './components/user-interface/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoadingComponent,
    NotificationComponent,
    FormViewComponent,
    NotFoundComponent,
    FooterComponent,
    HomeComponent,
  ],

  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    MaterialModule,
    FormMakerModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    NgxSummernoteModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  exports: [
  ],
  providers: Object.keys(Services).map(current => Services[current]),
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
