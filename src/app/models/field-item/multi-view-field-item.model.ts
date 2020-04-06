import { OptionableFieldItem } from './optionable-field-item.model';
import * as Interfaces from '../../interfaces/field-item/multi-view-field-item.interface';
export class MultiViewFieldItem extends OptionableFieldItem implements Interfaces.MultiViewFieldItem {

    constructor(init?: Partial<MultiViewFieldItem>) {
        super(init);
        this.inlineView = true;
        Object.assign(this, init);
    }

    inlineView: boolean;
}