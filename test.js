const { Builder, By, until, Key, Capabilities } = require('selenium-webdriver');
const { expect } = require('chai');
require("chromedriver");
//var firefox = require('selenium-webdriver/firefox');
var chrome = require('selenium-webdriver/chrome');
//var profilePath = '/home/gzocco/.mozilla/firefox/930lnkmr.default';
let TIMEOUT = 10000;

describe('Test Chrome get 3rd not AD result', async function () {
   let driver;

   const options = new chrome.Options();
   //options.setProfile(profilePath);
   options.headless();

   before(async function () {
      /*      driver = new Builder().withCapabilities(
                Capabilities.firefox().set("acceptInsecureCerts", true)
            ).build();*/
      driver = new Builder().forBrowser('chrome').
         setChromeOptions(options).build();

   });

   it('Se busca Javascript', async function () {
      this.timeout(TIMEOUT);
      var searchString = "Javascript";
      await driver.get("http://google.com");
      await driver.findElement(By.name("q")).sendKeys(searchString, Key.RETURN);
      // this.timeout(TIMEOUT);
      var title = await driver.getTitle();
      await driver.wait(until.titleIs(title), 1000);
      element = {};
      for (var i = 0; i < 9; i++) {
         element[i] = await driver.findElements(By.css('#rso > div:nth-child(' + i + ') > div > div > div.yuRUbf > a > h3'));
         if (element[i].length != 0) {
            //console.log("Element: " + i + "= " + JSON.stringify(element[i]));
            // await driver.findElement(By.css('#rso > div:nth-child(' + i + ') > div > div > div.yuRUbf > a > h3')).click();
            target = await driver.findElement(By.css('#rso > div:nth-child(' + i + ') > div > div > div.yuRUbf > a > h3'));
            text = await target.getText();
            tag = await target.getTagName(); //.click();
            console.log("i: " + i + "- Text: " + text + "- tag: " + tag);
         }
      }
   });


   it('Se busca Pepito', async function () {
      this.timeout(TIMEOUT);
      var searchString = "Pepito";
      await driver.get("http://google.com");
      await driver.findElement(By.name("q")).sendKeys(searchString, Key.RETURN);
      // this.timeout(TIMEOUT);
      var title = await driver.getTitle();
      await driver.wait(until.titleIs(title), 1000);
      element = {};
      for (var i = 0; i < 9; i++) {
         element[i] = await driver.findElements(By.css('#rso > div:nth-child(' + i + ') > div > div > div.yuRUbf > a > h3'));
         if (element[i].length != 0) {
            //console.log("Element: " + i + "= " + JSON.stringify(element[i]));
            // await driver.findElement(By.css('#rso > div:nth-child(' + i + ') > div > div > div.yuRUbf > a > h3')).click();
            target = await driver.findElement(By.css('#rso > div:nth-child(' + i + ') > div > div > div.yuRUbf > a > h3'));
            text = await target.getText();
            tag = await target.getTagName(); //.click();
            console.log("i: " + i + "- Text: " + text + "- tag: " + tag);
         }
      }
   });

   it('Se busca Tiramisu', async function () {
      this.timeout(TIMEOUT);
      var searchString = "Tiramisu";
      await driver.get("http://google.com");
      await driver.findElement(By.name("q")).sendKeys(searchString, Key.RETURN);
      var title = await driver.getTitle();
      await driver.wait(until.titleIs(title), 1000);
      element = {};
      for (var i = 0; i < 9; i++) {
         element[i] = await driver.findElements(By.css('#rso > div:nth-child(' + i + ') > div > div > div.yuRUbf > a > h3'));
         if (element[i].length != 0) {
            //console.log("Element: " + i + "= " + JSON.stringify(element[i]));
            // await driver.findElement(By.css('#rso > div:nth-child(' + i + ') > div > div > div.yuRUbf > a > h3')).click();
            target = await driver.findElement(By.css('#rso > div:nth-child(' + i + ') > div > div > div.yuRUbf > a > h3'));
            text = await target.getText();
            tag = await target.getTagName(); //.click();
            console.log("i: " + i + "- Text: " + text + "- tag: " + tag);
         }
      }
   });

   /* it('check reset is working', async function () {
      this.timeout(TIMEOUT);
      await driver.get('https://sensor/reset');

      driver.findElement(By.id('action')).then(element => {
         expect(element.text).to.equal('reset');
      });
   });

   it('check that sitio1 does not generate hits', async function () {
      this.timeout(TIMEOUT);
      await driver.get('https://sensor/reset');
      await driver.get('https://sitio1/');
      await driver.get('https://sensor/hitcount');
      driver.findElement(By.id('count')).then(element => {
         expect(element.text).to.equal('0');
      });
   });

   it('check that sitio2 generates two hit', async function () {
      this.timeout(TIMEOUT);
      await driver.get('https://sensor/reset');
      await driver.get('https://sitio2/');
      await driver.get('https://sensor/hitcount');
      driver.findElement(By.id('count')).then(element => {
         expect(element.text).to.equal('2');
      });
   });

   it('check that there is no navigation away from sitio1', async function () {
      this.timeout(12000);
      await driver.get('https://sensor/reset');
      await driver.get('https://sitio1/');
      driver.findElement(By.id('canary')).then(element => {
         expect(element.text).to.equal('Canario');
      });
   });

   it('check that sitio2 only posts to form sensor without loading it', async function () {
      this.timeout(12000);
      await driver.get('https://sensor/reset');
      await driver.get('https://sitio2/');
      driver.findElement(By.id('canary')).then(element => {
         expect(element.text).to.equal('Canario');
      });
   });
 */
   after(() =>
      driver && driver.quit()
   );
});