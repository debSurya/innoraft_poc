app.directive('validateInput', function () {
    return {
        require: 'ngModel',
        restrict: 'A',
        link: function (scope, elem, attr, ngModCtrl) {
            ngModCtrl.$parsers.push(function (value) {
                scope.invalidCredentials = false;
                if (angular.isUndefined(value)) {
                    value = '';
                }

                var cleanedValue = value.replace(/\W/g, '');
                if (cleanedValue !== value) {
                    ngModCtrl.$setViewValue(cleanedValue);
                    ngModCtrl.$render();
                }

                return cleanedValue;
            });

            elem.off('keydown').on('keydown', function (eve) {
                if (ngModCtrl.$$attr.ngModel === "userName" && (eve.keyCode === 32 || eve.which === 32)) {
                    eve.preventDefault();
                }
            });
        }
    };
});