const {join} = require('path')
const allure = require('allure-commandline')
const video = require('wdio-video-reporter');
var assert = require('assert');

exports.config = {
    //hostname: 'localhost',
    // port: 4723,
    //path: '/wd/hub',
    user:'felipecmarabarre_DPbs4H',
    key: 'Wn8jCc3TTtqXiNLNbUjy',
    //services: ['appium'],
    services: ['browserstack'],
    specs: [
        './test/specs/**/*.js'
    ],
    framework: 'mocha',
    capabilities: [{
        
       'project': "Meu primeiro projeto em Device Farm",
        'build': "1",
        'name': "teste_login",
        'device': "Samsung Galaxy S8",
        'os_version': "7.0",
        'app': 'bs://0f033c8a4f0e5c79f30ce8375243b1d30154ec57',
        'browserstack.local': true
        // "platformName": "Android",
        // "appium:platformVersion": "9.0",
        // "appium:deviceName": "ebac-woo",
        // "appium:automationName": "UiAutomator2",
        // "appium:appPackage": "com.woocommerce.android",
        // "appium:appActivity": ".ui.main.MainActivity"
              

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
    },

    reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: true,
        }],
        [video, {   
            saveAllVideos: true,       // If true, also saves videos for successful test cases
            videoSlowdownMultiplier: 50, // Higher to get slower videos, lower for faster videos [Value 1-100]
        }]  
    ],

    onComplete: function() {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function(exitCode) { 
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    },

    afterStep: async function (step, scenario, { error, duration, passed }, context) {
        driver.takeScreenshot()
    }    

}
