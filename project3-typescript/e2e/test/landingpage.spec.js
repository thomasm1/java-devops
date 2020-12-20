/*
Testing the landing page of the application to ensure buttons work as intended
*/
describe('landing page tests', function(){

    let elPageHead = element(by.xpath('//*[@id="commuter-title"]'));

    let elLoginButton = element(by.xpath('//*[@id="login"]/app-login/a'));
    let elLoginButton2 = element(by.xpath('//*[@id="sign-in-btn"]'));
    let elLoginExit = element(by.xpath('//*[@id="login-exit"]'));

    let elRegisterButton = element(by.xpath('//*[@id="register"]/signupmodal/a'));
    let elRegisterHeader = element(by.xpath('//*[@id="register-header"]'));
    let elSubmitRegister = element(by.xpath('//*[@id="submit-register"]'));
    let elRegisterExit = element(by.xpath('//*[@id="register-exit"]'));

    browser.get('http://localhost:4200/');
    //checks to make sure that the user reaches the landing page correctly
    //change when the front end is being hosted
    it('Make sure user is on the landing page', function(){
        expect(elPageHead.getText()).toBe('Commuter.Link');
    });

    //checks to make sure that the login button reroutes to the correct modal
    //change when the front end is being hosted
    it('User Presses the login button and goes to the login modal', function(){
        elLoginButton.click();
        expect(elLoginButton2.getText()).toBe('Login');
        elLoginExit.click();
    });

    //checks to make sure that the register button opens the modal for signup
    //change when the front end is being hosted

    it('User Presses the Register Button and goes to the sign up modal', function(){
        elRegisterButton.click();
        expect(elRegisterHeader.getText()).toBe('Sign Up');
        expect(elSubmitRegister.getText()).toBe('Submit');
        elRegisterExit.click();
    });
});
