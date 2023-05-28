const myCartCheckOut = {
    checkOut_page: '[class="title"]',
    checkOut: '[id="checkout"]'
}

export class ShowMyCart {
    
    static checkOutProcess(){
        cy.allure().logStep('Completing checkOut processs')
        cy.get(myCartCheckOut.checkOut_page).should('be.visible');
        cy.get(myCartCheckOut.checkOut).should('be.visible');
        cy.get(myCartCheckOut.checkOut).click();
    }
}