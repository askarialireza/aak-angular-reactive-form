import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSummernoteModule } from 'ngx-summernote';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import * as Controls from '../form-maker/controls/index';
import * as Modals from '../form-maker/modals/index';
import { FormGeneratorComponent } from '../form-maker/form-generator/form-generator.component';
import { ReactiveFormComponent} from '../form-maker/reactive-form/reactive-form.component';
import { FileSizePipe } from '../infrastructure/file-size.pipe';
import { FieldDirective } from '../directives/field.directive';
import { ImageComponent } from '../components/user-interface/image/image.component';

@NgModule({
  declarations: [
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
    FormGeneratorComponent,
    FormGeneratorComponent,
    ImageComponent,
    FileSizePipe,
    FieldDirective,
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
    FormGeneratorComponent,
    FileSizePipe,
    FieldDirective,
    ImageComponent,
  ],
  entryComponents: Object.keys(Controls).map(current => Controls[current]),
})
export class FormMakerModule { }
