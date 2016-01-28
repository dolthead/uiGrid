(function(){
    'use strict';

    angular.module('homeService', [])
        .service('homeService', homeService);

    homeService.$inject = ['swapi'];

    function homeService(swapi) {

        // list everything
        var hs = this;
        hs.myGrid = {
            data: undefined,
            enableFullRowSelection: true,
            columnDefs: [
                { field: 'name', name: 'Character Name' },
                { field: 'url', name: 'URL',
                    cellTemplate: '<button class="btn btn-info" ng-click="grid.appScope.hc.clickUrl($event, row.entity)">' //
                        + 'Details</button>'}
            ]
        };

        getData().then(function(data){
            hs.myGrid.data = data;
        });

        // private function
        function getData() {
            return swapi.people.get()
                .then(function(data) {
                    console.log(data.results[0]);
                    return data.results;
                });
        }

    }

}());
