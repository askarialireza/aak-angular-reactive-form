import { ColorableOptionFieldItem } from './colorable-option-field-item.model';
import * as Interfaces from '../../interfaces/field-item/multi-view-field-item.interface';
import { MultiChoiceFieldItem } from './multi-choice-field-item.model';

export class MultiToggleFieldItem extends MultiChoiceFieldItem {

    constructor(init?: Partial<MultiToggleFieldItem>) {
        super(init);
        this.inlineView = true;
        this.type = 'multitoggle';
        Object.assign(this, init);
        
        if (this.required === true) {
            this.validations.find(current=>current.name == 'required')
            .message = `انتخاب حداقل ${this.minSelected} گزینه الزامی است.`
        }
    }
    columns: number;
    inlineView: boolean;
}