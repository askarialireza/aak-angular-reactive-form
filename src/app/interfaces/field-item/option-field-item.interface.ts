import { BaseFieldItem } from './base-field-item.interface';
import { Option } from '../../models/option';

export interface OptionFieldItem extends BaseFieldItem {
    options: Option[];
}