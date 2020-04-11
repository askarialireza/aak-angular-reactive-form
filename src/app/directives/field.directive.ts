import { ComponentFactoryResolver, Directive, ViewContainerRef } from "@angular/core";
import * as Controls from '../form-maker/controls/index';
import { BaseComponent } from '../infrastructure/base-component';


const componentMapper = {
    input: Controls.InputComponent,
    checkbox: Controls.CheckboxComponent,
    date: Controls.DatePickerComponent,
    daterange: Controls.DateRangeComponent,
    multicheckbox: Controls.MultiCheckboxComponent,
    radio: Controls.RadioComponent,
    buttontoggle: Controls.ButtonToggleComponent,
    range: Controls.RangeComponent,
    select: Controls.SelectComponent,
    summernote: Controls.SummernoteTextareaComponent,
    textarea: Controls.TextareaComponent,
    upload: Controls.UploadComponent,
    toggle: Controls.ToggleComponent,
    option: Controls.OptionComponent,
    divider:Controls.DividerComponent,
    width: Controls.WidthComponent,
    multitoggle: Controls.MultiToggleComponent,
};

@Directive({ selector: "[form-generator-field]" })
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
