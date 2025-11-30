import { validation as crmValidation } from '../src/js/crm';

export const compact = html => html.replace(/\n/g, '').replace(/^ *</g, '<')
      .replace(/> *</g, '><').replace(/> *$/g, '>');

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

