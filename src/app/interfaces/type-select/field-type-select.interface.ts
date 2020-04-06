import * as Interfaces from '../../exports/interface.namespace';

export interface FieldTypeSelect extends Interfaces.BaseTypeSelect {
    type: string;
    fieldItems: Interfaces.BaseFieldItem[];
}