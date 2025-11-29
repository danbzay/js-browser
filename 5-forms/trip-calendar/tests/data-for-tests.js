import { validation as crmValidation } from '../src/js/crm';
import { validation as tripValidation } from '../src/js/trip-calendar';

//remove spaces between tags
export const compact = html => html.replace(/\n/g, '').replace(/^ *</g, '<')
      .replace(/> *</g, '><').replace(/> *$/g, '>');

export const today =  (new Date(Date.parse(new Date) 
  - (new Date).getTimezoneOffset()*60*1000)).toISOString().slice(0, 10);
export const tomorrow = (new Date(Date.parse(today) + 24*60*60*1000))
  .toISOString().slice(0, 10);

export const tripHTML0 = `
<form class="trip-calendar">
      <label>Откуда</label><input type="text">
      <label> ↑↑ ↓↓</label>
      <label>Kуда:</label><input type="text">
      <label>Взрослые:</label><input type="number">
      <label>Дети:</label><input type="number">
      <label>Дети до 10 лет:</label><input type="number">
      <label>Дети до 5 лет:</label><input type="number">
      <label>Туда и обратно</label><input name="return" type="checkbox">
      <label>Дата:</label>
      <input name="outbound" type="date" required="" min="` + today + `">
      <div class="hide hidden">
        <label for="inbound">Дата обратно:</label>
        <input name="inbound" type="date" min="` + 
      today + `"></div>
      <button name="buy" type="submit">Купить билет</button>
</form>`;

export const inboundHTML0 = tripHTML0.replace(" hidden", "")
  .replace(today + '"></div>', tomorrow + '" required=""></div>');
