import { ColorableFieldItem } from './colorable-field-item.model';

export class CheckboxFieldItem extends ColorableFieldItem {

    constructor(init?: Partial<CheckboxFieldItem>) {
        super(init);
        this.type = 'checkbox';
        Object.assign(this, init);
    }
}