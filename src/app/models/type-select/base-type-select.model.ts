import * as Interfaces from "../../interfaces/index";

export class BaseTypeSelect implements Interfaces.BaseTypeSelect {

    constructor(init?: Partial<BaseTypeSelect>) {
        Object.assign(this, init);
    }
    
    groupName: string;
    title: string;
    icon: string;
    hint: string;
}