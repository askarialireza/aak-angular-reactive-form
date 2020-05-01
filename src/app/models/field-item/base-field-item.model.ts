import * as Interfaces from '../../interfaces/field-item/base-field-item.interface';
import * as Models from '../index';
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
                new Models.RequiredValidator({
                    message: `درج فیلد ${(this.label) ? `${this.label} ` : ''}الزامی است.`,
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
    validations: Models.BaseValidator[];
    formId: string;
}