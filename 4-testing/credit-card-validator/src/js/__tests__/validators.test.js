import { paymentNetworks, checkLuhnAlgorithm, getPaymentNetwork } from
  '../../components/credit-card-validator/credit-card-validator';

import testNumbers from '../../../e2e/fake-credit-card-numbers.json';

test.each(testNumbers)('should correctly validate number', 
  (network, number) =>  
    expect(checkLuhnAlgorithm(number)).toBe(network != 'UNCORRECT')
);

test.each(testNumbers)('should correctly get network', 
  (network, number) => {
  if (network != 'UNCORRECT') {
    expect(getPaymentNetwork(number)).toBe(network);
  }
});
 
 
