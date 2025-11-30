import { validation as crmValidation } from '../src/js/crm';
import { nameInputErrors, priceInputErrors } 
  from './data-for-tests';

//crm
test.each(nameInputErrors)(
'Should return correct error message', (n, e) => {
  expect(crmValidation.name.isValid(n)).toBe(e)
});
test.each(priceInputErrors)('Should return correct error message', (p, e) => {
  expect(crmValidation.price.isValid(p.replace(/ /g,''))).toBe(e)
});


