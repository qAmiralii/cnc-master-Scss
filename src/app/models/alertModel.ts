export class AlertModel {
    alertContent: string = "";
    Asuccess: boolean = true;
    Awarning: boolean = false;
    Afalse: boolean = false;
    constructor(alertContent: string, Asuccess: boolean, Awarning: boolean, Afalse: boolean) {
        this.alertContent = alertContent;
        if (Asuccess) {
            this.Asuccess = Asuccess;
        } if (Awarning) {
            this.Awarning = Awarning;
        } if (Afalse) {
            this.Afalse = Afalse;
        }

    }

}