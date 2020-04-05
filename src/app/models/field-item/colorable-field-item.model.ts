import { BaseFieldItem } from './base-field-item.model';
import * as Interfaces from '../../interfaces/field-item/colorable-field-item.interface';

export enum ColorType {
    Primary = 'primary',
    Accent = 'accent',
    Warn = 'warn',
}

export class ColorableFieldItem extends BaseFieldItem implements Interfaces.ColorableFieldItem {

    constructor(init?: Partial<ColorableFieldItem>) {
        super(init);
        this.color = ColorType.Primary;
        Object.assign(this, init);
    }

    color: string;

}