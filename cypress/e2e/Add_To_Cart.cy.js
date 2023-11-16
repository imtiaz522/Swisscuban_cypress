//import Loginpage Class
import { LoginPage } from "../PageActions/LoginPage.cy.js"

//import Add_To_Cart_Page class
import { Add_To_Cart_Page } from "../PageActions/Add_To_Cart_Page.cy.js"

//create objects for imported classes
const login_obj = new LoginPage()
const addtocart_obj = new Add_To_Cart_Page()

describe('Add Product to Cart', () => {

    const login_url = 'https://www.swisscubancigars.com/customer/account/login/'

    it('Add Product to cart', () => {

        //navigate to Memebers Are URL
        login_obj.navigate(login_url)
        //Login to the app
        login_obj.login('testruwi22@gmail.com', 'Test@522')
        //Go to homepage
        addtocart_obj.gotohomepage()
        
        //Add product to cart
        addtocart_obj.add_product_to_cart()


      })

})