import * as Interfaces from '../../exports/interface.namespace';

export class FormResultSetting implements Interfaces.FormResultSetting {

    constructor(init?: Partial<FormResultSetting>) {
        Object.assign(this, init);
    }

    url: string;
    action: string;
    connection: string;
    api: string;
}