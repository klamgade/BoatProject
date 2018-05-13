import { Injectable } from '@angular/core';
import { NavigationalSafetyEquipment } from 'models/vessel-equipment/navigational-safety-equipment.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public saveItem(key: string, item: any) {
    debugger;
    window.sessionStorage.removeItem(key);
    window.sessionStorage.setItem(key, JSON.stringify(item));
    console.log("key", item);
  }

  // public getItem(key:string): NavigationalSafetyEquipment{
  //   debugger;
  //   let item: any = window.sessionStorage.getItem(key);
  //   if(item == null){
  //     return new NavigationalSafetyEquipment();
  //   }
  //   else {
  //     return <NavigationalSafetyEquipment>JSON.parse(item);
  //   }
    //}
  }

