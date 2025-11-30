import './crm.css'

const products = [
  {name: "IPhone XR", price: 60000},
  {name: "Samsung Galaxy S10+", price: 80000},
  {name: "Huawei View", price: 50000}
];

export const validation = {
  name: { 
    patternMessage: "Название должно быть от 3 до 50 символов " + 
      "и не должно содержать _, {, }, <, >", 
    pattern: 
      "^[ ]*[^_\\{\\} \\<\\>][^_\\{\\}\\<\\>]{1,48}[^_\\{\\}\\<\\>][ ]*$", 
    invalidMessage: "Такое название уже используется",
    //Return invalid messages or valid message '' 
    isValid: (name, update=false) => 
      !RegExp(validation.name.pattern).test(name) ? 
        validation.name.patternMessage : update ? 
        '' : products.find(p => name === p.name) ? 
          validation.name.invalidMessage : ''
  },
  price: { 
    pattern:"^[ ]*[\\d ]*\\.?[\\d ]+$", 
    patternMessage: "Цена должна быть неотрицательным числом", 
    invalidMessage: "Цена не должна превышать 2 147 483 647",
    //Return invalid messages or valid message '' 
    isValid: price => !RegExp(validation.price.pattern).test(price) ? 
      validation.price.patternMessage : Number(price) > 2147483647 ? 
        validation.price.invalidMessage : ''
  }
}

export class CRM {
  constructor(element) {
    if(typeof element === 'string') {
      this.crm = document.querySelector(element);
    } else {
      this.crm = element;
    }

    this.productsTable = this.crm.querySelector('.products tbody');
    this.renderProductsTable();
    this.productForm = this.createProductForm();
    //Add product click
    this.crm.querySelector('.create').addEventListener('click', () => {
      this.selectedProductIndex = null;
      this.productForm.elements.name.value = '';
      this.productForm.elements.price.value = '';
      this.crm.append(this.productForm);
    });
  }

  renderProductsTable() {
    this.productsTable.innerHTML = products.reduce((a,c) => a + 
      '<tr><td>' + c.name + '</td><td>' + /* 1234.5 to '1 235' */
      c.price.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ' ') +
      '</td><td><div class="read"></div><div class="delete"></div></td></tr>',
    '');
    for (let i = 0; i < products.length; i++) {
      //Add click event to edit element
      this.productsTable.children[i].children[2].children[0]
      .addEventListener('click', () => {
        this.selectedProductIndex = i;  
        this.productForm.elements.name.value = products[i].name;
        this.productForm.elements.price.value = products[i].price;
        this.crm.append(this.productForm);
      });
      //Add click event to delete element
      this.productsTable.children[i].children[2].children[1]
      .addEventListener('click', () => { 
        this.productsTable.children[i].remove();
        products.splice(i, 1);
        this.renderProductsTable();
      });
    }
  }

  createProductForm() {
    const productForm = document.createElement('form');
    //base html
    productForm.classList.add('product');
    productForm.innerHTML = `
      <label for='name'>Название</label><input name='name' type='text'>
      <label for='price'>Стоимость</label><input name='price' type='text'>
      <button name='save' type='submit'>Сохранить</button>
      <button name='cancel' type='button'>Отмена</button>`;
    //set validation
    for (const name in validation) {
      productForm.elements[name]
        .setAttribute('pattern', validation[name].pattern);
      productForm.elements[name].addEventListener('invalid', ev => 
        ev.target.validity.patternMismatch ? 
          ev.target.setCustomValidity(validation[name].patternMessage) : 0);
    }

    productForm.addEventListener('submit', (ev) => {
      ev.preventDefault();
      //check validity
      let name = productForm.elements.name.value.trim();
      let message = validation.name.isValid(name, 
        this.selectedProductIndex != null);
      if (message) {
        productForm.elements.name.setCustomValidity(message);
        productForm.elements.name.reportValidity();
        return;
      }
      let price = productForm.elements.price.value.replace(/ /g,'');
      message = validation.price.isValid(price);
      if (message) {
        productForm.elements.price.setCustomValidity(message);
        productForm.elements.price.reportValidity();
        return;
      }
      //save results
      price = Number(price);
      if (this.selectedProductIndex != null) {
        products[this.selectedProductIndex] = {name: name, price: price};
      } else {
        products.push({name: name, price: price});
      }

      productForm.remove();
      this.renderProductsTable();
    });

    productForm.addEventListener('change', 
      ev => ev.target.setCustomValidity(''));

    productForm.elements.cancel.addEventListener('click', () => 
      productForm.remove());

    return productForm;   
  }
}
