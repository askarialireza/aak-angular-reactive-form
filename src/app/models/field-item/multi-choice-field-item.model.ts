import { ColorableOptionFieldItem } from './colorable-option-field-item.model';

export class MultiChoiceFieldItem extends ColorableOptionFieldItem {

    constructor(init?: Partial<MultiChoiceFieldItem>) {
        super(init);
        this.inlineView = true;
        Object.assign(this, init);
    }
    
    minSelected: number;
    maxSelected: number;
    inlineView: boolean;
}