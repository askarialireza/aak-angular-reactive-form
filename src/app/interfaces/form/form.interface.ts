import * as Interfaces from '../../interfaces/index';

export interface Form {
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
