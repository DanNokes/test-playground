module.exports = {
  src_folders: ['./tests/cucumber'],

  webdriver: {
    start_process: true,
    port: 4444,
    server_path: require('chromedriver').path,
    cli_args: [],
  },

  test_settings: {
    default: {
      launch_url: '',
      desiredCapabilities : {
        browserName : 'chrome',
      },
    },
  },

  test_runner: {
    type: 'cucumber',
    options: {
      feature_path: './tests/features',
    },
  },
}
