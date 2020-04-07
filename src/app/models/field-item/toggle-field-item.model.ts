import { ColorableFieldItem } from './colorable-field-item.model';
import { BaseFieldItem } from '../../interfaces/index';

export class ToggleFieldItem extends ColorableFieldItem implements BaseFieldItem {

    constructor(init?: Partial<ToggleFieldItem>) {
        super(init);
        this.type = 'toggle';
        Object.assign(this, init);
    }
}