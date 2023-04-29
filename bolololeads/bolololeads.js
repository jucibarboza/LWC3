import { LightningElement, track } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class bolololeads extends LightningElement {

  @track inputs = {
    firstname: '',
    lastname: '',
    email: '',
    website: '',
    company: '',
    annualrevenue: ''
  };

  handleInputChange(event) {
    let nameinput = event.target.name;
    let value = event.target.value;

    this.inputs = {
      ...this.inputs,
      [nameinput]: value
    };
  }

  handleClick() {
    const fields = {
      FirstName: this.inputs.firstname,
      LastName: this.inputs.lastname,
      Email: this.inputs.email,
      Website: this.inputs.website,
      Company: this.inputs.company,
      AnnualRevenue: this.inputs.annualrevenue
    };

    const recordInput = { apiName: 'Lead', fields };
    createRecord(recordInput)
      .then(() => {
        this.dispatchEvent(
          new ShowToastEvent({
            title: 'Sucesso!',
            message: 'Oportunidade criada.',
            variant: 'success',
          }),
        );
        this.resetForm();
      })
      .catch((error) => {
        this.dispatchEvent(
          new ShowToastEvent({
            title: 'Erro!',
            message: error.body.message,
            variant: 'error',
          }),
        );
      });
  }

  resetForm() {
    this.inputs = {
      firstname: '',
      lastname: '',
      email: '',
      website: '',
      company: '',
      annualrevenue: ''
    };
  }
}

