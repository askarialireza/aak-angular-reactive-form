import * as Interfaces from '../../interfaces/index';

export class FieldType implements Interfaces.FieldType {

    constructor(init?: Partial<FieldType>) {
        Object.assign(this, init);
    }
    public title: string;
    public group: string;
    public items: Interfaces.BaseTypeSelect[];
}
