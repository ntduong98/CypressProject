import { Facebook_Login_Page } from "../pages/login_facebook";

const loginPage = new Facebook_Login_Page()

beforeEach(() => {
    loginPage.navigate()
})

describe(('test1'), () => {
    
    it('login to facebook fail', () => {
        loginPage.enterusername('abcdeg')
        loginPage.enterPassword('asdasd')
        loginPage.clickLogin()
        loginPage.clickRegister()
    })

    //test revert2
})