import * as Interfaces from '../../interfaces/field-item/option-field-item.interface';
import { BaseFieldItem } from './base-field-item.model';
import { OptionFieldItem } from './option-field-item.model';

export class SelectFieldItem extends OptionFieldItem {

    constructor(init?: Partial<SelectFieldItem>) {
        super(init);
        this.type = 'select';
        Object.assign(this, init);
    }

}