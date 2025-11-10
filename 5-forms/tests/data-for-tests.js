export const compact = html => html.replace(/\n/g, '').replace(/^ *</g, '<')
      .replace(/> *</g, '><').replace(/> *$/g, '>');

export const bubbleHTML0 = `
  <div>
    <h1>Popover title</h1>
    <p>And here's some amasing content. It's very engaging. Right?</p>
  </div>
  <div></div>`;

export const crmHTML0 = `
  <div class='crm'>
    <h1>Товары</h1><div class='create'>+</div>
    <table class='products'>
      <tr><th>Название</th><th>Стоимость</th><th>Действия</th></tr>
      <tr><td>IPhone XR</td><td>60 000</td>
        <td><div class='read'></div><div class='delete'></div></td></tr>
      <tr><td>Samsung Galaxy S10+</td><td>80 000</td>
        <td><div class='read'></div><div class='delete'></div></td></tr>
      <tr><td>Huawei View</td><td>50 000</td>
        <td><div class='read'></div><div class='delete'></div></td></tr>
    </table>
  </div>`;
  
export const formProductHTML0 = `
  <form class='product'>
    <label for='name'>Название</label><input name='name' type='text'>
    <label for='price'>Стоимость</label><input name='price' type='text'>
    <button name='save' type='submit'>Сохранить</button>
    <button name='cancel' type='submit'>Отмана</button>
  </form>`;
