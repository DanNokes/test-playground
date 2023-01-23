const { Given, Status, After } = require('@cucumber/cucumber')

const testDomain = 'http://wonderbly.com'

const openPage = (url) => {
  return browser
    .url(testDomain + url)
    .waitForElementPresent('#apps', 1000)
}

// Used to open a URL
Given('I open the {string} route', (page) => {
  return openPage(page)
})

// take screenshots on failure
After(testCase => {
  if (testCase.result.status === Status.FAILED) {
    return browser.saveScreenshot('./screenshots/cucumber/test.png')
  }
  return browser
})
