import { ComponentFactoryResolver, Directive, ViewContainerRef } from "@angular/core";
import { InputComponent } from "../components/reactive-form-maker/controls/input/input.component";
import { BaseComponent } from '../infrastructure/base-component';
import { CheckboxComponent } from '../components/reactive-form-maker/controls/checkbox/checkbox.component';
import { DatePickerComponent } from '../components/reactive-form-maker/controls/date-picker/date-picker.component';
import { DateRangeComponent } from '../components/reactive-form-maker/controls/date-range/date-range.component';
import { MultiCheckboxComponent } from '../components/reactive-form-maker/controls/multi-checkbox/multi-checkbox.component';
import { RadioComponent } from '../components/reactive-form-maker/controls/radio/radio.component';
import { ButtonToggleComponent } from '../components/reactive-form-maker/controls/button-toggle/button-toggle.component';
import { RangeComponent } from '../components/reactive-form-maker/controls/range/range.component';
import { SelectComponent } from '../components/reactive-form-maker/controls/select/select.component';
import { SummernoteTextareaComponent } from '../components/reactive-form-maker/controls/summernote-textarea/summernote-textarea.component';
import { TextareaComponent } from '../components/reactive-form-maker/controls/textarea/textarea.component';
import { UploadComponent } from '../components/reactive-form-maker/controls/upload/upload.component';
import { ToggleComponent } from '../components/reactive-form-maker/controls/toggle/toggle.component';

const componentMapper = {
    input: InputComponent,
    checkbox: CheckboxComponent,
    date: DatePickerComponent,
    daterange: DateRangeComponent,
    multicheckbox: MultiCheckboxComponent,
    radio: RadioComponent,
    radiobutton: ButtonToggleComponent,
    range: RangeComponent,
    select: SelectComponent,
    summernote: SummernoteTextareaComponent,
    textarea: TextareaComponent,
    upload: UploadComponent,
    toggle: ToggleComponent,
};
@Directive({ selector: "[reactive-field]" })
export class FieldDirective extends BaseComponent {

    componentRef: any;

    constructor(private resolver: ComponentFactoryResolver, private container: ViewContainerRef) {
        super();
    }

    ngOnInit() {

        const factory = this.resolver.resolveComponentFactory(
            componentMapper[this.field.type]
        );

        this.componentRef = this.container.createComponent(factory);
        this.componentRef.instance.field = this.field;
        this.componentRef.instance.group = this.group;
    }
}
