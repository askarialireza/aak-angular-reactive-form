import { BaseFieldItem } from './base-field-item.interface';

export interface MultiViewFieldItem extends BaseFieldItem {
    inlineView: boolean;
    minSelected: number;
}