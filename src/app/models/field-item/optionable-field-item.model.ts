import * as Interfaces from '../../interfaces/index';
import * as Models from '../../models/index';

export class OptionableFieldItem extends Models.BaseFieldItem implements Interfaces.OptionFieldItem {

    constructor(init?: Partial<OptionableFieldItem>) {
        super(init);
        Object.assign(this, init);
    }

    options: Models.Option[];
}