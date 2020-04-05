import * as Interfaces from '../../exports/interface.namespace';

export class FormUISetting implements Interfaces.FormUISetting {

    constructor(init?: Partial<FormUISetting>) {
        this.isEditModeEnabled = false;
        this.isHorizontalModeEnabled = false;
        Object.assign(this, init);
    }

    titleAlign: string;
    backColor: string;
    foreColor: string;
    backgroundImage: string;
    isEditModeEnabled: boolean;
    isHorizontalModeEnabled: boolean;
    showTodayDate: boolean;
    showLogo: boolean;
}