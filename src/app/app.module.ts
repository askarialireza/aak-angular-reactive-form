import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { AppComponent } from './components/app/app.component';
import { InputComponent } from './components/controls/input/input.component';
import { SelectComponent } from './components/controls/select/select.component';
import { RadioComponent } from './components/controls/radio/radio.component';
import { DatePickerComponent } from './components/controls/date-picker/date-picker.component';
import { RangeComponent } from './components/controls/range/range.component';
import { CheckboxComponent } from './components/controls/checkbox/checkbox.component';
import { TextareaComponent } from './components/controls/textarea/textarea.component';
import { SummernoteTextareaComponent } from './components/controls/summernote-textarea/summernote-textarea.component';
import { ButtonToggleComponent } from './components/controls/button-toggle/button-toggle.component';
import { FormService } from './services/form.service';
import { ManageControlComponent } from './components/controls/manage-control/manage-control.component';
import { NgxSummernoteModule } from 'ngx-summernote';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { FieldCreateComponent } from './components/field-create/field-create.component';
import { MainPanelManageFormComponent } from './components/main-panel-manage-form/main-panel-manage-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MultiCheckboxComponent } from './components/controls/multi-checkbox/multi-checkbox.component';
import { DateRangeComponent } from './components/controls/date-range/date-range.component';
import { BasicReactiveFieldsComponent } from './components/basic-reactive-fields/basic-reactive-fields.component';
import { FontAwesomeService } from './services/fontawesome.service';
import { FormApiService } from './services/api/form.api.service';
import { FielditemApiService } from './services/api/fielditem.api.service';
import { LoadingComponent } from './components/loading/loading.component';
import { NotificationComponent } from './components/notification/notification.component';
import { FormViewComponent } from './components/form-view/form-view.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { FieldDirective } from './directives/field.directive';
import { UploadComponent } from './components/controls/upload/upload.component';
import { FieldSelectPanelComponent } from './components/field-select-panel/field-select-panel.component';
import { FieldTypeSelectModalComponent } from './components/field-select-panel-modals/field-type-select-modal/field-type-select-modal.component';
import { FieldCreateModalComponent } from './components/field-select-panel-modals/field-create-modal/field-create-modal.component';
import { ToggleComponent } from './components/controls/toggle/toggle.component';
import { FieldEditModalComponent } from './components/field-select-panel-modals/field-edit-modal/field-edit-modal.component';
import { ImageComponent } from './components/image/image.component';

@NgModule({
  declarations: [
    FieldDirective,
    AppComponent,
    ManageControlComponent,
    InputComponent,
    SelectComponent,
    RadioComponent,
    DatePickerComponent,
    RangeComponent,
    CheckboxComponent,
    TextareaComponent,
    SummernoteTextareaComponent,
    ButtonToggleComponent,
    MultiCheckboxComponent,
    UploadComponent,
    DateRangeComponent,
    ReactiveFormComponent,
    FieldCreateComponent,
    NavbarComponent,
    LoadingComponent,
    NotificationComponent,
    FormViewComponent,
    NotFoundComponent,
    FooterComponent,
    HomeComponent,
    ToggleComponent,
    ImageComponent,
    MainPanelManageFormComponent,
    BasicReactiveFieldsComponent,
    FieldSelectPanelComponent,
    FieldTypeSelectModalComponent,
    FieldCreateModalComponent,
    FieldEditModalComponent,
  ],

  imports: [
    HttpClientModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxSummernoteModule,
    MaterialModule,
    FontAwesomeModule,
  ],
  providers: [
    FormService,
    FontAwesomeService,
    FormApiService,
    FielditemApiService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    InputComponent,
    SelectComponent,
    ButtonToggleComponent,
    CheckboxComponent,
    RangeComponent,
    TextareaComponent,
    SummernoteTextareaComponent,
    RadioComponent,
    DatePickerComponent,
    DateRangeComponent,
    RangeComponent,
    MultiCheckboxComponent,
    TextareaComponent,
    SummernoteTextareaComponent,
    UploadComponent,
    ToggleComponent,
    // MainPanelManageFormComponent,
    // BasicReactiveFieldsComponent,
    // FieldSelectPanelComponent,
    // FieldTypeSelectModalComponent,
    // FieldSettingModalComponent,
  ]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
