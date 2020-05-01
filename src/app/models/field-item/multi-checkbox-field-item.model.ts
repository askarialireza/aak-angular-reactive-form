import * as Models from '../index';

export class MultiCheckboxFieldItem extends Models.MultiViewFieldItem {

    constructor(init?: Partial<MultiCheckboxFieldItem>) {
        super(init);
        this.inlineView = true;
        this.type = 'multicheckbox';
        Object.assign(this, init);
    }
}