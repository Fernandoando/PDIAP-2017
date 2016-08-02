(function(){
	'use strict';

	angular
	.module('PDIAP')
	.controller('saberesCtrl', function($scope, $location, projetosAPI) {

		$scope.registrarSaberes = function(projeto) {
			projetosAPI.saveProjeto(projeto)
			.success(function(projeto, status) {
				console.log(projeto);
				if (status === 202) {
					$scope.emailDuplicado = true;
					$scope.projetoForm.email.$setValidity('duplicado',false);
					console.log('email duplicado: '+$scope.emailDuplicado);
				} else if (projeto !== 'error') {
					$scope.registro = true;
					$scope.msg = 'Registrado com sucesso!';
					//$location.url('/inscricao');
					resetForm();
				} else {
					$scope.registro = false;
					$scope.msg = 'Erro ao registrar projeto.';
					//$location.url('/inscricao');
				}
			})
			.error(function(status) {
				$scope.registro = false;
				$scope.msg = 'Erro ao registrar projeto.';
				console.log(status);
				//$location.url('/inscricao');
			});
			console.log(projeto);
		};
	});
})();