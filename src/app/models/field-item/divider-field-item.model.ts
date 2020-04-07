import * as Interfaces from '../../interfaces/field-item/base-field-item.interface';
import { BaseFieldItem } from './base-field-item.model';

export class DividerFieldItem extends BaseFieldItem implements Interfaces.BaseFieldItem {

    constructor(init?: Partial<BaseFieldItem>) {
        super(init);
        this.type = 'divider';
        Object.assign(this, init);
    }

}