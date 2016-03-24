var app = angular.module('app',[]);

app.config(function(myIconConfigProvider){
    myIconConfigProvider.setBasePath('assets');
});

app.controller('myController', function($scope){
    var vm = this;

    vm.weather = {
        file : 'icons',
        icon : 'rainy_sunny',
        class : 'icon-48 icon-blue',
        alt : 'Sunny and Rainy'
    }
});
