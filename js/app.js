(function(){
    'use strict';

    angular.module('basicApp', [
        "ui.router",
        "navController",
        "homeController",
        //"personController",
        "homeService",
        "ui.grid",
        "ui.grid.selection",
        "ui.grid.resizeColumns",
        "ne.swapi",
        "ngDialog",
        "toastr",
        "ngAnimate"
    ])

    .config(["$stateProvider", "$urlRouterProvider", "ngDialogProvider",
        function ($stateProvider, $urlRouterProvider, ngDialogProvider) {

            ngDialogProvider.setDefaults( {
                className:  'ngdialog-theme-default',
                plain:  true,
                showClose:  true,
                closeByDocument:  true,
                closeByEscape:  true
            });

            // define all app states (pages)
            $stateProvider
                .state("home", {
                    url: "/home",
                    templateUrl: "templates/home.html",
                    controller: "homeController as hc"
                })
                .state("about", {
                    url: "/about",
                    templateUrl: "templates/about.html"
                });

            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise("/home");
        }]);

}());
