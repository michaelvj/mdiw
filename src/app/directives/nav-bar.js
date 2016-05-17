'use strict';
Manipulare.directive('navBar', function(){
	// Runs during compile
	var html =
'<nav class="navbar navbar-inverse">' +
	'<div class="container">' +
		'<div class="navbar-header">' +
			'<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">' +
			'<span class="sr-only">Toggle navigation</span>' +
			'<span class="icon-bar"></span>' +
			'<span class="icon-bar"></span>' +
			'<span class="icon-bar"></span>' +
			'</button>' +
			'<a class="navbar-brand" href="#">Brand</a>' +
		'</div>' +
		'<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">' +
			'<ul class="nav navbar-nav">' +
				'<li><a href="#/compconfig">Overview</a></li>' +
				'<li><a href="#/list">Companies</a></li>' +
				'<li><a href="#/querying">Querying</a></li>' +
			'</ul>' +
		'</div><!-- /.navbar-collapse -->' +
	'</div><!-- /.container-fluid -->' +
'</nav>';

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

