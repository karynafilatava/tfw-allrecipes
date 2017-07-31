# Test automation framework

Framework to automate test on site allrecipes.com

## Getting Started

Get a copy of the project on your local machine for development and testing purposes

### Prerequisites

Install latest JDK and NODE.JS

### Installing

Install gulp and webdriver-manager global on your machine
```
npm install -g gulp webdriver-manager
```

Install project dependencies by running in local directory:
```
npm install
```

## Running the tests

Update browser drivers by running:
```
webdriver-manager update
```

Start selenium standalone server:
```
webdriver-manager start
```

Now you can run tests from local project directory *(default browser is chrome, all scenarios would be executed without using --tag)*:
```
gulp [--browser=<browser> | --tag=<tag>]
```
Defined tags are @browse, @search, @user.

Preinstalled browser drivers are chrome and firefox (for running on other browsers install drivers via webdriver-manager).

## Authors

* **Karyna Filatava** - *Initial work* - [github](https://github.com/karynafilatava)
