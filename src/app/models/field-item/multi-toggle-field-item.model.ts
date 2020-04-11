import { ColorableOptionFieldItem } from './colorable-option-field-item.model';
import * as Interfaces from '../../interfaces/field-item/multi-view-field-item.interface';

export class MultiToggleFieldItem extends ColorableOptionFieldItem implements Interfaces.MultiViewFieldItem {

    constructor(init?: Partial<MultiToggleFieldItem>) {
        super(init);
        this.inlineView = true;
        this.type = 'multitoggle';
        Object.assign(this, init);
    }
    columns: number;
    inlineView: boolean;
}