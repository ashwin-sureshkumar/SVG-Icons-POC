var app = angular.module('app');

app.provider('myIconConfig', function () {

    this.basePath = '';

    this.setBasePath = function (path) {
      this.basePath = path
    };

    this.getBasePath = function() {
        return this.basePath;
    }

    this.$get = function () {
      return this;
    };

  })
