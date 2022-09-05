const {join} = require('path')

exports.config = {
    hostname: 'localhost',
    port: 4723,
    path: '/wd/hub',
    specs: [
        './test/specs/**/*.js'
    ],
    framework: 'mocha',
    capabilities: [{
        "platformName": "Android",
        "appium:platformVersion": "9.0",
        "appium:deviceName": "ebac-woo",
        "appium:automationName": "UiAutomator2",
        "appium:appPackage": "com.woocommerce.android",
        "appium:appActivity": ".ui.main.MainActivity"
              

        /*
        "platformName": "Android",
        "platformVersion": "9.0",
        "deviceName": "ebac-woo",
        "automationName": "UiAutomator2",
        "app": join(process.cwd(), '.app/android/wcandroid-9.9.1.apk'),
        "appWaitActivity": "com.woocommerce.android.ui.login.LoginActivity"
         */
    }],
    export: {
        waitforTimeout: 20000,
    },

    waitForTimeout: 20000,
    mochaOpts: {
        timeout: 300000
    }

}
