import * as Interfaces from '../../interfaces/field-item/base-field-item.interface';
import { Validator } from '../validator';
import { Guid } from 'guid-typescript';
import { Validators } from '@angular/forms';

export class BaseFieldItem implements Interfaces.BaseFieldItem {

    constructor(init?: Partial<BaseFieldItem>) {
        this.id = init.id || Guid.create().toString();
        this.name = init.name || Guid.create().toString();
        this.width = init.width || 12;
        this.required = init.required || false;
        Object.assign(this, init);

        if (this.required === true) {

            if (!this.validations) {
                this.validations = [];
            }

            this.validations.push(
                new Validator({
                    name: "required",
                    message: `فیلد ${(this.label) ? `${this.label} ` : ''}اجباری است.`,
                    validator: Validators.required,
                })
            );
        }
    }

    id: string;
    name: string;
    type: string;
    required: boolean;
    placeholder: string;
    value: any;
    label: string;
    order: number;
    width: number;
    hint: string;
    disabled: boolean;
    validations: Validator[];
    formId: string;
}