import { TextFieldItem } from './text-field-item.model';

export class InputFieldItem extends TextFieldItem {

    constructor(init?: Partial<InputFieldItem>) {
        super(init);
        this.type = 'input';
        this.inputType = 'text';
        Object.assign(this, init);
    }
}