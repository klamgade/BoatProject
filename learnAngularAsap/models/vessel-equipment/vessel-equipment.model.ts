import { ServiceFrequencyType } from "./vessel-interface/vessel-interface.interface";

export class VesselEquipment {

    Image: string;
    Equipment:string[];
    Description:string;
    Location: string;
    CertificateNumber: number;
    Certificate: string;
    ExpiryIndicator: any;
    ExpirtyDate:Date;
    LastSerivceDate: Date;
    ServiceFrequency:ServiceFrequencyType;


    constructor(){

    }

    // constructor(private image:string, private equipment:string[], private location: string, 
    //     private expiryIndicator:any, private expiryDate:Date, private serviceFrequency){

    //    this.Image = image;
    //    this.Equipment = equipment;
    //    this.Location = location;
    //    this.ExpirtyDate = expiryIndicator;
    //    this.ExpirtyDate = expiryDate;
    //    this.ServiceFrequency = serviceFrequency;     
    // }
}
