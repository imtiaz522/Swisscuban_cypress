//Create Object to Access the Elements from LoginPage_Elements.json
const objectLocators = require('../PageElements/LoginPage_Elements.json')

export class LoginPage {

    //Navigate to Swisscubancigars Loginpage   
    navigate(urlpassed) {
        cy.visit(urlpassed)
        cy.wait(5000)
        //check if Allow cookies button is visible, if it is visible click on it
        if(cy.get(objectLocators.LoginPage_Objects.cookie_btn_obj).should('be.visible'))
        {
            cy.get(objectLocators.LoginPage_Objects.cookie_btn_obj).click()
            cy.wait((1000))
        }      
    }

    //Login to the application 
    login(username, password){
        //enter username
        cy.get(objectLocators.LoginPage_Objects.username_txt_obj).type(username)
        //enter password
        cy.get(objectLocators.LoginPage_Objects.password_txt_obj).type(password)
        //click on submit button
        cy.get(objectLocators.LoginPage_Objects.submit_btn_obj).click()
        cy.wait(3000)
        // Verify the user is logged in
        cy.get(objectLocators.LoginPage_Objects.page_title_obj).should('be.visible')
        
    }
}
