
'use strict';

angular.module('formApp.results', [])
    .controller('results', ['main_server', 'user_data', '$location', function(main_server, user_data, $location){
        var self = this;
        self.user_data = user_data;
        if (!(self.user_data.results)){
            $location.path('/form')
        }
    }])
;
