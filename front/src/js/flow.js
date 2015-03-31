var flowApp = angular.module("flow",[]);

flowApp.controller("flowDesigner",['$scope', '$compile', '$document', function($scope, $compile, $document) {
    $scope.addFlow = function() {
        var html = "<div class='flow'></div>";
        
        var template = angular.element(html);
        
        var linkFn = $compile(template);
        
        var element = linkFn($scope);
        
        angular.element($('#pool')).append(element);
        
    }
}]);