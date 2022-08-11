
const LoginPage = require('../pageobjects/login.page');
const CreateSite = require('../pageobjects/create.site');
const { flashAlert } = require('../pageobjects/create.site');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('testvighu@gmail.com', 'Testvighu@gmail.com');
    //    await LogoutPage.open();
    //    await LogoutPage.logout();
        // await expect(CreateSite.flashAlert).toBeExisting();
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!');
    });
});


