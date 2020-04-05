import * as Interfaces from '../../exports/interface.namespace';

export interface Form {
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