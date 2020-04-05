import { InputFieldItem } from './input-field-item.model';
import { Validators } from '@angular/forms';

export class EmailFieldItem extends InputFieldItem {

    constructor(init?: Partial<EmailFieldItem>) {
        super(init);
        this.inputType = 'email';
        this.pattern = `\\w+([-+.'']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*`;
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
    }
}