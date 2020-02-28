import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnInit, ViewContainerRef } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldItem } from '../models/field-item';
import { InputComponent } from "../components/controls/input/input.component";

const componentMapper = {
    input: InputComponent,
};
@Directive({ selector: "[reactive-field]" })
export class FieldDirective implements OnInit {

    @Input() field: FieldItem;
    @Input() group: FormGroup;
    componentRef: any;

    constructor(private resolver: ComponentFactoryResolver, private container: ViewContainerRef) { }

    ngOnInit() {

        const factory = this.resolver.resolveComponentFactory(
            componentMapper[this.field.type]
        );

        this.componentRef = this.container.createComponent(factory);
        this.componentRef.instance.field = this.field;
        this.componentRef.instance.group = this.group;

    }
}
