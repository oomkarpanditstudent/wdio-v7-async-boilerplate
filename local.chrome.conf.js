const { config } = require('./wdio.shared.conf');
config.hostname= 'localhost';
config.port=4444;
config.path= '/wd/hub';
config.capabilities= [{
        // maxInstances can get overwritten per capability. So if you have an in-house Selenium
        // grid with only 5 firefox instances available you can make sure that not more than
        // 5 instances get started at a time.
        maxInstances: 5,
        //
        browserName: 'chrome',
        'goog:chromeOptions': { 
            args: ["--disable-gpu",'--no-sandbox'],
        },
        
        acceptInsecureCerts: true
       
        // If outputDir is provided WebdriverIO can capture driver session logs
        // it is possible to configure which logTypes to include/exclude.
        // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
        // excludeDriverLogs: ['bugreport', 'server'],
    }],
config.services= ['chromedriver'] ; 
exports.config = config;
