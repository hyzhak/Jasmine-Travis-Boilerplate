Jasmine-Travis-Boilerplate [![Build Status](https://secure.travis-ci.org/Hyzhak/Jasmine-Travis-Boilerplate.png?branch=master)](https://travis-ci.org/Hyzhak/Jasmine-Travis-Boilerplate)
==========================

Boilerplate for projects with [jasmine](https://github.com/pivotal/jasmine) unittesting framework that build on [travis-ci](travis-ci.org);

## Road map v0.0.1

### DONE

* add project to [travis-ci](travis-ci.org);
* execute tests at travis-ci;
   * by [phantom.js](phantomjs.org);
* build
   * [solid project from js-modules](https://github.com/Hyzhak/Jasmine-Travis-Boilerplate#build);
   * minimize;

### TODO

* execute tests by travis-ci;
   * by testacular;
* calculate test coverage;
* auto-upload downloadable library;

## Build
### With Global Namespace

based on [almond](https://github.com/jrburke/almond)

```
npm install
node node_modules\requirejs\bin\r.js -o build\app.build-almond.js optimize=none
```

### Minimize with global namespace

```
npm install
node node_modules\requirejs\bin\r.js -o build\app.build-almond.js out=dist/lib-min.js optimize=uglify
```