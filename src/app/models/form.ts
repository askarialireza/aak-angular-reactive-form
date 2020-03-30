import { FieldItem } from './field-item';
import { Guid } from 'guid-typescript';
import { FormInterfaceSetting } from './form-interface-setting';

export class Form {

    constructor(options: {
        id?: string,
        name?: string,
        date?: string,
        action?: string,
        isHorizontal?: boolean,
        fieldItems?: FieldItem[],
        editMode?: boolean,
        url?: string,
        isActive?: boolean,
        startDate?: Date,
        endDate?: Date,
        value?: string,
        logo?: string,
        interfaceSetting?: FormInterfaceSetting,
    } = {}) {
        this.id = options.id || Guid.create().toString();
        this.name = options.name || Guid.create().toString();
        this.date = options.date || null;
        this.action = options.action || null;
        this.isHorizontal = options.isHorizontal || false;
        this.fieldItems = options.fieldItems || null;
        this.editMode = options.editMode || false;
        this.value = options.value || null;
        this.logo = options.logo || null;
        this.interfaceSetting = options.interfaceSetting || null;
    }

    public id?: string;
    public name?: string;
    public logo?: string;
    public date?: string;
    public action?: string;
    public isHorizontal?: boolean;
    public fieldItems?: FieldItem[];
    public editMode?: boolean;
    public url?: string;
    public isActive?: boolean;
    public startDate?: Date;
    public endDate?: Date;
    public value?: string;
    public interfaceSetting?: FormInterfaceSetting;
}
