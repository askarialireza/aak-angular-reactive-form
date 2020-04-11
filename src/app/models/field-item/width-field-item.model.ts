import * as Interfaces from '../../interfaces/index';
import * as Models from '../index';

export class WidthFieldItem extends Models.ButtonToggleFieldItem implements Interfaces.RangeFieldItem {

    constructor(init?: Partial<WidthFieldItem>) {
        super(init);
        this.type = 'width';
        this.color = 'primary';
        this.minValue = 1;
        this.value = 3;
        this.maxValue = 12;
        this.inlineView = true;
        this.isMaximumWidth = true;
        this.displayFormat = function formatLabel(value: number) {
            return Math.round((value / 12) * 100) + '%';
        };
        this.options = [
            new Models.Option({ id: 'width-small', value: 'کوچک' }),
            new Models.Option({ id: 'width-medium', value: 'متوسط' }),
            new Models.Option({ id: 'width-large', value: 'بزرگ' }),
            new Models.Option({ id: 'width-select', value: 'انتخاب' })
        ]
        Object.assign(this, init);

    }

    minValue: number;
    maxValue: number;
    displayFormat?: any;
    color: string;
}