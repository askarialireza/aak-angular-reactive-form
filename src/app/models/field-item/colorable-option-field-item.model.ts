import { ColorableFieldItem } from './colorable-field-item.model';
import { Option } from '../option';

export class ColorableOptionFieldItem extends ColorableFieldItem {

    constructor(init?: Partial<ColorableOptionFieldItem>) {
        super(init);
        Object.assign(this, init);
    }

    options: Option[];

}