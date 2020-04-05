import * as Interfaces from '../../interfaces/field-item/colorable-field-item.interface';
import { BaseFieldItem } from './base-field-item.model';

export class ToggleFieldItem extends BaseFieldItem implements Interfaces.ColorableFieldItem {

    constructor(init?: Partial<ToggleFieldItem>) {
        super(init);
        this.type = 'toggle';
        Object.assign(this, init);
    }

    color: string;
}