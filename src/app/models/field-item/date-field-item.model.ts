import { BaseFieldItem } from './base-field-item.model';

export class DateFieldItem extends BaseFieldItem {

    constructor(init?: Partial<DateFieldItem>) {
        super(init);
        this.type = 'date';
        Object.assign(this, init);
    }
}