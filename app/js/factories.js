angular.module("labo")
	.factory("objectRetriver", function($http, $q){

		function getAlllObjects(pseudo){
			// la la promesse elle part tout de suite
			return $http({
			method: "GET",
			url: 'https://api.github.com/users/'+ pseudo
			}).then(function(data){
				console.log("on est dans la V1");
				console.log("Success", data);
				return data;
			}, function errorCallback(response) {
				$q.reject("Sorry by Justin Error !!!", response.status);
		  	});
		};
		
		 return {
		 	getAlllObjects : getAlllObjects
		 }

	})

	// SAUVGARDE
	.factory("objectRetriverV2", function($http, $q){
		//Bonus deferred .RESOLVE .REJECT .PROMISE
		var factory = {
			getGitInfo : function(pseudo){
				
				return $http.get('https://api.github.com/users/' + pseudo).then(function(data){
					console.log("on est dans la V2");
					return data;
				});
			}
			
		};
		return factory;

	})
	
	.factory("objectRetriverV3", function($http, $q){
		//Bonus Asynchrone deferred .RESOLVE .REJECT .PROMISE
		var factory = {
			getGitInfo : function(pseudo){
				// defer = "La j'initialise une nouvelle tache qui vas ce terminer dans le futur           
				var deferred = $q.defer();
				// Une fois la tache bien réaliser il faut faire resolve suivi d'un paramètre deferred.resolve
				// Si la tache foire il faut faire un reject et indiquer pourquoi ça a foiré - deferred.reject
				// Et une fois que les taches seront finis on  renvoit notre promess en faisant un - return deferred.promise
				$http.get('https://api.github.com/users/' + pseudo)
				.success(function(data, status){
					factory.getGitData = data;
					// Je revoie les données
					deferred.resolve(data);
				}).error(function(data, status){
					deferred.reject("impossible de récupérer les articles");
				})
				return deferred.promise;
			}
			
		};
		return factory;

	})

;// Fin angular.module("labo")