$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resource/features/sample1.feature");
formatter.feature({
  "name": "Free CRM testing Feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UITest"
    }
  ]
});
formatter.step({
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "When "
});
formatter.step({
  "name": "user verifies that he is on home page",
  "keyword": "Then "
});
formatter.step({
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "automation.trainings12@gmail.com",
        "Password@12"
      ]
    },
    {
      "cells": [
        "abc",
        "123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UITest"
    }
  ]
});
formatter.step({
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_stepdefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"automation.trainings12@gmail.com\" and \"Password@12\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login_stepdefinition.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "When "
});
formatter.match({
  "location": "Login_stepdefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that he is on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_stepdefinition.user_verifies_that_he_is_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_stepdefinition.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UITest"
    }
  ]
});
formatter.step({
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_stepdefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"abc\" and \"123\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login_stepdefinition.user_enters_and(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d84.0.4147.105)\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027JORDAN-PC\u0027, ip: \u0027192.168.43.163\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d84.0.4147.30 (48b3e868b4cc0aa7e8149519690b6f6949e110a8-refs/branch-heads/4147@{#310}), userDataDir\u003dC:\\Users\\Jordan\\AppData\\Local\\Temp\\scoped_dir15696_337727446}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dXP, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:55970}, acceptInsecureCerts\u003dfalse, browserVersion\u003d84.0.4147.105, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 7441563b04f75879412df05d8c02d0cf\n*** Element info: {Using\u003dname, value\u003demail}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:494)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat com.cds.cucumberdemo.stepdefinition.Login_stepdefinition.user_enters_and(Login_stepdefinition.java:25)\r\n\tat ✽.user enters \"abc\" and \"123\"(file:src/test/resource/features/sample1.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "When "
});
formatter.match({
  "location": "Login_stepdefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user verifies that he is on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_stepdefinition.user_verifies_that_he_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_stepdefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});