//describe tools
requirejs.config({
    baseUrl: 'spec',
    paths: {
        lib : './libs',
        suites : './suites',
        src : '../src'
    },
    shim:{
        /*
        look at: A1
        'lib/jasmine-standalone-1.2.0/jasmine':{
            deps:[],
            exports:'jasmine'
        },
        'lib/jasmine-standalone-1.2.0/jasmine-html': [],
        'lib/phantomjs/jasmine.console_reporter': []
         */
    }
});

// Start tests
requirejs([
    //tools
    /*A1: remove because after loading jasmine with AMD it functions like describe - disappear from a global.*/
    /*'lib/jasmine-standalone-1.2.0/jasmine',*/
    'lib/jasmine-standalone-1.2.0/jasmine-html',
    'lib/phantomjs/jasmine.console_reporter',

    //specs
    'suites/helloWorld'
],
/*remove bacause of A1*/
/*function(jasmine){*/
function(){
    var jasmineEnv = jasmine.getEnv();
    jasmine.VERBOSE = true;
    jasmineEnv.updateInterval = 1000;

    var htmlReporter = new jasmine.HtmlReporter();

    jasmineEnv.addReporter(new jasmine.ConsoleReporter());
    jasmineEnv.addReporter(htmlReporter);

    jasmineEnv.specFilter = function(spec) {
        return htmlReporter.specFilter(spec);
    };

    jasmineEnv.execute();

    /*
    Don't really need it, because as i see, when we here, all script, is already loaded.

    var currentWindowOnload = window.onload;

    window.onload = function() {
        if (currentWindowOnload) {
            currentWindowOnload();
        }
        execJasmine();
    };

    function execJasmine() {
        jasmineEnv.execute();
    }
    */
});
