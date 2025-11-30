import puppeteer from 'puppeteer';
import { fork } from 'child_process';


import { compact, bubbleHTML0 } from './data-for-tests.js';

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

  // Testing popover
  jest.setTimeout(30000); // default puppeteer timeout

  test('popover should appear above element', async () => {
    toggle = await page.$('.popover-toggle button');
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


});

