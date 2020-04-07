import * as Interfaces from '../../interfaces/index';
import * as Models from '../../models/index';
import { BaseFieldItem } from './base-field-item.model';
import { Option } from '../option';

export class OptionableFieldItem extends BaseFieldItem implements Interfaces.OptionFieldItem {

    constructor(init?: Partial<OptionableFieldItem>) {
        super(init);
        Object.assign(this, init);
    }

    options: Option[];
}