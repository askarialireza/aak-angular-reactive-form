import { TextFieldItem } from './text-field-item.model';
import * as Interfaces from '../../interfaces/field-item/summernote-field-item.interface';

export class SummernoteFieldItem extends TextFieldItem implements Interfaces.SummernoteFieldItem {

    constructor(init?: Partial<SummernoteFieldItem>) {
        super(init);
        this.type = 'summernote';
        this.height = init.height || 150;
        Object.assign(this, init);
    }

    height: number;
    uploadPath: string;

}