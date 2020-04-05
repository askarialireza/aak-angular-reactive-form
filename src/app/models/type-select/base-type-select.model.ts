import * as Interfaces from "../../exports/interface.namespace";

export class BaseTypeSelect implements Interfaces.BaseTypeSelect {

    constructor(init?: Partial<BaseTypeSelect>) {
        Object.assign(this, init);
    }
    
    groupName: string;
    title: string;
    icon: string;
    hint: string;
}