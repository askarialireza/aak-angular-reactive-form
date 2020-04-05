import { ColorableOptionFieldItem } from './colorable-option-field-item.model';
import * as Interfaces from '../../interfaces/field-item/multi-view-field-item.interface';

export class MultiCheckboxFieldItem extends ColorableOptionFieldItem implements Interfaces.MultiViewFieldItem {

    constructor(init?: Partial<MultiCheckboxFieldItem>) {
        super(init);
        this.inlineView = true;
        this.type = 'multicheckbox';
        Object.assign(this, init);
    }

    inlineView: boolean;
}