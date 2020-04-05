import * as Interfaces from '../../interfaces/field-item/colorable-option-field-item.interface';
import { Option } from '../option';
import { ColorableFieldItem } from './colorable-field-item.model';

export class ColorableOptionFieldItem extends ColorableFieldItem implements Interfaces.ColorableOptionFieldItem {

    constructor(init?: Partial<ColorableOptionFieldItem>) {
        super(init);
        Object.assign(this, init);
    }

    options: Option[];

}