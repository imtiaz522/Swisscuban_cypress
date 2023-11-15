//Require Elements.json file
const cart_obj = require('../PageElements/AddToCart_Elements.json')

export class Add_To_Cart_Page {

    gotohomepage(){
        //click on the Swisscuban cigars image to go to the homepage
        cy.xpath(cart_obj.Cart_Elements.homepage_img).click()
        cy.wait(2000)
    }

    add_product_to_cart(){
        
        //click on the Bolivar product category link
        cy.xpath(cart_obj.Cart_Elements.bolivar_lnk).click()
        cy.wait(2000)
        
        if(cy.get('#age-verification-popup').should('be.visible'))
        {
            cy.get('.enter_button').click()
            cy.wait(1000)
        }

        //click on the Add to cart button on the "Bolivar Coronas Junior" Product
        cy.get(cart_obj.Cart_Elements.bolivar_addToCart_btn).click()
        cy.wait(1000)
        
        //verify success message is displayed
        cy.xpath(cart_obj.Cart_Elements.itemAddedSuccess_msg).should('be.visible')
               

    }

}