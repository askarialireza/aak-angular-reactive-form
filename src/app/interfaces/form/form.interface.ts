import * as Interfaces from '../../interfaces/index';
import * as Models from '../../models/index';
export interface Form {
    id: string;
    name: string;
    date: string;
    isActive: string;
    beginDate: string;
    endDate: string;
    fieldItems: Models.BaseFieldItem[];
    formUiSetting: Interfaces.FormUISetting;
    formResultSetting: Interfaces.FormResultSetting;
}