/**
 * @jest-environment jsdom
 */
import {CreditCardValidator} from 
  '../../components/credit-card-validator/credit-card-validator';
import testNumbers from '../../../e2e/fake-credit-card-numbers.json';

let formHTML = `
<form class="credit-card-validator">
    <ul class="payment-networks-logos">
        <li data-name="VISA"></li>
        <li data-name="MASTERCARD"></li>
        <li data-name="MIR"></li>
        <li data-name="UNIONPAY"></li>
        <li data-name="UNKNOWN"></li>
    </ul>
    <input type="text" name="cardNumber">
    <button type="submit">Click to Validate</button>
    <span class="message-area"></span>
</form>`.trim();
document.body.innerHTML = formHTML;
const validator = new CreditCardValidator('form');

test('page should render', () => {
  expect(validator.form.outerHTML).toBe(formHTML);
});

test.each(testNumbers)('should correctly validate number', 
  (network, number) => { 
  validator.form.elements.cardNumber.value = number;
  validator.form.querySelector('button').click();
  expect(validator.messageArea.textContent).toBe(
    network != 'UNCORRECT' ? 'Card number successfully validated' :
    'Card number not validated');
});

test.each(testNumbers)('should correctly get network', 
  (network, number) => {
  validator.form.elements.cardNumber.value = number;
  validator.form.querySelector('button').click();
  if (network != 'UNCORRECT') {
    expect(validator.paymentNetworksLogos.querySelector('.selected').dataset
      .name).toBe(network);
  }
});
 

