import { validation as crmValidation } from '../src/js/crm';
import { validation as tripValidation } from '../src/js/trip-calendar';
//popover 7, crm 14, trip-calendar 88 
//remove spaces between tags
export const compact = html => html.replace(/\n/g, '').replace(/^ *</g, '<')
      .replace(/> *</g, '><').replace(/> *$/g, '>');

export const bubbleHTML0 = `
  <div>
    <h1>Popover title</h1>
    <p>And here's some amasing content. It's very engaging. Right?</p>
  </div>
  <div></div>`;

export const crmHTML0 = `
<div class="crm">
    <h1>Товары<span class="create">+</span></h1>
    <table class="products">
      <thead>
        <tr><th>Название</th><th>Стоимость</th><th>Действия</th></tr>
      </thead>
      <tbody><tr><td>IPhone XR</td><td>60 000</td><td><div class="read"></div><div class="delete"></div></td></tr><tr><td>Samsung Galaxy S10+</td><td>80 000</td><td><div class="read"></div><div class="delete"></div></td></tr><tr><td>Huawei View</td><td>50 000</td><td><div class="read"></div><div class="delete"></div></td></tr></tbody>
    </table>
  </div>`;
  
export const formProductHTML0 = `
<form class="product">
      <label for="name">Название</label><input name="name" type="text" pattern="^[ ]*[^_\\{\\} \\&lt;\\&gt;][^_\\{\\}\\&lt;\\&gt;]{1,48}[^_\\{\\}\\&lt;\\&gt;][ ]*$">
      <label for="price">Стоимость</label><input name="price" type="text" pattern="^[ ]*[\\d ]*\\.?[\\d ]+$">
      <button name="save" type="submit">Сохранить</button>
      <button name="cancel" type="button">Отмена</button></form>`;

export const nameInputErrors = [
  ['123456789012345678901234567890123456789012345678901', 
    crmValidation.name.patternMessage],
  ['Суперфон_1', crmValidation.name.patternMessage],
  ['{Суперфон}', crmValidation.name.patternMessage], 
  ['<Суперфон>', crmValidation.name.patternMessage],
  ['IPhone XR', crmValidation.name.invalidMessage],
  ['a', crmValidation.name.patternMessage],
];

export const priceInputErrors = [
  ['-112345', crmValidation.price.patternMessage],
  ['3 456 789 012', crmValidation.price.invalidMessage],
  ['123f', crmValidation.price.patternMessage],
  ['', crmValidation.price.patternMessage],
];

export const createHTML0 = `
<table class="products">
      <thead>
        <tr><th>Название</th><th>Стоимость</th><th>Действия</th></tr>
      </thead>
      <tbody><tr><td>IPhone XR</td><td>60 000</td><td><div class="read"></div><div class="delete"></div></td></tr><tr><td>Samsung Galaxy S10+</td><td>80 000</td><td><div class="read"></div><div class="delete"></div></td></tr><tr><td>Huawei View</td><td>50 000</td><td><div class="read"></div><div class="delete"></div></td></tr><tr><td>Nubia Neo 3</td><td>20 000</td><td><div class="read"></div><div class="delete"></div></td></tr></tbody>
    </table>`

export const updateHTML0 = `
  <table class="products">
    <thead>
      <tr><th>Название</th><th>Стоимость</th><th>Действия</th></tr>
    </thead><tbody>
      <tr><td>IPhone 16</td><td>70 000</td>
        <td><div class="read"></div><div class="delete"></div></td></tr>
      <tr><td>Samsung Galaxy S10+</td><td>80 000</td>
        <td><div class="read"></div><div class="delete"></div></td></tr>
      <tr><td>Huawei View</td><td>50 000</td>
        <td><div class="read"></div><div class="delete"></div></td></tr>
      <tr><td>Nubia Neo 3</td><td>20 000</td>
        <td><div class="read"></div><div class="delete"></div></td></tr>
    </tbody>
  </table>`;

export const deleteHTML0 = `
  <table class="products">
    <thead>
      <tr><th>Название</th><th>Стоимость</th><th>Действия</th></tr>
    </thead><tbody>
      <tr><td>IPhone 16</td><td>70 000</td>
        <td><div class="read"></div><div class="delete"></div></td></tr>
      <tr><td>Huawei View</td><td>50 000</td>
        <td><div class="read"></div><div class="delete"></div></td></tr>
      <tr><td>Nubia Neo 3</td><td>20 000</td>
        <td><div class="read"></div><div class="delete"></div></td></tr>
    </tbody>
  </table>`;

//trip calendar

export const today =  (new Date(Date.parse(new Date) 
  - (new Date).getTimezoneOffset()*60*1000)).toISOString().slice(0, 10);
export const tomorrow = (new Date(Date.parse(today) + 24*60*60*1000))
  .toISOString().slice(0, 10);

export const tripHTML0 = `
<form class="trip-calendar">
      <label>Откуда</label><input type="text">
      <label> ↑↑ ↓↓
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
        <input name="inbound" type="date" required="" min="` + 
      today + `"></div>
      <button name="buy" type="submit">Купить билет</button>
</label></form>`;

export const inboundHTML0 = tripHTML0.replace(" hidden", "")
  .replace(today + '"></div>', tomorrow + '"></div>');
