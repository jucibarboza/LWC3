
import { LightningElement, wire } from 'lwc';
import get5LastOpp from '@salesforce/apex/listaContasController.get5LastOpp';



export default class ApexWireMethodToProperty extends LightningElement {
  
    @wire(get5LastOpp) opps;
  
}


