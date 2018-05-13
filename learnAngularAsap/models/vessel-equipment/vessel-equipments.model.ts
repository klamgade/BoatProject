import { NavigationalSafetyEquipment } from "./navigational-safety-equipment.model";
import { LifesavingSafetyEquipment } from "./lifesaving-safety-equipment";

export class VesselEquipments {

    navigationSafetyEquipment: NavigationalSafetyEquipment;
    lifesavingSafetyEquipment: LifesavingSafetyEquipment;

    constructor(nav: NavigationalSafetyEquipment, lifesaving:LifesavingSafetyEquipment){
        this.navigationSafetyEquipment = nav;
        this.lifesavingSafetyEquipment = lifesaving;
    }
}
