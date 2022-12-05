describe('Ecosia', function() {

    // test() and specify() is also available
  
    it('demo test', function(browser) {
      browser
        .url('https://www.ecosia.org/')
        .setValue('input[type=search]', 'nightwatch')
        .click('button[type=submit]')
        .assert.containsText('.mainline.web__mainline', 'Nightwatch.js')
        .end();
    });
  });
  