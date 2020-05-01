import * as Models from '../index';

export class MultiViewFieldItem extends Models.ColorableOptionFieldItem {

    constructor(init?: Partial<MultiViewFieldItem>) {
        super(init);
        this.inlineView = true;
        Object.assign(this, init);

        if (this.required === true) {
            this.validations.find(current=>current.name == 'required')
            .message = `انتخاب حداقل ${this.minSelected} گزینه الزامی است.`
        }
    }
    
    columns: number;
    minSelected: number;
    inlineView: boolean;
}