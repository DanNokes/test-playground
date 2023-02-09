const { Given } = require('@cucumber/cucumber');

Given('I search for Nightwatch in Ecosia', () => {
    return browser
    .url('https://www.ecosia.org/')
    .setValue('input[type=search]', 'nightwatch')
    .click('button[type=submit]')
    .assert.textContains('.mainline.web__mainline', 'Nightwatch.js')
});
