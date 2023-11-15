const tabs_obj = require('../PageElements/Tabs_Elements.json')

export class Verify_AllTabsPage {

//Click on each tab & Verify the content
verifytab(){

   //Verify about us tab
   cy.xpath(tabs_obj.tabs.aboutus_lnk).click()
   cy.wait(5000)
   cy.xpath(tabs_obj.tabs.aboutus_txt).should('be.visible')
   
   //Verify MembersArea tab
   cy.xpath(tabs_obj.tabs.membersarea_lnk).click()
   cy.wait(5000)
   cy.xpath(tabs_obj.tabs.membersarea_txt).should('be.visible')
        
   //Verify Contact us tab
   cy.xpath(tabs_obj.tabs.contactus_lnk).click()
   cy.wait(5000)
   cy.xpath(tabs_obj.tabs.contactus_txt).should('be.visible')
         
   //Verify Wholesale tab
   cy.xpath(tabs_obj.tabs.wholesale_lnk).click()
   cy.wait(5000)
   cy.xpath(tabs_obj.tabs.wholesale_txt).should('be.visible')
   
   //Verify Guides tab
   cy.xpath(tabs_obj.tabs.guides_lnk).click()
   cy.wait(5000)
   cy.xpath(tabs_obj.tabs.guides_txt).should('be.visible')      
             
 }
}

