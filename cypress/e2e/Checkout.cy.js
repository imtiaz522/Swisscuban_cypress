//import Loginpage Class
import { LoginPage } from "../PageActions/LoginPage.cy.js"

//import Add_To_Cart_Page class
import { Checkout_Page } from "../PageActions/Checkout_Page.cy.js"

//create objects for imported classes
const login_obj = new LoginPage()
const checkout_obj = new Checkout_Page()

describe('Checkout', () => {

    const login_url = 'https://www.swisscubancigars.com/customer/account/login/'

    it('Checkout Page', () => {

        //navigate to Memebers Are URL
        login_obj.navigate(login_url)
        //Login to the app
        login_obj.login('testruwi22@gmail.com', 'Test@522')
        //Go to homepage
        //addtocart_obj.gotohomepage()
        
        //Add product to cart
        checkout_obj.checkout()       


      })

})