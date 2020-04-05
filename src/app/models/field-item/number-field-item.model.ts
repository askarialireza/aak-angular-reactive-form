import { TextFieldItem } from './text-field-item.model';
import { InputFieldItem } from './input-field-item.model';

export class NumberFieldItem extends InputFieldItem {

    constructor(init?: Partial<NumberFieldItem>) {
        super(init);
        this.inputType = 'number';
        Object.assign(this, init);
    }
}