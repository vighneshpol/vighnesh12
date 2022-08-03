const { remote } = require('webdriverio');

;(async () => {
    const browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    })

    await browser.url('https://accounts.google.com/signin/v2/identifier?hl=en&continue=https%3A%2F%2Fmail.google.com&service=mail&ec=GAlAFw&flowName=GlifWebSignIn&flowEntry=AddSession')
    // const id = await $('input#identifierId')
    // await id.click()
    
    const apiLink = await browser.$("button[jsname='Cuz2Ue']");
    await apiLink.click();
    // const input = await browser.$('input#identifierId');
    // await input.setValue('vighnesh.pol@panthe');
    
    // recoveryIdentifierId
    const abc = await browser.$('#recoveryIdentifierId');
    await abc.setValue('vighnesh.pol@pantheon.io');

    //queryPhoneNext
    const api = await browser.$('div#queryPhoneNext');
    await api.click();
    

    // await browser.saveScreenshot('./screenshot.png')
    // await browser.deleteSession();
})() 