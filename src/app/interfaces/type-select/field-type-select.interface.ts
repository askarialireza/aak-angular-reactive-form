import * as Interfaces from '../../interfaces/index';

export interface FieldTypeSelect extends Interfaces.BaseTypeSelect {
    type: string;
    fieldItems: Interfaces.BaseFieldItem[];
}