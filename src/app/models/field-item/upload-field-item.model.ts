import { BaseFieldItem } from './base-field-item.model';

export class UploadFieldItem extends BaseFieldItem {

    constructor(init?: Partial<UploadFieldItem>) {
        super(init);
        this.type = 'upload';
        Object.assign(this, init);
    }
}