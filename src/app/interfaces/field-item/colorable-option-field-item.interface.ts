import { Option } from '../../models/option';
import { ColorableFieldItem } from './colorable-field-item.interface';

export interface ColorableOptionFieldItem extends ColorableFieldItem {
    options: Option[];
}