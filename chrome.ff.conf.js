const { config } = require('./wdio.shared.conf');
config.hostname= 'localhost';
config.path='/wd/hub';
config.port=4444;
config.capabilities= [
  
        {
         maxInstances: 4,
         browserName: 'chrome',
         'goog:chromeOptions': { 
          args: ['--disable-gpu','--no-sandbox','--headless']
          },
         acceptInsecureCerts : true
         },

         {
          maxInstances: 4,
          browserName: 'firefox',
          'moz:firefoxOptions': {
            args: ['-headless']
          }
        }
        
];


config.services= [['selenium-standalone', {
  logPath: 'logs',
  installArgs: {drivers:{  
    chrome: { version: '98.0.4758.80' }, // https://chromedriver.chromium.org/
    firefox: { version: '0.30.0' }, // https://github.com/mozilla/geckodriver/releases
   }}, // drivers to install
  args:  { drivers:{
    chrome: { version: '98.0.4758.80' }, // https://chromedriver.chromium.org/
    firefox: { version: '0.30.0' }, // https://github.com/mozilla/geckodriver/releases
  }}  // drivers to use
}] ]; 

exports.config = config;
