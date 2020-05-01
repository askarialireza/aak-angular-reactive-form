import { BaseFieldItem } from './base-field-item.model';

export enum ColorType {
    Primary = 'primary',
    Accent = 'accent',
    Warn = 'warn',
}

export class ColorableFieldItem extends BaseFieldItem {

    constructor(init?: Partial<ColorableFieldItem>) {
        super(init);
        this.color = ColorType.Primary;
        Object.assign(this, init);
    }

    color: string;

}