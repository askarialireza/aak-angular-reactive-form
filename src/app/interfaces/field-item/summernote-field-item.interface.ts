import { TextFieldItem } from './text-field-item.interface';

export interface SummernoteFieldItem extends TextFieldItem {
    height: number;
    uploadPath: string;
}