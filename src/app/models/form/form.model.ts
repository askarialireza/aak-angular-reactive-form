import * as Interfaces from '../../exports/interface.namespace';
import * as Models from '../../exports/model.namespace';
import { Guid } from 'guid-typescript';

export class Form implements Interfaces.Form {

    constructor(init?: Partial<Form>) {

        this.id = init.id || Guid.create().toString();
        this.name = init.name || Guid.create().toString();
        this.uiSetting = init.uiSetting || new Models.FormUISetting();
        Object.assign(this, init);

    }

    id: string;
    name: string;
    date: string;
    isActive: string;
    beginDate: string;
    endDate: string;
    fieldItems: Interfaces.BaseFieldItem[];
    uiSetting: Interfaces.FormUISetting;
    resultSetting: Interfaces.FormResultSetting;
}