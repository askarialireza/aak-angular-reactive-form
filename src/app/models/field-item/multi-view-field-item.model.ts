import { OptionFieldItem } from './option-field-item.model';
import * as Interfaces from '../../interfaces/field-item/multi-view-field-item.interface';
export class MultiViewFieldItem extends OptionFieldItem implements Interfaces.MultiViewFieldItem {

    constructor(init?: Partial<MultiViewFieldItem>) {
        super(init);
        this.inlineView = true;
        Object.assign(this, init);
    }

    inlineView: boolean;
}