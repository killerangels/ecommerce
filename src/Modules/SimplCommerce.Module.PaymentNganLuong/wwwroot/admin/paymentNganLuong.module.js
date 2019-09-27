﻿/*global angular*/
(function () {
    'use strict';

    angular
        .module('simplAdmin.paymentNganLuong', [])
        .config(['$stateProvider',
            function ($stateProvider) {
                $stateProvider
                    .state('payments-nganluong-config', {
                        url: '/payments/ngan-luong/config',
                        templateUrl: 'modules/paymentnganluong/admin/ngan-luong/ngan-luong-config-form.html',
                        controller: 'NganLuongConfigFormCtrl as vm'
                    })
                ;
            }
        ]);
})();
