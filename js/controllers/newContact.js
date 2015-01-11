contactApp.controller('NewContactCtrl', ['$scope', '$firebase', function($scope, $firebase){
	var ref = new Firebase('https://basecontacts.firebaseio.com'),
	sync = $firebase(ref);
	$scope.contacts = {};
	
}]);