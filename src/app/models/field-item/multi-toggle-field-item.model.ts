import * as Models from '../index';

export class MultiToggleFieldItem extends Models.MultiViewFieldItem {

    constructor(init?: Partial<MultiToggleFieldItem>) {
        super(init);
        this.inlineView = true;
        this.type = 'multitoggle';
        Object.assign(this, init);
    }
}