import { LoginPage } from "../PageActions/LoginPage.cy.js"

const login_obj= new LoginPage()

describe('Login to SwissCubanCigars application', () => {

  const url = 'https://www.swisscubancigars.com/customer/account/login/'

  beforeEach(() => {
    login_obj.navigate(url)

  })

  //it('Invalid Login ', () => {
    //  login_obj.login('ruwi@gmail.com', 'Test@522')
  // })

    it('Login to the application using valid credentials', () => {
      login_obj.login('testruwi22@gmail.com', 'Test@522')
    })
  })