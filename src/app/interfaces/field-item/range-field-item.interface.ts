import { ColorableFieldItem } from './colorable-field-item.interface';

export interface RangeFieldItem extends ColorableFieldItem {
    minValue: number;
    maxValue: number;
    displayFormat?: any;
}