describe('Ecosia', function() {

    // test() and specify() is also available
  
    it('demo test', function(browser) {
      return browser
        .url('https://www.ecosia.org/')
        .setValue('input[type=search]', 'nightwatch')
        .click('button[type=submit]')
        .assert.textContains('.mainline.web__mainline', 'Nightwatch.js')
        //.end();
    });
  });
  