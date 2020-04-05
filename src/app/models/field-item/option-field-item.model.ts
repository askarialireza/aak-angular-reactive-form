import * as Interfaces from '../../interfaces/field-item/option-field-item.interface';
import { BaseFieldItem } from './base-field-item.model';
import { Option } from '../option';

export class OptionFieldItem extends BaseFieldItem implements Interfaces.OptionFieldItem {

    constructor(init?: Partial<OptionFieldItem>) {
        super(init);
        Object.assign(this, init);
    }

    options: Option[];
}