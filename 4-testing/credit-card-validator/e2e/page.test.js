import puppeteer from 'puppeteer';
import { fork } from 'child_process';

import testNumbers from './fake-credit-card-numbers.json';

describe('Page start', () => {
  let browser, page, input, submit;
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
    });
    page = await browser.newPage();
    await page.goto('http://localhost:9000');
    input = await page.$('.credit-card-validator input');
    submit = await page.$('.credit-card-validator button');
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  test.each(testNumbers)('should correctly validate number and select logo', 
  async (network, number) => {
    jest.setTimeout(30000); // default puppeteer timeout
    //console.log('network = ' + network + '; number = ' + number);
    await page.$eval('.credit-card-validator input', e => e.value = '');
    await input.type(number.toString());
    await submit.click();
    if(network == "UNCORRECT") {
      await page.waitForFunction((selector, text) => 
        document.querySelector(selector).textContent == text, 
      {}, '.message-area',  'Card number not validated');
    } else {
      await page.waitForFunction((selector, text) => 
        document.querySelector(selector).textContent == text, 
      {}, '.message-area',  'Card number successfully validated');
      selected = await page.$eval('.payment-networks-logos .selected', 
        e => e.dataset.name);
      expect(selected).toBe(network);
    }
  });

});
