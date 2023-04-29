//criardo Nome, data de fechamento, Fase
import { LightningElement, track } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CreateOpportunity extends LightningElement {
  @track opportunityName = '';
  @track opportunityStage = '';
  @track opportunityCloseDate = '';
  @track opportunityAmount = '';

  handleNameChange(event) {
    this.opportunityName = event.target.value;
  }

  handleStageChange(event) {
    this.opportunityStage = event.target.value;
  }

  handleCloseDateChange(event) {
    this.opportunityCloseDate = event.target.value;
  }


  handleAmountChange(event) {
    this.opportunityAmount = event.target.value;
  }

  handleClickClear() {
    this.opportunityName = "";
    this.opportunityStage = "";
    this.opportunityClosetDate = "";
    this.sopportunityClosetAmount = "";
}

  handleSubmit(event) {
    event.preventDefault();
    

    const fields = {
      Name: this.opportunityName,
      StageName: this.opportunityStage,
      CloseDate: this.opportunityCloseDate,
      Amount: this.opportunityAmount,
    };
    

    const recordInput = { apiName: 'Opportunity', fields };
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

}
