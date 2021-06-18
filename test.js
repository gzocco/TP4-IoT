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
      var paginaBuscada = 'JavaScript - Wikipedia, la enciclopedia libre';
      await driver.get("http://google.com");
      await driver.findElement(By.name("q")).sendKeys(searchString, Key.RETURN);
      //this.timeout(TIMEOUT);
      var title = await driver.getTitle();
      await driver.wait(until.titleIs(title));
      element = {};
      for (var i = 0; i < 9; i++) {
         element[i] = await driver.findElements(By.css('#rso > div:nth-child(' + i + ') > div > div > div.yuRUbf > a > h3'));
         if (element[i].length != 0) {
            target = await driver.findElement(By.css('#rso > div:nth-child(' + i + ') > div > div > div.yuRUbf > a > h3'));
            text = await target.getText();
            //tag = await target.getTagName();
            //console.log("i: " + i + "- Text: " + text + "- tag: " + tag);
            if (text == paginaBuscada) {
               //console.log('Ingreso al link de: ' + text);
               await target.click();
               //this.timeout(TIMEOUT);
               await driver.wait(until.titleIs(paginaBuscada));
               var tituloEsperado = await driver.getTitle();
               //console.log('Titulo leugo del click: '+ tituloEsperado);
               expect(tituloEsperado).to.equal(paginaBuscada);
            }
         }
      }
   });

   after(() =>
      driver && driver.quit()
   );
});