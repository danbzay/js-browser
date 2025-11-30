import puppeteer from 'puppeteer';
import { fork } from 'child_process';

// popover - 37; crm - 67; trip-calendar - 158; 

import { compact,  
  crmHTML0, formProductHTML0, nameInputErrors,  priceInputErrors, createHTML0, 
  updateHTML0, deleteHTML0,
} from './data-for-tests.js';

describe('Page start', () => {
  let browser, page, input, submit, toggle;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
      await new Promise((resolve, reject) => {
        server.on('error', reject);
        server.on('message', (message) => {
          if (message === 'ok') {
            resolve();
          }
        });
      });
    browser = await puppeteer.launch({
      browser: 'firefox',
      //headless: false,
      //slowMo: 100,
      //devtools: true,
    });
    page = await browser.newPage();
    await page.goto('http://localhost:9000');
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  jest.setTimeout(30000); // default puppeteer timeout

  test('should correctly render initial vidget', async () => {
    let crmHTML1 = await page.$eval('.crm', node => node.outerHTML);

    expect(compact(crmHTML1)).toBe(compact(crmHTML0));
  });

  test('should correctly render product form after click "+"', async () => {
    await page.$('.create').then(node => node.click());
    let formProductHTML1 = await page.$eval('.product', node => node.outerHTML);
    expect(compact(formProductHTML1)).toBe(compact(formProductHTML0));
    await expect(page.$eval('.product [name="name"]', node => node.value))
      .resolves.toBe('');
    await expect(page.$eval('.product [name="price"]', node => node.value))
      .resolves.toBe('');
  });

  test.each(nameInputErrors)(
  'should correctly show input name validation errors in create form', 
  async (inp, msg) => {
    await page.$eval('.product [name="name"]', 
      (node, inp) => node.value = inp, inp);
    await page.$eval('.product [name="price"]', node => node.value = 10);
    await page.$eval('.product [name="save"]', node => node.click());

    expect(await page.$eval('.product [name="name"]', 
      node => node.validationMessage)).toBe(msg);
    await page.$eval('.product [name="name"]', 
      node => node.setCustomValidity(''));
  });

  test.each(priceInputErrors)(
  'should correctly show input price validation errors', async (inp, msg) => {
    await page.$eval('.product [name="name"]', 
      node => node.value = 'Correct name');
    await page.$eval('.product [name="price"]', 
      (node, inp) => node.value = inp, inp);
    await page.$eval('.product [name="save"]', node => node.click());

    expect(await page.$eval('.product [name="price"]', 
      node => node.validationMessage)).toBe(msg);
    await page.$eval('.product [name="price"]', 
      node => node.setCustomValidity(''));
  });

  test('should correctly create product after click "save"', async () => {
    await page.$eval('.product [name="name"]', 
      node => node.value = 'Nubia Neo 3');
    await page.$eval('.product [name="price"]', 
      node => node.value = '20 000');
    await page.$eval('.product [name="save"]', node => node.click());
    await new Promise((res) => setTimeout(res, 5000));

    expect(await page.$('.product')).toBe(null);
    let createHTML1 = await page.$eval('.products', node => node.outerHTML);
    expect(compact(createHTML1)).toBe(compact(createHTML0));
  });

  test('should correctly render product form after click "read"', async () => {
    await page.$eval('.read', node => node.click());
    let formProductHTML1 = await page.$eval('.product', node => node.outerHTML);
    expect(compact(formProductHTML1)).toBe(compact(formProductHTML0));
    await expect(page.$eval('.product [name="name"]', node => node.value))
      .resolves.toBe('IPhone XR');
    await expect(page.$eval('.product [name="price"]', node => node.value))
      .resolves.toBe('60000');
  });

  test('should correctly update product after click "save"', async () => {
    await page.$eval('.product [name="name"]', 
      node => node.value = 'IPhone 16');
    await page.$eval('.product [name="price"]', 
      node => node.value = '70 000');
    await page.$eval('.product [name="save"]', node => node.click());
    await new Promise((res) => setTimeout(res, 1000));

    expect(await page.$('.product')).toBe(null);
    let updateHTML1 = await page.$eval('.products', node => node.outerHTML);
    expect(compact(updateHTML1)).toBe(compact(updateHTML0));
  });

  test('should correctly delete product after click "delete"', async () => {
    await page.$$eval('.delete', nodes => nodes[1].click());
    let deleteHTML1 = await page.$eval('.products', node => node.outerHTML);
    expect(compact(deleteHTML1)).toBe(compact(deleteHTML0));
  });


});

