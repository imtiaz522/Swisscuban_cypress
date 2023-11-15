//import Loginpage Class
import { LoginPage } from "../PageActions/LoginPage.cy.js"

//import Verify_AllTabsPage Class
import { Verify_AllTabsPage } from "../PageActions/Verify_AllTabsPage.cy.js"

//create objects for the imported classes
const login_obj = new LoginPage()
const verifytabs_obj = new Verify_AllTabsPage()

describe('Verify all Tabs', () => {

    const homepage = 'https://www.swisscubancigars.com/'  
  
    it('Verify all the tabs in header', () => {

        //Login to the app
        login_obj.navigate(homepage)

        //Click & verify the Tabs in the Header 
        verifytabs_obj.verifytab()
        
    
    })

})