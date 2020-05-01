import { OptionableFieldItem } from './optionable-field-item.model';
import { ColorableFieldItem } from './../../interfaces/field-item/colorable-field-item.interface';

export class MultiViewFieldItem extends OptionableFieldItem implements ColorableFieldItem {

    constructor(init?: Partial<MultiViewFieldItem>) {
        super(init);
        this.inlineView = true;
        Object.assign(this, init);
    }
    
    color: string;   
    columns: number;
    inlineView: boolean;
}