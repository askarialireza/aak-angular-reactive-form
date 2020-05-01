import { MultiChoiceFieldItem } from './multi-choice-field-item.model';

export class MultiCheckboxFieldItem extends MultiChoiceFieldItem {

    constructor(init?: Partial<MultiCheckboxFieldItem>) {
        super(init);
        this.inlineView = true;
        this.type = 'multicheckbox';

        Object.assign(this, init);

        if (this.required === true) {
            this.validations.find(current => current.name == 'required')
                .message = `انتخاب حداقل ${this.minSelected} گزینه الزامی است.`
        }
    }

    minSelected: number;
    inlineView: boolean;
    columns: number;

}