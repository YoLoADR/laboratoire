angular.module("labo", [])

//  ____            _          ____ _____ ____  _     
// |  _ \  __ _  __| |_   _   / ___|_   _|  _ \| |    
// | | | |/ _` |/ _` | | | | | |     | | | |_) | |    
// | |_| | (_| | (_| | |_| | | |___  | | |  _ <| |___ 
// |____/ \__,_|\__,_|\__, |  \____| |_| |_| \_\_____|
//                    |___/                           

.controller("laboCTRL", function($scope, objectRetriver, objectRetriverV2, objectRetriverV3){
	$scope.msg = "Hello ! Bienvenue dans ton laboratoire :";
	$scope.dadyMSG = "Je suis ton père";
	$scope.user = {};
	$scope.thumbnail = false;
	$scope.myVar="tuts";
	$scope.getGitProfil = function(user){
		var pseudo = user.pseudo;

		// µ°*___---> PROMISE
		// objectRetriver
		// .getAlllObjects(pseudo)
		// .then(function(data){
		// 	$scope.thumbnail = true;
		// 	console.log(data.data.blog);
		// 	$scope.blog = data.data.blog;
		// 	$scope.img = data.data.avatar_url;
		// 	$scope.name = data.data.name;
		// 	$scope.bio = data.data.bio;
		// 	$scope.bioDefault = "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.";
		// }, function(response){ console.log("Error")});

		// µ°*___---> PROMISE Version 2 (Grafikfart)
	// 	objectRetriverV2
	// 		.getGitInfo(pseudo)
	// 		.then(function(data){
	// 		$scope.thumbnail = true;
	// 		console.log(data.data.blog);
	// 		$scope.blog = data.data.blog;
	// 		$scope.img = data.data.avatar_url;
	// 		$scope.name = data.data.name;
	// 		$scope.bio = data.data.bio;
	// 		$scope.bioDefault = "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.";
	// 	}, function(response){ console.log("Error")});
	// };

	// µ°*___---> PROMISE Asynchrone Version 3 (Grafikfart)
		objectRetriverV3
			.getGitInfo(pseudo)
			// then = "Une fois getGitInfo terminer alors"; 
			.then(function(data){
			$scope.thumbnail = true;
			console.log(data);
			console.log(data.blog);
			$scope.blog = data.blog;
			$scope.img = data.avatar_url;
			$scope.name = data.name;
			$scope.bio = data.bio;
			$scope.bioDefault = "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.";
		}, function(response){ console.log("Error")});
	};
	
	


})

//  ____                 ____ _____ ____  _     
// / ___|  ___  _ __    / ___|_   _|  _ \| |    
// \___ \ / _ \| '_ \  | |     | | | |_) | |    
//  ___) | (_) | | | | | |___  | | |  _ <| |___ 
// |____/ \___/|_| |_|  \____| |_| |_| \_\_____|


.controller("childLaboCTRL", function($scope){
	$scope.sonMSG = "Je suis ton fils";
	$scope.valide = true;
	$scope.data = {};
	$scope.formu = function(data){
		$scope.data = data;
		console.log($scope.data);
		console.log(data);
	};

	$scope.dato = {};
	$scope.formu = function(dato){
		$scope.dato = dato;
		console.log($scope.dato);
	};


	$scope.comments = [
  {
    "username": "Rosanna",
    "company": "Kozgene",
    "email": "meredithmarquez@exospace.com",
    "phone": "(961) 401-2394",
    "content": "Amet exercitation fugiat aliquip proident."
  },
  {
    "username": "Burton",
    "company": "Honotron",
    "email": "kellyalexander@zanymax.com",
    "phone": "(990) 562-2343",
    "content": "Voluptate non non non nulla qui et do ea."
  },
  {
    "username": "Stacy",
    "company": "Comtrail",
    "email": "anngraham@affluex.com",
    "phone": "(973) 575-2465",
    "content": "Amet consectetur ullamco sint ullamco consequat proident."
  },
  {
    "username": "Kinney",
    "company": "Filodyne",
    "email": "bridgeslester@equitax.com",
    "phone": "(972) 466-3102",
    "content": "In sunt deserunt exercitation aute ea labore cillum."
  },
  {
    "username": "Wiggins",
    "company": "Zisis",
    "email": "careysims@frenex.com",
    "phone": "(948) 585-3643",
    "content": "Aliqua cupidatat ad irure elit amet ex."
  }
];

console.log($scope);

// FORM Bonne pratique et $valid

$scope.nomPlayer="";
// $scope.mail="";
$scope.connect = function(){
	if($scope.login.nomPlayer.$valid && $scope.login.mail.$valid){
		alert("Tout est OK !");
	}else{
		alert("Vous devez saisir les champs obligatoires")
	}
};

}) //.controller("childLaboCTRL"
;