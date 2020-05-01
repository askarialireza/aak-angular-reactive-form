import * as Models from '../index';

export class RadioFieldItem extends Models.MultiViewFieldItem {

    constructor(init?: Partial<RadioFieldItem>) {
        super(init);
        this.inlineView = true;
        this.type = 'radio';
        Object.assign(this, init);
    }
}