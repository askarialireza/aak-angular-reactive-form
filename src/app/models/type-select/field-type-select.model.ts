import * as Interfaces from "../../exports/interface.namespace";
import * as Models from '../../exports/model.namespace';
export class FieldTypeSelect extends Models.BaseTypeSelect implements Interfaces.FieldTypeSelect {

    constructor(init?: Partial<FieldTypeSelect>) {
        super(init);
        Object.assign(this, init);
    }
    type: string;
    fieldItems: Interfaces.BaseFieldItem[];
}