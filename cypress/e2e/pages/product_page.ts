const productPageToAddtoCart = {
    addToCartItem1: '[id="add-to-cart-sauce-labs-backpack"]',
    addToCartItem2: '[id="add-to-cart-sauce-labs-bike-light"]',
    addToCartItem3: '[id="add-to-cart-sauce-labs-bolt-t-shirt"]',
    accessCart: 'a[class="shopping_cart_link"]',
    ItemTitle3: 'a[id="item_1_title_link"]',
    back2Cart: '[id="back-to-products"]'
}

export class ProductSelection {
    static selectItem3toCart(title1: string) {
        cy.allure().logStep('Start adding items to the Cart')
        cy.get(productPageToAddtoCart.addToCartItem3).should('be.visible');
        cy.get(productPageToAddtoCart.addToCartItem3).click();
        cy.get(productPageToAddtoCart.ItemTitle3).should('be.visible');
        cy.get(productPageToAddtoCart.ItemTitle3).eq(0).contains(title1);
        cy.get(productPageToAddtoCart.ItemTitle3).click();
        cy.get(productPageToAddtoCart.back2Cart).click();
        cy.get(productPageToAddtoCart.accessCart).should('be.visible');
        cy.get(productPageToAddtoCart.accessCart).click();
    }
}