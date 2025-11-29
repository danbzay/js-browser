import puppeteer from 'puppeteer';
import { fork } from 'child_process';

import { compact,  
  today, tomorrow, tripHTML0, inboundHTML0
} from './data-for-tests.js';
import { validation as tripValidation } from '../src/js/trip-calendar';

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

  test('should correctly render initial vidget', async () => {
    expect(compact(await page.$eval('.trip-calendar', n => n.outerHTML)))
      .toBe(compact(tripHTML0));
  });

  test('should correctly show input date validation errors for outbound ' + 
  'direction', async () => {
    await page.$eval('.trip-calendar [name="outbound"]', 
      n => n.value = '2000-01-01');
    await page.$eval('.trip-calendar [name="buy"]', 
      n => n.click());

    expect(await page.$eval('.trip-calendar [name="outbound"]', 
      n => n.validationMessage)).toBe(tripValidation.outMessage);      

    await page.$eval('.trip-calendar [name="outbound"]', 
      n => n.setCustomValidity(''));
  });

  test('should correctly render hidden block after check box', async () => {
    console.log(tomorrow);
    await page.$eval('.trip-calendar [name="outbound"]', 
      (n, tomorrow) => n.value = tomorrow, tomorrow);
    await page.$eval('.trip-calendar [name="return"]', 
      n => n.click() );
    await new Promise(res => setTimeout(res, 1000));

    expect(compact(await page.$eval('.trip-calendar', n => n.outerHTML)))
      .toBe(compact(inboundHTML0));
  });

  test('should correctly show input date validation errors for inbound ' +
  'direction', async () => {
    await page.$eval('.trip-calendar [name="inbound"]', 
      (n, today) => n.value = today, today);
    await page.$eval('.trip-calendar [name="buy"]', node => node.click());

    expect(await page.$eval('.trip-calendar [name="inbound"]', 
      node => node.validationMessage)).toBe(tripValidation.inMessage);

    await page.$eval('.trip-calendar [name="inbound"]', 
      node => node.setCustomValidity(''));
  });


});

