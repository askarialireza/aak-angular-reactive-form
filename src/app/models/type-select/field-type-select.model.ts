import * as Interfaces from "../../interfaces/index";
import * as Models from '../../models/index';
export class FieldTypeSelect extends Models.BaseTypeSelect implements Interfaces.FieldTypeSelect {

    constructor(init?: Partial<FieldTypeSelect>) {
        super(init);
        Object.assign(this, init);
    }
    type: string;
    fieldItems: Interfaces.BaseFieldItem[];
}