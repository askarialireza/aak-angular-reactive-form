import * as Interfaces from '../../interfaces/field-item/text-field-item.interface';
import { BaseFieldItem } from './base-field-item.model';
import { Validators } from '@angular/forms';

export class TextFieldItem extends BaseFieldItem implements Interfaces.TextFieldItem {
    constructor(init?: Partial<TextFieldItem>) {
        super(init);
        Object.assign(this, init);

        if (this.pattern) {

            if (!this.validations) {

                this.validations = [];
            }

            this.validations.push({
                name: "pattern",
                validator: Validators.pattern(this.pattern),
                message: `فیلد ${(this.label) ? `${this.label} ` : ''}نا‌معتبر است.`,
            });
        }

        if (this.minlength) {

            if (!this.validations) {

                this.validations = [];
            }

            this.validations.push({
                name: "minlength",
                validator: Validators.minLength(this.minlength),
                message: `حداقل طول فیلد ${(this.label) ? `${this.label} ` : ''}${this.minlength} کاراکتر می‌باشد.`,
            });
        }

        if (this.maxlength) {

            if (!this.validations) {

                this.validations = [];
            }

            this.validations.push({
                name: "minlength",
                validator: Validators.maxLength(this.minlength),
                message: `حداکثر طول فیلد ${(this.label) ? `${this.label} ` : ''}${this.maxlength} کاراکتر می‌باشد.`,
            });
        }
    }
    inputType: string;
    minlength: number;
    maxlength: number;
    readonly: boolean;
    pattern: string;
    autocomplete: boolean;
}
