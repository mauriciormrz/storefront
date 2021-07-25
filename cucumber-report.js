const report = require('multiple-cucumber-html-reporter');
 
report.generate({
    jsonDir: 'cypress/cucumber-json',
    reportPath: 'cypress/reports',
    metadata:{
        browser: {
            name: 'Google Chrome',
            version: 'Version 92.0.4515.107'
        },
        device: 'Local test machine',
        platform: {
            name: 'macOs Big Sur',
            version: '11.4'
        }
    },
    customData: {
        title: 'Young Living',
        data: [
            {label: 'Project', value: 'Skava Storefront'},
            {label: 'Release', value: ' '},
            {label: 'Cycle', value: ' '},
            {label: 'Execution Start Time', value: ' '},
            {label: 'Execution End Time', value: ' '}
        ]
    }
});