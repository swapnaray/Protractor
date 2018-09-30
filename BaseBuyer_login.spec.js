



describe('Verify the login functionality', function() {

     it('login', function() {
        browser.get('https://ngx-shopper.ordercloud.io');
         element(by.id('username')).clear();
         element(by.id('username')).sendKeys('testbuyer');
         element(by.id('password')).sendKeys('fails345');
        
       var login = element(by.id('submitBtn'));
        expect(login.isEnabled()).toBe(true);
         login.click();
        expect(browser.getTitle()).toContain('Base Buyer');
        
     })
   



})