import { LightningElement, track } from 'lwc';

export default class Exef1 extends LightningElement {
    mostra = false;
    @track firstNumber;
    @track secondNumber;
    resultValue;
    handleNumberOeChange(event) {
        this.firstNumber = parseInt(event.target.value);
    }
    handleNumberTwoChange(event) {
        this.secondNumber = parseInt(event.target.value);
    }
    adi() {
        this.resultValue = parseInt(this.firstNumber) + parseInt(this.secondNumber);
    }
    mult() {
        this.resultValue = this.firstNumber * this.secondNumber;
    }
    sub() {
        this.resultValue = this.firstNumber - this.secondNumber;
    }
    div() {
        this.resultValue = this.firstNumber / this.secondNumber;
    }



    handleOnClick() {

        this.mostra = !this.mostra;
    }
    handleClickClear() {
        this.resultValue = "";
        this.firstNumber = "";
        this.secondNumber = "";
    }
}