const myinforDelivery = {
    firstName: '[id="first-name"]',
    lastName: '[id="last-name"]',
    postalCode: '[id="postal-code"]',
    continueButton: '[id="continue"]'
}

export class EnterYourDetails {
    static fillYourInfor(fName: string, lName: string, pCode: string){
        cy.allure().logStep('Fill your information')
        cy.get(myinforDelivery.firstName).type(fName);
        cy.get(myinforDelivery.lastName).type(lName);
        cy.get(myinforDelivery.postalCode).type(pCode);
        cy.get(myinforDelivery.continueButton).should('be.visible');
        cy.get(myinforDelivery.continueButton).click();
    }
}