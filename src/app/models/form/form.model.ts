import * as Interfaces from '../../interfaces/index';
import * as Models from '../../models/index';
import { Guid } from 'guid-typescript';

export class Form implements Interfaces.Form {

    constructor(init?: Partial<Form>) {

        this.id = init.id || Guid.create().toString();
        this.name = init.name || Guid.create().toString();
        this.formUiSetting = init.formUiSetting || new Models.FormUISetting();
        Object.assign(this, init);

    }

    id: string;
    name: string;
    date: string;
    isActive: string;
    beginDate: string;
    endDate: string;
    fieldItems: Interfaces.BaseFieldItem[];
    formUiSetting: Interfaces.FormUISetting;
    formResultSetting: Interfaces.FormResultSetting;
}