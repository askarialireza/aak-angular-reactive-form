import * as Interfaces from "../../exports/interface.namespace";

export class GroupTypeSelect  implements Interfaces.BaseTypeSelect {

    constructor(init?: Partial<GroupTypeSelect>) {
        Object.assign(this, init);
    }

    groupName: string;
    title: string;
    icon: string;
    hint: string;
}