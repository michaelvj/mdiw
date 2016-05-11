'use strict';
Manipulare.directive('navBar', function(){
	// Runs during compile
	var html = '<div id="sidebar-wrapper">' +
        '    <ul class="sidebar-nav">' +
        '        <li class="sidebar-brand">' +
        '            <a href="#">' +
		'				Manipulare' +
		'			</a>' +
		'		</li>' +
		'		<li>' +
	    '			<a href="#/memes">Overview</a>' +
		'		</li>' +
		'		<li>' +
		'			<a href="#"></a>' +
		'		</li>' +
		'		<li>' +
		'			<a href="#/list">Companies</a>' +
		'		</li>' +
		'		<li>' +
		'			<a href="#/querying">Querying</a>' +
        '		</li>' +
        '	</ul>' +
        '</div>';

	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		restrict: 'A',
		template: html,
		link: function($scope, iElm, iAttrs, controller) {
			
		}
	};
});