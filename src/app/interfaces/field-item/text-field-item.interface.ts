import { BaseFieldItem } from './base-field-item.interface';

export interface TextFieldItem extends BaseFieldItem {
    minlength: number;
    maxlength: number;
    readonly: boolean;
    pattern: string;
    autocomplete: boolean;
    inputType: string;
}