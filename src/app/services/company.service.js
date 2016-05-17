Manipulare.factory('listFactory', function($http, $q){
	var service = {};
	var _application = '';
	var _applicationurl = '';
	var _company = '';
	var _url = '';

	var makeUrl = function(company, application) {
		_company = company;
		_application = application;
		switch(_application) {
			case "biom":
				_applicationurl = 'biom.nl';
				break;
			case "columbo":
				_applicationurl = 'inspectionworld.nl';
				break;
		}

		_url = _application + '_' + company + '.' + _applicationurl;
		return _url;
	}

	
});