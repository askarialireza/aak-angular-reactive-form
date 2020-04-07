import * as Interfaces from "../../interfaces/index";

export class GroupTypeSelect  implements Interfaces.BaseTypeSelect {

    constructor(init?: Partial<GroupTypeSelect>) {
        Object.assign(this, init);
    }

    groupName: string;
    title: string;
    icon: string;
    hint: string;
}