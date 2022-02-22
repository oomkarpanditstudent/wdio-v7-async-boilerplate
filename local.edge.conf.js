const { config } = require('./wdio.shared.conf');
config.hostname= 'localhost';
config.path='/wd/hub';
config.port=4444;
config.capabilities= [   
         {
          maxInstances: 5,
          browserName: 'MicrosoftEdge',
          'ms:edgeOptions': {
            args: ['--headless']
          }
        },      
];
config.services= [['selenium-standalone', {
  logPath: 'logs',
  installArgs: {drivers:{  
    chromiumedge: { version: '98.0.1108.43' } // https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/
   }}, // drivers to install
  args:  { drivers:{
    chromiumedge: { version: '98.0.1108.43' } // https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/
  }}  // drivers to use
}] ]; 
exports.config = config;