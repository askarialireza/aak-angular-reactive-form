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
import { InputComponent } from './components/reactive-form-maker/controls/input/input.component';
import { SelectComponent } from './components/reactive-form-maker/controls/select/select.component';
import { RadioComponent } from './components/reactive-form-maker/controls/radio/radio.component';
import { DatePickerComponent } from './components/reactive-form-maker/controls/date-picker/date-picker.component';
import { RangeComponent } from './components/reactive-form-maker/controls/range/range.component';
import { CheckboxComponent } from './components/reactive-form-maker/controls/checkbox/checkbox.component';
import { TextareaComponent } from './components/reactive-form-maker/controls/textarea/textarea.component';
import { SummernoteTextareaComponent } from './components/reactive-form-maker/controls/summernote-textarea/summernote-textarea.component';
import { ButtonToggleComponent } from './components/reactive-form-maker/controls/button-toggle/button-toggle.component';
import { FormService } from './services/form.service';
import { ManageControlComponent } from './components/reactive-form-maker/controls/manage-control/manage-control.component';
import { NgxSummernoteModule } from 'ngx-summernote';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormComponent } from './components/reactive-form-maker/reactive-form/reactive-form.component';
import { MainPanelManageFormComponent } from './components/reactive-form-maker/main-panel-manage-form/main-panel-manage-form.component';
import { NavbarComponent } from './components/user-interface/navbar/navbar.component';
import { MultiCheckboxComponent } from './components/reactive-form-maker/controls/multi-checkbox/multi-checkbox.component';
import { DateRangeComponent } from './components/reactive-form-maker/controls/date-range/date-range.component';
import { BasicReactiveFieldsComponent } from './components/reactive-form-maker/basic-reactive-fields/basic-reactive-fields.component';
import { FontAwesomeService } from './services/fontawesome.service';
import { FormApiService } from './services/api/form.api.service';
import { FieldItemApiService } from './services/api/field-item.api.service';
import { LoadingComponent } from './components/user-interface/loading/loading.component';
import { NotificationComponent } from './components/user-interface/notification/notification.component';
import { FormViewComponent } from './components/pages/form-view/form-view.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { FooterComponent } from './components/user-interface/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FieldDirective } from './directives/field.directive';
import { UploadComponent } from './components/reactive-form-maker/controls/upload/upload.component';
import { FieldSelectPanelComponent } from './components/reactive-form-maker/field-select-panel/field-select-panel.component';
import { FieldTypeSelectModalComponent } from './components/reactive-form-maker/field-select-panel-modals/field-type-select-modal/field-type-select-modal.component';
import { FieldCreateModalComponent } from './components/reactive-form-maker/field-select-panel-modals/field-create-modal/field-create-modal.component';
import { ToggleComponent } from './components/reactive-form-maker/controls/toggle/toggle.component';
import { FieldEditModalComponent } from './components/reactive-form-maker/field-select-panel-modals/field-edit-modal/field-edit-modal.component';
import { ImageComponent } from './components/user-interface/image/image.component';
import { FileSizePipe } from './infrastructure/file-size.pipe';
import { FieldSelectModalComponent } from './components/reactive-form-maker/field-select-panel-modals/field-select-modal/field-select-modal.component';

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
    FieldSelectModalComponent,
    FileSizePipe,
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
  exports: [
  ],
  providers: [

    FormService,
    FontAwesomeService,
    FormApiService,
    FieldItemApiService,
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
  ]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
