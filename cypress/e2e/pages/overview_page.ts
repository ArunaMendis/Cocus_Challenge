const checkOut_Overview = {
    finishButton: '[id="finish"]',
    confirmOrder:'[class="title"]',
    backHome: '[id="back-to-products"]'
}

export class Overview {
    static finishTransaction(){
        cy.allure().logStep('Finishing Transcation')
        cy.get(checkOut_Overview.finishButton).should('be.visible');
        cy.get(checkOut_Overview.finishButton).click();
        cy.get(checkOut_Overview.confirmOrder).should('be.visible');
        cy.get(checkOut_Overview.backHome).should('be.visible');
        cy.get(checkOut_Overview.backHome).click();
        
    }
}