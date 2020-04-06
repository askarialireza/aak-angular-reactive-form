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

import * as Controls from './exports/control-component.namespace';
import * as Services from './exports/service.namespace';
import * as Modals from './exports/modal.namespace';

import { AppComponent } from './components/app/app.component';
import { ReactiveFormComponent } from './components/reactive-form-maker/reactive-form/reactive-form.component';
import { MainPanelManageFormComponent } from './components/reactive-form-maker/main-panel-manage-form/main-panel-manage-form.component';
import { NavbarComponent } from './components/user-interface/navbar/navbar.component';
import { BasicReactiveFieldsComponent } from './components/reactive-form-maker/basic-reactive-fields/basic-reactive-fields.component';
import { LoadingComponent } from './components/user-interface/loading/loading.component';
import { NotificationComponent } from './components/user-interface/notification/notification.component';
import { FormViewComponent } from './components/pages/form-view/form-view.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { FooterComponent } from './components/user-interface/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FieldDirective } from './directives/field.directive';
import { ImageComponent } from './components/user-interface/image/image.component';
import { FileSizePipe } from './infrastructure/file-size.pipe';

@NgModule({
  declarations: [
    FieldDirective,
    AppComponent,
    Controls.ManageControlComponent,
    Controls.InputComponent,
    Controls.SelectComponent,
    Controls.RadioComponent,
    Controls.DatePickerComponent,
    Controls.RangeComponent,
    Controls.CheckboxComponent,
    Controls.TextareaComponent,
    Controls.SummernoteTextareaComponent,
    Controls.ButtonToggleComponent,
    Controls.MultiCheckboxComponent,
    Controls.UploadComponent,
    Controls.DateRangeComponent,
    Controls.ToggleComponent,
    Controls.OptionComponent,
    Modals.GroupTypeSelectModalComponent,
    Modals.FieldTypeSelectModalComponent,
    Modals.CreateFieldModalComponent,
    ReactiveFormComponent,
    NavbarComponent,
    LoadingComponent,
    NotificationComponent,
    FormViewComponent,
    NotFoundComponent,
    FooterComponent,
    HomeComponent,
    ImageComponent,
    MainPanelManageFormComponent,
    BasicReactiveFieldsComponent,
    FileSizePipe,
  ],

  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    NgxSummernoteModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  exports: [
  ],
  providers: Object.keys(Services).map(current=> Services[current]), 
  bootstrap: [AppComponent],
  entryComponents: Object.keys(Controls).map(current=> Controls[current]),
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
