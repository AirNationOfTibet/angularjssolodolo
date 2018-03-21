let myApp = angular.module('myApp', []);

myApp.controller('WelcomeController', function(){
    console.log("controller has started");
    let self = this;
    self.greeting = "hello hadars!"
})