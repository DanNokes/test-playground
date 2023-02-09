module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: ['./tests'],

  webdriver: {
    start_process: true,
    port: 4444,
    server_path: require('chromedriver').path,
    cli_args: [
      // very verbose geckodriver logs
      // '-vv'
    ]
  },

  test_settings: {
    default: {
      launch_url: 'https://nightwatchjs.org',
      desiredCapabilities : {
        browserName : 'chrome'
      }
    },
    
    browserstack: {
      selenium: {
        host: 'hub-cloud.browserstack.com',
        port: 443
      },

      // More info on configuring capabilities can be found on:
      // https://www.browserstack.com/automate/capabilities?tag=selenium-4
      desiredCapabilities: {
        'bstack:options' : {
          local: 'false',
          userName: '${BROWSERSTACK_USERNAME}',
          accessKey: '${BROWSERSTACK_ACCESS_KEY}',
        }
      }
    },

    'browserstack.chrome': {
      extends: 'browserstack',
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions : {
          w3c: false
        }
      }
    }
  }
};
