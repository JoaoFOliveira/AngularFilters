/**
 * AngularJS Filters
 *
 * @author João Oliveira <@Joao_Oliveira>
 * load and initialize angular.js application
 *
 */
'use strict';

/**
 * Filter to convert units to integer
 */
app.filter('jsInteger', function() {
	return function(number) {
		if(isNaN(number)) {
			return number;
		} else {
			return parseInt(number);
		}
	};
});

/**
 * Filter to convert units to float
 */
app.filter('jsCommas', function() {
	return function(str) {
		return str.replace('.',',');
	};
});

/**
 * Filter the first character of a string
 */
app.filter('jsFirstLetter', function(){    
    return function(name) {
        return name ? name.charAt(0) : '-';
    }; 
});

/**
 * Filter a list by a chosen parameter.
 * 
 * @param list The list to filter
 * @param options The parameters to filter the list by
 * 
 * @return array The filtered list
 */
app.filter('jsFilterList', function() {
	return function(list, options) {
		var filtered = [];
		
		angular.forEach(list, function(value){
			if(value.ParameterToFilterBy === options.ParameterToFilterBy) {
				filtered.push(value);
			}				
		});

		return filtered;
	};
});