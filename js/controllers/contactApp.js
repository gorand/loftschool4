contactApp.controller('ContactListCtrl', ['$scope', '$firebase', function($scope, $firebase) {
	var ref = new Firebase('https://basecontacts.firebaseio.com'),
		sync = $firebase(ref);
	
    $scope.contacts = sync.$asArray();
	
	$scope.tile = false;
	$scope.list = true;
}]);
