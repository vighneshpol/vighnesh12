

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get lgnbtn () 
    {
        return $('button#auth0login');
    }

    get inputUsername () 
    {
        return $("input[type='email']");
    }

    get inputPassword() 
    {
        return $("input[type='password']");
    }


    get btnSubmit ()
    {
        return $('//*[@id="1-submit"]');
    }

    get createSiteBtn()
    {
        return $("a[href='/sites/create']")
    }

    get dropDown()
    {
        return $(".css-1acf2q9-noButtonStyles-navbarLink-AccountDropdown")
    }



    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.lgnbtn.click();
        await this.inputUsername.waitForDisplayed({ timeout: 10000 });
        await this.inputUsername.setValue(username);
    //    await this.inputUsername.waitForDisplayed({ timeout: 10000 });
        await this.inputPassword.setValue(password);
        // await this.inputUsername.waitForDisplayed({ timeout: 10000 });
        await this.btnSubmit.click();
        // await this.inputUsername.waitForDisplayed({ timeout: 10000 });
        await this.createSiteBtn.waitForDisplayed({ timeout: 100000 });
        await expect(this.createSiteBtn).toBeExisting();
        await this.dropDown.waitForDisplayed({ timeout: 100000});
        await this.dropDown.click();
        await this.dropDown.waitForDisplayed({ timeout: 100000});
        const logout = await browser.$("a[href='/logout']");
        await logout.click();

    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
