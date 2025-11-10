import puppeteer from 'puppeteer';
import { fork } from 'child_process';

import {compact, bubbleHTML0, crmHTML0, formProductHTML0} 
  from './data-for-tests.js';

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
      headless: false,
      slowMo: 100,
    });
    page = await browser.newPage();
    await page.goto('http://localhost:9000');
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  // Testing popover
  toggle = await page.$('.popover-toggle button');

  test('popover should appear above element', async () => {
    jest.setTimeout(30000); // default puppeteer timeout
    await toggle.click();
    const bubble = await page.$('.bubble');
    let bubbleHTML1 = await page.$eval('.bubble', e => e.innerHTML);
    expect(compact(bubbleHTML1)).toBe(compact(bubbleHTML0));
    const bubbleBox = await bubble.boundingBox();
    const buttonBox = await toggle.boundingBox();
    let dx = bubbleBox.x - buttonBox.x - buttonBox.width/2 + bubbleBox.width/2;
    let dy = bubbleBox.y - buttonBox.y + bubbleBox.height;
    //console.log(dx,dy);
    expect((-1 < dx) && (dx < 1)).toBe(true);
    expect((-1 < dy) && (dy < 1)).toBe(true);
  });

  test('popover should dissapear', async () => {
    await toggle.click();
    try {
      const bubble = await page.waitForSelector('.bubble', {timeout:500});
      console.log(bubble);
    } catch(error) {
      expect(error.name).toBe('TimeoutError');
    }
  });

  // Testing CRM

  test('should correctly render products table', async () => {
    let crmHTML1 = await page.$eval('.crm', node => node.outerHTML);
    expect(compact(crmHTML1)).toBe(compact(crmHTML0));
  });
  test('should correctly render product form after click "+"', async () => {
    await page.$('.create').then(eh => eh.click());
    let formProductHTML1 = await page.$eval('.product', node => node.outerHTML);
    expect(compact(createHTML1)).toBe(compact(createHTML0));
    await expect(page.$eval('.product [name="name"]', node => node.value))
      .resolves.toBe('');
    await expect(page.$eval('.product [name="price"]', node => node.value))
      .resolves.toBe('');
  });
  test('should correctly update products after click "save"', async () => {
    await page.$eval('.product [name="name"]', node => node.value='))
      .resolves.toBe('');
    await expect(page.$eval('.product [name="price"]', node => node.value))
      .resolves.toBe('');
    
    await page.$('.save').then(eh => eh.click());
    await expext(page.$waitForSelector('.product', 1000)).rejects
      .toMatch('TimeoutError');
    expect(compact(createHTML1)).toBe(compact(createHTML0));
    await expect(page.$eval('.product [name="name"]', node => node.value))
      .resolves.toBe('');
    await expect(page.$eval('.product [name="price"]', node => node.value))
      .resolves.toBe('');
  test('should correctly render product form after click "read"', async () => {
    await page.$('.read').then(eh => eh.click());
    let formProductHTML1 = await page.$eval('.product', node => node.outerHTML);
    expect(compact(createHTML1)).toBe(compact(createHTML0));
    await expect(page.$eval('.product [name="name"]', node => node.value))
      .resolves.toBe('IPhone XR');
    await expect(page.$eval('.product [name="price"]', node => node.value))
      .resolves.toBe('60 00');
  });
});

