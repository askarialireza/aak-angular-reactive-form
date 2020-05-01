import { InputFieldItem } from './input-field-item.model';
import * as Models from '../index';

export class EmailFieldItem extends InputFieldItem {

    constructor(init?: Partial<EmailFieldItem>) {
        super(init);
        this.inputType = 'email';
        //this.pattern = `\\w+([-+.'']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*`;
        Object.assign(this, init);

        if (!this.validations) {
            this.validations = [];
        }

        this.validations.push(
            new Models.EmailValidator({ message: `فیلد ${(this.label) ? `${this.label} ` : ''}نا‌معتبر است.` })
        );
    }
}