import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnInit, ViewContainerRef } from "@angular/core";
import { InputComponent } from "../components/controls/input/input.component";
import { BaseComponent } from '../infrastructure/base-component';
import { CheckboxComponent } from '../components/controls/checkbox/checkbox.component';
import { DatePickerComponent } from '../components/controls/date-picker/date-picker.component';
import { DateRangeComponent } from '../components/controls/date-range/date-range.component';
import { MultiCheckboxComponent } from '../components/controls/multi-checkbox/multi-checkbox.component';
import { RadioComponent } from '../components/controls/radio/radio.component';
import { ButtonToggleComponent } from '../components/controls/button-toggle/button-toggle.component';
import { RangeComponent } from '../components/controls/range/range.component';
import { SelectComponent } from '../components/controls/select/select.component';
import { SummernoteTextareaComponent } from '../components/controls/summernote-textarea/summernote-textarea.component';
import { TextareaComponent } from '../components/controls/textarea/textarea.component';
import { UploadComponent } from '../components/controls/upload/upload.component';

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
