const path = require("path");
require("dotenv").config();

module.exports = {
  src_folders: ["tests"],

  page_objects_path: [],
  custom_commands_path: [],
  custom_assertions_path: [],
  plugins: [],
  globals_path: "",

  globals: {
    asyncHookTimeout: 60000,
  },

  test_workers: {
    enabled: true,
    workers: "auto",
  },

  test_settings: {
    default: {
      webdriver: {
        start_process: true,
        server_path: require("chromedriver").path,
        port: 9515,
      },
      desiredCapabilities: {
        browserName: "chrome",
        "goog:chromeOptions": {
          w3c: true,
          args: [
            //"--headless",
            "--no-sandbox",
            "--disable-gpu",
            "--disable-dev-shm-usage",
            "--window-size=1920,1080",
            `--user-data-dir=/tmp/chrome-user-data-${Date.now()}`,
          ],
        },
      },
      screenshots: {
        enabled: true,
        on_failure: true,
        on_error: true,
        path: "tests_output/screenshots",
      },
    },
  },
};
