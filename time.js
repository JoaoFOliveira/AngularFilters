/**
 * AngularJS Filters
 *
 * @author João Oliveira <@Joao_Oliveira>
 * load and initialize angular.js application
 * load moment.js
 *
 */
'use strict';

//
// SAP Time Format to Human Time Format
// 121500 -> 12:15
//
app.filter('jsSAPtime', function() {
    return function(time) {
    	if(time.length > 0) {
    		time = moment(time, 'HHmmss').format('HH:mm');
    	}
        return time;
    };
});

//
// Unix Timestamp to Human Time Format
// 123456789 -> 12:15:18
//
app.filter('jsTime', function(){    
    return function(date) {
        return (typeof date !== 'undefined') ? moment(date,'YYYY-MM-DD HH:mm:ss').format('HH:mm:ss') : '';
    }; 
});
