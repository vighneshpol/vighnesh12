const { remote } = require('webdriverio');

;(async () => {
    const browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    })

    await browser.url('https://accounts.google.com/signin/v2/identifier?hl=en&continue=https%3A%2F%2Fmail.google.com&service=mail&ec=GAlAFw&flowName=GlifWebSignIn&flowEntry=AddSession')
    
    // const input = await browser.$('//*[@id="identifierId"]');
    // await input.setValue('vighnesh.pol@pantheon.io');
    
    // const apiLink = await browser.$('div#identifierNext');
    // await apiLink.click();
    elem = await browser.$('div#identifierNext');
    isDisplayed = await elem.isDisplayed();
    console.log(isDisplayed);


    

    // await browser.saveScreenshot('./screenshot.png')
    // await browser.deleteSession();
})() 