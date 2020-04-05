import { InputFieldItem } from './input-field-item.model';

export class UrlFieldItem extends InputFieldItem {

    constructor(init?: Partial<UrlFieldItem>) {
        super(init);
        this.inputType = 'url';
        Object.assign(this, init);
    }
}