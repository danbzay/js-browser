import './credit-card-validator.css';

export const paymentNetworks = [
	{name: 'VISA', regex: /^4\d{12,18}$/},
	{name: 'MASTERCARD',  
   regex: /^(5[1-5]\d\d|2(22[1-9]|2[3-9]\d|[3-6]\d\d|7[0-1]\d\d|720))\d{12}$/},
	{name: 'MIR', regex: /^220[0-4]\d{12,15}$/},
	{name: 'UNIONPAY', regex: /^62\d{14,17}$/},
  {name: 'UNKNOWN', regex: /.*/}
]


export class CreditCardValidator {
  constructor(element) {
    if(typeof element === 'string') {
      element = document.querySelector(element);
    }

    this.form = element;
    this.paymentNetworksLogos = 
      this.form.querySelector('.payment-networks-logos');
    this.messageArea = this.form.querySelector('.message-area');
    
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.form.addEventListener('submit', this.onSubmitHandler);
  }

  onSubmitHandler(e) {
    e.preventDefault();
    let cardNumber = String(this.form.elements.cardNumber.value);
    const selected = this.paymentNetworksLogos.querySelector('.selected');
    if (selected) {
      selected.classList.remove('selected'); 
    }
    if (checkLuhnAlgorithm(cardNumber)) {
      this.messageArea.textContent = 'Card number successfully validated';
      this.paymentNetworksLogos.querySelector('[data-name=' + 
        getPaymentNetwork(cardNumber) + ']').classList.add('selected');
    } else {
      this.messageArea.textContent = 'Card number not validated';
    }
  }
  
}

export function checkLuhnAlgorithm(stringCardNumber) {
  const cardNumber = Array.from(stringCardNumber, Number);  
  return cardNumber.pop() === (10 - cardNumber.reverse().reduce((a,c,i) => { 
    return a + (c * (1 + (i + 1) % 2) > 9 ? 
         c * (1 + (i + 1) % 2) - 9 : 
         c * (1 + (i + 1) % 2))
  }, 0) % 10) % 10;
}

export function getPaymentNetwork(stringCardNumber = '' ) {
  return paymentNetworks.find(n => n.regex.test(stringCardNumber)).name;
}
 
