export class FormInterfaceSetting {

    constructor(options: {
        titleAlign?: string,
        backColor?: string,
        foreColor?: string,
        backgroundImage?: string,
        isEditModeEnabled?: boolean,
        isHorizontalModeEnabled?: boolean,
        showTodayDate?: boolean,
        showLogo?: boolean,
    } = {}) {
        this.titleAlign = options.titleAlign || 'left';
        this.backColor = options.backColor || '#ffffff';
        this.foreColor = options.foreColor || '#000000';
        this.backgroundImage = options.backgroundImage || null;
        this.isEditModeEnabled = options.isEditModeEnabled || false;
        this.isHorizontalModeEnabled = options.isHorizontalModeEnabled || false;
        this.showTodayDate = options.showTodayDate || false;
        this.showLogo = options.showLogo || false;
    }

    public titleAlign: string;
    public backColor: string;
    public foreColor: string;
    public backgroundImage: string;
    public isEditModeEnabled: boolean;
    public isHorizontalModeEnabled: boolean;
    public showTodayDate: boolean;
    public showLogo: boolean;

}
