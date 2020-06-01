/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/*================================================================
 =>                  Directive = slimScroll
 ==================================================================*/
/*global app, $*/

programmingTutorial.directive('slimScroll', ['$rootScope', function($rootScope) {
        'use strict';
        return {
            restrict: 'A',
            link: function(scope, elem, attrs) {             
                scope.bodyHight = $('body').outerHeight();
                if (attrs.id === 'scrollEnquery' ) {
                    $(elem).slimScroll({height: '280px'});
                }
                else if (attrs.id === 'promotionEnqueryDesign' || attrs.id === 'res' || attrs.id === 'req') {
                    $(elem).slimScroll({height: '340px'});
                }
                else if (attrs.id ===  'popContentMob') {
                    $(elem).slimScroll({height: '210px'});
                }
                else if (attrs.id ===  'getStarted') {
                    $(elem).slimScroll({height: '350px'});
                }
                else if (attrs.id ===  'popupContact') {
                    $(elem).slimScroll({height: '75px'});
                }
				else if (scope.bodyHight > 700) {
                    $(elem).slimScroll({height: '400px'});
                }
                else {
                    $(elem).slimScroll({height: '400px'});
                }
            }
        };
    }]);

