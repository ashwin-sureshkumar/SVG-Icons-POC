var app = angular.module('app');

app.directive('myIcon', function(myIconConfig) {
    return {
        restrict : 'E',
        replace : true,
        scope : {
            'file' : '@',
            'icon' : '@',
            'class' : '@?',
            'alt' : '@'
        },
        link : function(scope){
            var basePath = myIconConfig.getBasePath();
            scope.constructedIcon = basePath + '/' + scope.file + '.svg#' + scope.icon;
        },
        template : function() {
            return  '<svg tabindex="0" class="icon {{class}}" xmlns=http://www.w3.org/2000/svg role="img" >' +
                    '<title>{{alt}}</title>' +
                    '<use xlink:href="{{constructedIcon}}"></use>' +
                    '</svg>';
        }
    }
});
