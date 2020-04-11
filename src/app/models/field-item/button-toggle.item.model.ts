import { MultiViewFieldItem } from './multi-view-field-item.model';

export class ButtonToggleFieldItem extends MultiViewFieldItem {

    constructor(init?: Partial<ButtonToggleFieldItem>) {
        super(init);
        this.type = 'buttontoggle';
        this.isMaximumWidth = false;
        Object.assign(this, init);
    }

    isMaximumWidth: boolean;
}