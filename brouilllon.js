//Common js ligne 129
$scope.clear = function () { search_filter_service.getClearUsrFiltersValues($scope.nomEcran); };
        $scope.doExport = function () {
            $scope.filter(true);
        };
        $scope.filterInfo.doExport = $scope.doExport;


// Déblocage CTRL ligne 111
$scope.doExport = function(){
                 $scope.filterInfo.doExport();
            };

Row entity
{"cmis_objectId":"199","cred_conforme":true,"cred_rang_offre":"1","cred_agence":"Tours","cred_neo":"E1234567","cred_definitif":"12345678","cred_complexite_offre":"STANDARD","cred_date_reception":1469623697000,"cred_date_edition":1469537297000,"cred_date_signature":1469710097000,"cmis_creationDate":1469606118386,"cmis_lastModificationDate":1469606118386}


// Colum def deux valeur dans une cellule
displayEmprunt: function (row){
                    var txt = row.getProperty('cred_nom_emprunt') +" "+row.getProperty('cred_prenom_emprunt');
                    // console.log(txt);
                    // console.log(row);
                    return txt;
                },
                
{ field: 'cred_nom_emprunt', displayName: 'Emprunteur', queryName: 'dc.cred:nom_emprunt,dc.cred:prenom_emprunt', cellTemplate: '<div class="ngCellText">{{filterInfo.displayEmprunt(row)}}</div>' },

// Modifier la valeur d'une cellule grace à une fonction

function deblocageStatutAttente(statut){//deblocageStatutAttente(row.cred_statut)
if( statut === 'TOTO'){ return 'OUI';} else { return "NON";}
            }

{ field: 'cred_statut', displayName: 'Statut', queryName: 'db.cred:statut', cellTemplate:'<div ng-click="filterInfo.displayInfo(row)" class="ngCellText" ng-class="col.colIndex()"><span ng-cell-text>{{deblocageStatutAttente(COL_FIELD)}}</span></div>' },


	// Version qui marche 
	$scope.filterInfo = {
	controleStatut: function(row){
                    var txt = row.getProperty('cred_conforme');
                    if(txt == true){
                        txt = "Conforme";
                    }else if(txt == false){
                        txt = "Non conforme";
                    }
                    // console.log(txt);
                    // console.log(row);
                    return txt;
                }
      };

    { field: 'cred_conforme', displayName: 'Contrôle', queryName: 'ro.cred:conforme', cellTemplate: '<div class="ngCellText">{{filterInfo.controleStatut(row)}}</div>' },

    //

    //ETAPE 1 Head tableau
            // var dossierCredId = "";
            credimmo_deblocages_service.getDeblocages(rowData.entity["cred_dossier_id"]).then(function(dossierData){
            // récupérer les données du dossier et les exploiter dans le controllereu (ou la vue)
            $scope.neo = dossierData.ObjectGraph["succinctProperties"]["cred:neo"];
            $scope.nomDocument = dossierData.ObjectGraph["succinctProperties"]["cmis:name"];
            $scope.typeDocument = dossierData.ObjectGraph["succinctProperties"]["cred:type_loi"];
            var sourceId = dossierData.ObjectGraph["succinctProperties"]["cred:source_id"];
            $scope.dossierCredId = dossierData.ObjectGraph["succinctProperties"]["cmis:objectId"];
            }).then(function(){
        //ETAPE 2 Tableau
            credimmo_deblocages_service.getHistoriqueDeblocage($scope.dossierCredId).then(function(data){

             $scope.listeOperations = data.data[0]; // ng-repeat #1

             var dirtyListeOperation = $scope.listeOperations["cred:details"];
             var detailModifications = [];
             for(var i = 0; i < dirtyListeOperation.length; i++){
                    var item = dirtyListeOperation[i];
                    var obj = JSON.parse(item);
                    var itemJson = detailModifications.push(obj);

                }
            $scope.listeDetailModifications = detailModifications;

        //ETAPE 3 DETAILS
             $scope.selectOperation = function(operationCourant){
                $scope.listeOperationCourant = operationCourant.Modification; // ng-repeat #2

                };
             
            });