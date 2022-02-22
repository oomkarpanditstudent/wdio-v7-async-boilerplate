

import Page from './page';
/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegistrationPage extends Page {
    
    /**
     *
     * define selectors using getter methods
     */
    get radioBtnPersonal() { return $('#personal');    }
    
    get radioBtnBusiness() {  return $('#business');    }

    get dropDownTitle() {  return $('select#title');    }
    
    get inputEmail() {  return $('input#email');    }

    get inputFirstName() {  return $('input#first-name');    }
    
    get inputLastName() {  return $('input#last-name');    }
    
    get inputAddress() {  return $('input#address-finder');    }
  
    get inputStreet() {  return $('#street');    }

    get inputCity() {  return $('#city');    }

    get inputPhoneNumber() {  return $('input#phone-number');    }

    get inputPostcode() {  return $('#postcode');    }
    
    get linkManualAddress() {  return $('.address-finder-manual-edit-button');    }
   
    get inputPropertyNumber() {  return $('#property-number');    }

    get listAddressOption() {  return $("div[role='button']");    }
    
    get listAddressItems() {  return $$("li.address-list-item");    }

    get checkBoxPost() {  return $('input#post');    }

    get checkBoxEmail() {  return $('input#email');    }

    get checkBoxTelephone() {  return $('input#telephone');    }

    get checkBoxText() {  return $('input#text');    }

    get radioBtnBusiness() {  return $('#business');    }

    get btnContinue() {  return $('.button-contained');    }
    
    get btnRegister() {  return $('.button.button-contained');    }
    
    get btnResendEmail() {  return $('.button-outlined');    }
   
    get listBenefits() {  return $('.tick-list');    }
   
    get divErrorMessage() {  return $$('div.error-message');    }
    
    get msgEmailError() {  return $('#email-error');    }

    get progressBarItemList() {  return $$('.label');    }

    get progressBarRegister() {  return $('div:nth-of-type(1) > .circle-wrapper  .checkmark');    }

    get progressBarProfile() {  return $('div:nth-of-type(2) > .circle-wrapper  .checkmark');    }

    get progressBarVerify() {  return $('.circle-wrapper > .circle');    }

    /**
     * a method to encapsule automation code to interact with the page
     */
   
    async clearCacheAndCookies () {
       await browser.reloadSession();
    }

    async formVisible() {
        await this.waitForUntil(await this.radioBtnPersonal);
    }

    async enterEmail(email) {
        await this.inputEmail.setValue(email);
    }

    async clickContinueCTA() {
        await this.btnContinue.click();
    }
    
    async clickRegister() {
        await this.btnRegister.click();
    }

    async clickAccountType(accountType) {
            await browser.execute((accountType)=>{                
                document.getElementById(accountType).click();    
            },accountType);
    }

    async enterYourDetails(title,firstname,lastname,phone) {
        if(title!="blank")
        await this.dropDownTitle.selectByVisibleText(title);
        if(firstname!="blank")
        await this.inputFirstName.setValue(firstname);
        if(lastname!="blank")
        await this.inputLastName.setValue(lastname);
        if(phone!="blank")
        await this.inputPhoneNumber.setValue(phone);
    }
        

    async enterAddress(address) {
        await this.inputAddress.setValue(address);
        await browser.pause(2000);
        await this.listAddressOption.click();
        await browser.pause(2000);
        await this.listAddressItems[0].click();
        await browser.pause(2000);
    }
    
    async enterAddressManually(property_number,street,city,postcode){
        await this.linkManualAddress.click();
        await this.inputPropertyNumber.setValue(property_number);
        await this.inputStreet.setValue(street);
        await this.inputCity.setValue(city);
        await this.inputPostcode.setValue(postcode);
       
    }

    async selectCommPreferences(perf) {
        if(perf != "blank"){
            if (perf==="post")
                await this.checkBoxPost.click();
            if (perf==="email")
                await this.checkBoxEmail.click();
            if (perf==="telephone")
                await this.checkBoxTelephone.click();
            if (perf==="text")
                await this.checkBoxText.click();
            }
        }
        
    async open() {
        return await super.open('/');
    } 
     
}
export default new RegistrationPage();
