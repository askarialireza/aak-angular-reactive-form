import { ColorableFieldItem } from './colorable-field-item.model';
import * as Interfaces from '../../interfaces/field-item/range-field-item.interface';
export class RangeFieldItem extends ColorableFieldItem implements Interfaces.RangeFieldItem {

    constructor(init?: Partial<RangeFieldItem>) {
        super(init);
        this.type = 'range';
        Object.assign(this, init);

    }

    minValue: number;
    maxValue: number;
    displayFormat?: any;
}