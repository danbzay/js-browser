import { validation as tripValidation } from '../src/js/trip-calendar';
import { nameInputErrors, priceInputErrors } 
  from './data-for-tests';

const today =  (new Date(Date.parse(new Date) 
  - (new Date).getTimezoneOffset()*60*1000)).toISOString().slice(0, 10);
const tomorrow = (new Date(Date.parse(today) + 24*60*60*1000))
  .toISOString().slice(0, 10);
const yesterday = (new Date(Date.parse(today) - 24*60*60*1000))
  .toISOString().slice(0, 10);

test('Should return correct boolean', () => {
  expect(tripValidation.outbound(today)).toBe(true);
  expect(tripValidation.outbound(yesterday)).toBe(false);
  expect(tripValidation.inbound(today, yesterday)).toBe(false);
  expect(tripValidation.inbound(today, tomorrow)).toBe(true);
});
