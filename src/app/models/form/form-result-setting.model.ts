import * as Interfaces from '../../interfaces/index';

export class FormResultSetting implements Interfaces.FormResultSetting {

    constructor(init?: Partial<FormResultSetting>) {
        Object.assign(this, init);
    }

    url: string;
    action: string;
    connection: string;
    api: string;
}