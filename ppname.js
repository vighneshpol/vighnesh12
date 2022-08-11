const { remote } = require('webdriverio');

;(async () => {
    const browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    })

    await browser.url('https://dashboard.pantheon.io/login')
    
    const submit1 = await browser.$('button#auth0login');
    await submit1.click();

    const email=await browser.$("input[type='email']");
    await email.waitForDisplayed({ timeout: 10000 });
    await email.setValue('testvighu@gmail.com');


    const password=await browser.$("input[type='password']");
    await password.waitForDisplayed({ timeout: 10000 });
    await password.setValue('Testvighu@gmail.com');

    const smtBtn = await browser.$('//*[@id="1-submit"]');
    await smtBtn.click();

    // const search=await browser.$('#downshift-0-input');
    // await search.waitForDisplayed({ timeout: 100000 });
    // await expect(search).toBeDisplayed();
    // await expect($('#flash')).toBeExisting();

    const dropdown = await browser.$('.css-1acf2q9-noButtonStyles-navbarLink-AccountDropdown');
    await dropdown.waitForDisplayed({ timeout: 10000 });
    await dropdown.click();

    const logout = await browser.$("a[href='/logout']");
    await logout.click();


    // browser.closeWindow()
    // elem = await browser.$('div#identifierNext');
    // isDisplayed = await elem.isDisplayed(); .css-1acf2q9-noButtonStyles-navbarLink-AccountDropdown
    
    // elem = await browser.$("//span[text()='vighnesh pol']");
    // await elem.waitForDisplayed({ timeout: 100000 });
    // isDisplayed = await elem.isDisplayed();
    // console.log(isDisplayed);


    /*
    Clickable 

    const el = await browser.$('//*[@id="sites-page"]/div/div[1]/a[1]')
    let clickable = await el.isClickable();
    console.log(clickable); // outputs: true or false

    // wait for element to be clickable
    await browser.waitUntil(() => el.isClickable())

    */

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