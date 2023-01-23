module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: ['./tests/nightwatch'],

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
      launch_url: '',
      desiredCapabilities : {
        browserName : 'chrome',
      },
    },
  },

  screenshots: {
    enabled: true,
    on_failure: true,
    on_error: true,
    path: './screenshots',
  },

  globals: {
    waitForConditionTimeout: 1000,
    retryAssertionTimeout: 1000,
  },
};

