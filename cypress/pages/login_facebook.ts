export class Facebook_Login_Page{

    loginPage_username = '[data-testid=royal_email]'
    loginPage_password = '[data-testid=royal_pass]'
    loginPage_loginButton = '[data-testid=royal_login_button]'
    loginPage_registerButton = '.signup_box_content > ._42ft'
    navigate(){
        cy.visit("https://vi-vn.facebook.com/")
    }
    enterusername(username:string){
        cy.get(this.loginPage_username).type(username)
    }
    enterPassword(password: string){
        cy.get(this.loginPage_password).type(password)
    }
    clickLogin(){
        cy.get(this.loginPage_loginButton).click()
    }
    clickRegister(){
        cy.get(this.loginPage_registerButton).click()
    }
}