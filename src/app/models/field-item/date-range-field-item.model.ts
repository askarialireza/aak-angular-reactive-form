import { BaseFieldItem } from './base-field-item.model';

export class DateRangeFieldItem extends BaseFieldItem {

    constructor(init?: Partial<DateRangeFieldItem>) {
        super(init);
        this.type = 'daterange';
        Object.assign(this, init);
    }
}