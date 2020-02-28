import { FieldItem } from './field-item';
import { Guid } from 'guid-typescript';

export class Form {

    constructor(options: {
        id?: string,
        name?: string,
        date?: string,
        action?: string,
        isHorizontal?: boolean,
        fieldItems?: FieldItem[],
        editMode?: boolean,
    } = {}) {
        this.id = options.id || Guid.create().toString();
        this.name = options.name || Guid.create().toString();
        this.date = options.date || null;
        this.date = options.action || null;
        this.isHorizontal = options.isHorizontal || false;
        this.fieldItems = options.fieldItems || null;
        this.editMode = options.editMode || false;
    }

    public id?: string;
    public name?: string;
    public date?: string;
    public action?: string;
    public isHorizontal?: boolean;
    public fieldItems?: FieldItem[];
    public editMode?: boolean;
}
