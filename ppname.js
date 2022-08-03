const { remote } = require('webdriverio');

;(async () => {
    const browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    })

    await browser.url('https://dashboard.pantheon.io/login')
    
    const abcd = await browser.$('button#auth0login');
    await abcd.click();

    const gmail=await browser.$("//input[@id='1-email']");
    await gmail.waitForDisplayed({ timeout: 10000 });
    await gmail.setValue('testvighu@gmail.com');

    const gmail1=await browser.$("//input[@id='1-password']");
    await gmail1.waitForDisplayed({ timeout: 10000 });
    await gmail1.setValue('Testvighu@gmail.com');

    const abcdefg = await browser.$('//*[@id="1-submit"]');
    await abcdefg.click();

    // elem = await browser.$('div#identifierNext');
    // isDisplayed = await elem.isDisplayed();

    elem = await browser.$("//span[text()='vighnesh pol']");
    await elem.waitForDisplayed({ timeout: 100000 });
    isDisplayed = await elem.isDisplayed();
    console.log(isDisplayed);


    /*const abcde = await browser.$('input[aria-label="Email"]');
    await abcde.setValue('vigupol@gmail.com');*/
    // const apibtn = await browser.$('auth0-lock-social-button auth0-lock-social-big-button');
    // await apibtn.click();
    /*const abcdef = await browser.$('input[aria-label="Password"]');
    await abcdef.setValue('12345');

    const abcdefg = await browser.$('//*[@id="1-submit"]');
    await abcdefg.click();*/
    

   
//div[class="auth0-lock-input-block auth0-lock-input-email"]
    

   
    // await input.setValue('vighnesh.pol@panthe');#\31 -email
    
    // const apiLink = await browser.$('div#identifierNext');
    // await apiLink.click();
    // elem = await browser.$("//span[text()='suvarn paul']");
    // isDisplayed = await elem.isDisplayed();
    // console.log(isDisplayed);

    

    // await browser.saveScreenshot('./screenshot.png')
    // await browser.deleteSession();
})() 