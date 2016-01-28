(function(){
    'use strict';

    angular.module('homeController', [])
        .controller('homeController', homeController);

    homeController.$inject = ['homeService', 'ngDialog', 'toastr'];

    function homeController(homeService, ngDialog, toastr) {

        // grid (and its data) are in the service for persistence
        var hc = this;
        hc.myGrid = homeService.myGrid;
        hc.showToast = showToast;
        hc.clickUrl = clickUrl;

        function showToast() {
            toastr.success("text", "title");
        }

        function clickUrl(event, person) {
            event.stopPropagation();
            ngDialog.open( { plain: true, template:
                `<div class="dialog-contents">
                    <div>Name: ${ person.name }</div>
                    <div>Height: ${ person.height }cm</div>
                    <div>Weight: ${ person.mass }kg</div>
                    <br />
                    <button class="btn btn-primary" ng-click="closeThisDialog()">OK</button>
                 </div>`
            });
        }

    }

}());
