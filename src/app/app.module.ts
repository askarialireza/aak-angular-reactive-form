import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './components/app/app.component';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { InputComponent } from './components/controls/input/input.component';
import { SelectComponent } from './components/controls/select/select.component';
import { RadioComponent } from './components/controls/radio/radio.component';
import { DatePickerComponent } from './components/controls/date-picker/date-picker.component';
import { RangeComponent } from './components/controls/range/range.component';
import { CheckboxComponent } from './components/controls/checkbox/checkbox.component';
import { TextareaComponent } from './components/controls/textarea/textarea.component';
import { SummernoteTextareaComponent } from './components/controls/summernote-textarea/summernote-textarea.component';
import { SubmitComponent } from './components/controls/submit/submit.component';
import { RadiobuttonComponent } from './components/controls/radiobutton/radiobutton.component';
import { FormService } from './services/form.service';
import { ManageControlComponent } from './components/controls/manage-control/manage-control.component';
import { NgxSummernoteModule } from 'ngx-summernote';
import { HttpClientModule } from '@angular/common/http';
import { MainPanelComponent } from './components/main-panel/main-panel.component';
import { SidebarPanelComponent } from './components/sidebar-panel/sidebar-panel.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { FieldCreateComponent } from './components/field-create/field-create.component';
import { FormCreateComponent } from './components/form-create/form-create.component';
import { MainPanelManageFormComponent } from './components/main-panel-manage-form/main-panel-manage-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormCreateService } from './services/form-create.service';
import { MultiCheckboxComponent } from './components/controls/multi-checkbox/multi-checkbox.component';
import { DateRangeComponent } from './components/controls/date-range/date-range.component';
import { BasicReactiveFieldsComponent } from './components/basic-reactive-fields/basic-reactive-fields.component';
import { AAkButtonDirective } from './directives/aak-button.directive';


@NgModule({
  declarations: [
    AAkButtonDirective,
    AppComponent,
    BasicFormComponent,
    ManageControlComponent,
    InputComponent,
    SelectComponent,
    RadioComponent,
    DatePickerComponent,
    RangeComponent,
    CheckboxComponent,
    TextareaComponent,
    SummernoteTextareaComponent,
    SubmitComponent,
    RadiobuttonComponent,
    MainPanelComponent,
    SidebarPanelComponent,
    ReactiveFormComponent,
    FieldCreateComponent,
    FormCreateComponent,
    MainPanelManageFormComponent,
    NavbarComponent,
    MultiCheckboxComponent,
    DateRangeComponent,
    BasicReactiveFieldsComponent,
  ],

  imports: [
    HttpClientModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule,
    NgxSummernoteModule,
    FontAwesomeModule,
  ],
  providers: [FormService, FormCreateService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {

  }
}
