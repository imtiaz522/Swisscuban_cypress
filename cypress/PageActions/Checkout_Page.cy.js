
//Require Elements.json file
const checkout_obj = require('../PageElements/Checkout_Elements.json')

export class Checkout_Page {

checkout(){

    //click on checkout button
    cy.wait(2000)
    cy.xpath(checkout_obj.checkout_elements.checkout_btn).click()
    cy.wait(6000)

    //verify the checkout page is displayed
    cy.xpath(checkout_obj.checkout_elements.orderreview_txt).should('be.visible')

    //Expand the Items in Order button
    cy.xpath(checkout_obj.checkout_elements.items_in_order_btn).click()
    
    //Check the correct product is displayed
    cy.xpath(checkout_obj.checkout_elements.product_name_txt).contains('Bolivar Coronas Junior')
 }
}