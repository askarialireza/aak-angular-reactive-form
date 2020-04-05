import { TextFieldItem } from './text-field-item.model';

export class TextareaFieldItem extends TextFieldItem {

    constructor(init?: Partial<TextareaFieldItem>) {
        super(init);
        this.type = 'textarea';
        Object.assign(this, init);
    }
}