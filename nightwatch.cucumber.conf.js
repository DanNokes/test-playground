module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: ['./tests-cucumber'],

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
  },

  test_runner: {
    // set cucumber as the runner
    type: 'cucumber',

    // define cucumber specific options

    options: {
      //set the feature path
      feature_path: './tests-cucumber',

      // start the webdriver session automatically (enabled by default)
      auto_start_session: true,

      // use parallel execution in Cucumber
      // set number of workers to use (can also be defined in the cli as --parallel 2
      parallel: 2 
    }
  },
};
