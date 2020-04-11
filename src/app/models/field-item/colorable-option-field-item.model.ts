import * as Interfaces from '../../interfaces/field-item/colorable-option-field-item.interface';
import { ColorableFieldItem } from './colorable-field-item.model';
import { Option } from '../option';

export class ColorableOptionFieldItem extends ColorableFieldItem implements Interfaces.ColorableOptionFieldItem {

    constructor(init?: Partial<ColorableOptionFieldItem>) {
        super(init);
        Object.assign(this, init);
    }

    options: Option[];

}