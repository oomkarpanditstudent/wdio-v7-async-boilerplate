import { Given, When, Then } from '@wdio/cucumber-framework';
import RegistrationPage from '../pageobjects/registration.page';


const pages = {
    registration: RegistrationPage,
}

Given(/^I clear cache and cookies$/, async () => {
    await RegistrationPage.clearCacheAndCookies();
});

When(/^I enter following details in form:$/, async(datatable)=>{
    await RegistrationPage.fillFormViaLabelNames(datatable);
});

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open();
});

Given(/^Registration form is visible$/, async () => {
    await RegistrationPage.formVisible();
});

When(/^I enter email id as (.+)$/, async (emailid) => {
    await RegistrationPage.enterEmail(emailid);
});

When(/^I proceed with continue on the first page of the registration journey$/, async () => {
    await RegistrationPage.clickContinueCTA();
});

When(/^I proceed with register option$/, async () => {
    await RegistrationPage.clickRegister();
});

When(/^I choose (.+) as account type to register$/, async (accountType) => {
    await RegistrationPage.clickAccountType(accountType);
});

When(/^I enter an (.+) for registration$/, async (address) => {
    await RegistrationPage.enterAddress(address);
});

When(/^I enter title as (.+) first name as (.+) last name as (.+) phone number as (.+) in your details section for registration$/, async (title,firstname,lastname,phone) => {
    await RegistrationPage.enterYourDetails(title,firstname,lastname,phone);
});

When(/^I choose communication preferences (.+) for registration$/, async (perf) => {
    await RegistrationPage.selectCommPreferences(perf);
});

When(/^I enter (.+) (.+) (.+) (.+) manually for registration$/, async (property_number,street,city,postcode) => {
    await RegistrationPage.enterAddressManually(property_number,street,city,postcode);
});

Then(/^I should be registered successfully for email verification$/, async () => {
    await expect(RegistrationPage.btnResendEmail).toBeExisting();
});

Then(/^I should not be allowed to progress from step 1 of the registration journey$/, async () => {
    await expect(RegistrationPage.listBenefits).toBeExisting();
    await expect(RegistrationPage.divErrorMessage).toBeExisting();
});

Then(/^I should not be allowed to progress from step 2 of the registration journey$/, async () => {
    await expect(RegistrationPage.listBenefits).not.toBeExisting();
    await expect(RegistrationPage.divErrorMessage).toBeExisting();
    await expect(RegistrationPage.btnResendEmail).not.toBeExisting();
});

Then(/^All the components as per design are available on page 1$/, async () => {
    await expect(RegistrationPage.listBenefits).toBeExisting();
    await expect(RegistrationPage.radioBtnPersonal).toBeExisting();
    await expect(RegistrationPage.radioBtnBusiness).toBeExisting();
    await expect(RegistrationPage.inputEmail).toBeExisting();
});

Then(/^All the components as per design are available on page 2$/, async () => {
    await expect(RegistrationPage.inputAddress).toBeExisting();
    await expect(RegistrationPage.btnRegister).toBeExisting();
    await expect(RegistrationPage.inputFirstName).toBeExisting();
    await expect(RegistrationPage.linkManualAddress).toBeExisting();
});

Then(/^Progress Bar with three options is present$/, async () => {
    await expect(RegistrationPage.progressBarItemList).toBeExisting();
    let progressBarItems=await RegistrationPage.progressBarItemList.map(async (el)=>{
        return await el.getText();
    })
     expect(['Register','Profile','Verify']).toEqual(expect.arrayContaining(progressBarItems));
});

Then(/^I should be able to go to Profile Step or Register Step via Progress Bar$/, async () => {
    await expect(RegistrationPage.progressBarRegister).toBeExisting();
    await expect(RegistrationPage.progressBarProfile).toBeExisting();
    await expect(RegistrationPage.progressBarVerify).toBeExisting();
    await RegistrationPage.progressBarProfile.click();
    await expect(RegistrationPage.progressBarProfile).not.toBeExisting();
    await RegistrationPage.progressBarRegister.click();
    await expect(RegistrationPage.progressBarRegister).not.toBeExisting();
});