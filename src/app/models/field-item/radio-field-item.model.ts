import { ColorableOptionFieldItem } from './colorable-option-field-item.model';
import * as Interfaces from '../../interfaces/field-item/multi-view-field-item.interface';

export class RadioFieldItem extends ColorableOptionFieldItem implements Interfaces.MultiViewFieldItem {

    constructor(init?: Partial<RadioFieldItem>) {
        super(init);
        this.inlineView = true;
        this.type = 'radio';
        Object.assign(this, init);
    }
    inlineView: boolean;
}