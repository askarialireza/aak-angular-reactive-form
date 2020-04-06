import * as Interfaces from '../../exports/interface.namespace';
import * as Models from '../../exports/model.namespace';
import { BaseFieldItem } from './base-field-item.model';
import { Option } from '../option';

export class OptionFieldItem extends BaseFieldItem implements Interfaces.OptionFieldItem {

    constructor(init?: Partial<OptionFieldItem>) {
        super(init);
        this.type = 'option';
        this.label = 'انتخاب‌ها';
        this.placeholder = 'انتخاب';
        this.options = [
            new Models.Option({}),
            new Models.Option({}),
        ]
        Object.assign(this, init);
    }

    options: Option[];
}