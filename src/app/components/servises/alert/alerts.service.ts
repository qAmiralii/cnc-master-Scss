import { Injectable } from '@angular/core';
import { AlertModel } from '../../../models/alertModel';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  private alertList: AlertModel[] = [];

  newAlert(content: string, deleteTime: number, Asuccess = true, Awarning = false, Afalse = false) {
    let alert = new AlertModel(content, Asuccess, Awarning, Afalse);
    this.alertList.push(alert);
    setTimeout(()=>{
      this.alertList = this.alertList.filter(x => alert !=x)
    },deleteTime)
  }

  openAlert(){
    return this.alertList;
  }
}
