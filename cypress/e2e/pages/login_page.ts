const loginPageSelectors = {
    username: '[id="user-name"]',
    password: '[id="password"]',
    loginButton: '[id="login-button"]',
    productPage: '[class="title"]',
    addToCartItem3: '[id="add-to-cart-sauce-labs-bolt-t-shirt"]',
    accessCart: 'a[class="shopping_cart_link"]'
}

export class LoginPage {
    static visitLoginPage() {
        cy.allure().logStep('Visit login page')
        cy.visit('');
    }

    static verifyLoginPageLoadedProperly() {
        cy.allure().logStep('Verify Login page loaded properly')
        cy.get(loginPageSelectors.username).should('be.visible');
        cy.get(loginPageSelectors.password).should('be.visible');
        cy.get(loginPageSelectors.loginButton).should('be.visible');
    }

    static loginWithCredentials(username: string, password: string) {
        cy.allure().logStep('Login with credentials')
        cy.get(loginPageSelectors.username).type(username);
        cy.get(loginPageSelectors.password).type(password);
        cy.get(loginPageSelectors.loginButton).click();
     //   cy.wait('@waitForLogin');
    }

    static verifyUserNavigateLandingPage(){
        cy.allure().logStep('User Navigate to Inventory page')
        cy.get(loginPageSelectors.productPage).should('be.visible');
    }

 


}