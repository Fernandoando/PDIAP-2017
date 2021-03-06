(function(){
	'use strict';

	angular
	.module('PDIAP')
	.factory("projetosAPI", function($http) {
		// let _saveProjeto = function(projeto) {
		// 	const request = {
		// 		url: '/projetos/registro',
		// 		method: 'POST',
		// 		data: projeto
		// 	}
		// 	return $http(request);
		// };

		let _saveSaberesDocentes = function(saberes) {
			const request = {
				url: '/saberes-docentes/registro',
				method: 'POST',
				data: saberes
			}
			return $http(request);
		};

		let _saveAvaliador = function(avaliador) {
			const request = {
				url: '/avaliadores/registro',
				method: 'POST',
				data: avaliador
			}
			return $http(request);
		};

		let _postLogin = function(username,password) {
			const request = {
				url: '/projetos/login',
				method: 'POST',
				data: {
					username: username,
					password: password
				}
			}
			return $http(request);
		};

		let _getProjeto = function() {
			const request = {
				url: '/projetos/home',
				method: 'GET',
			}
			return $http(request);
		};

		let _getCategorias = function() {
			const request = {
				url: 'assets/js/categorias-eixos.json',
				method: 'GET',
			}
			return $http(request);
		};

		let _getEstados = function() {
			const request = {
				url: 'assets/js/estados-cidades.json',
				method: 'GET',
			}
			return $http(request);
		};

		let _getUsersEscolas = function() {
			const request = {
				url: '/projetos/registro',
				method: 'GET',
			}
			return $http(request);
		};

		let _getEscolasSaberes = function() {
			const request = {
				url: '/saberes-docentes/registro',
				method: 'GET',
			}
			return $http(request);
		};

		// let _putProjeto = function(projeto) {
		// 	const request = {
		// 		url: '/projetos/update',
		// 		method: 'PUT',
		// 		data: projeto
		// 	}
		// 	return $http(request);
		// };

		let _putIntegrante = function(integrante) {
			const request = {
				url: '/projetos/upgreice',
				method: 'PUT',
				data: integrante
			}
			return $http(request);
		};

		let _removeIntegrante = function(integrante) {
			const request = {
				url: '/projetos/removerIntegrante',
				method: 'PUT',
				data: integrante
			}
			return $http(request);
		};

		let _postRedefinir = function(username) {
			const request = {
				url: '/projetos/redefinir-senha',
				method: 'POST',
				data: username
			}
			return $http(request);
		};

		let _postNewPassword = function(password,username,token) {
			const request = {
				url: '/projetos/nova-senha/'+username+'/'+token,
				method: 'POST',
				data: password
			}
			return $http(request);
		};

		let _postContato = function(contato) {
			const request = {
				url: '/projetos/contato',
				method: 'POST',
				data: contato
			}
			return $http(request);
		};

		return {
			// saveProjeto: _saveProjeto,
			saveSaberesDocentes: _saveSaberesDocentes,
			saveAvaliador: _saveAvaliador,
			postLogin: _postLogin,
			getProjeto: _getProjeto,
			getCategorias: _getCategorias,
			getEstados: _getEstados,
			getUsersEscolas: _getUsersEscolas,
			getEscolasSaberes: _getEscolasSaberes,
			// putProjeto: _putProjeto,
			putIntegrante: _putIntegrante,
			postRedefinir: _postRedefinir,
			postNewPassword: _postNewPassword,
			postContato: _postContato,
			removeIntegrante: _removeIntegrante
		};
	});
})();
