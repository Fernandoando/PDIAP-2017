'use strict';

const express = require('express')
, router = express.Router()
, passport = require('passport')
, LocalStrategy = require('passport-local').Strategy
, Projeto = require('../controllers/projeto-controller')
, session = require('express-session')
, ProjetoSchema = require('../models/projeto-schema');

/*router.post('/teste', function(req, res) {
      var query = {};
      //generetae query for partial search
      query.email = new RegExp(req.body.email, 'i');// assume email is field name for query.email

        ProjetoSchema.find(query.email,'email -_id', function(error, emails){
          if(error) {
            return res.status(400).send({msg:"error occurred"});
          }
          return res.status(200).send(emails);
        });
});

router.get('/testaemail', function(req, res) {
 //     var query2 = req.body.email;
   //   var query = new RegExp(["^", query2, "$"].join(""), "i");
//ProjetoSchema.find({'email':''},'email -_id', function(error, emails){

        ProjetoSchema.find('email','email -_id', function(error, emails){
          if(error) {
            return res.status(400).send({msg:"error occurred"});
          }
          return res.status(200).send(emails);
        });
});*/

router.get('/', function(req, res, next) {
  res.send('Projetos po');
});

router.get('/registro', testaEmail, (req, res) => {

  /*ProjetoSchema.find('email','email -_id', function(error, emails){
    if(error) {
      return res.status(400).send({msg:"error occurred"});
    }
      return res.status(200).send(emails);
   });*/

});

router.get('/login', (req, res) => {
	res.send('página de login');
});

router.put('/novoIntegrante', (req, res) => {
  let nome = req.body.nomeAluno1
  ,   email = req.body.emailAluno1
  ,   cpf = req.body.cpfAluno1
  ,   telefone = req.body.telefoneAluno1
  ,   tamCamiseta = req.body.tamCamisetaAluno1
  ,   findEmail = req.body.email;

  console.log(findEmail);
  console.log(nome);
  console.log(email);
  console.log(cpf);
  console.log(telefone);
  console.log(tamCamiseta);
  
  ProjetoSchema.findOneAndUpdate(
    {"email": findEmail}, 
    {$push: {integrantes: {
        nome: nome,
        email: email,
        cpf: cpf,
        telefone: telefone,
        tamCamiseta: tamCamiseta
    }}
    }).then(function (projeto) {
      console.log(projeto);
    res.json({success: true});
  });
})

function testaEmail(req, res) {
    ProjetoSchema.find('email','email -_id', function(error, emails){
    if(error) {
      return res.status(400).send({msg:"error occurred"});
    } else
      return res.status(200).send(emails);
  });
}

function testaEmail2(req, res, next) {
  var query2 = req.body.email;
  var query = new RegExp(["^", query2, "$"].join(""), "i");

  ProjetoSchema.find({'email':query},'email -_id', function(error, emails){
    if(error) {
      return res.status(400).send({msg:"error occurred"});
    } else if(emails != 0) {
      res.status(202).send("Email já cadastrado");
    } else
      return next();
    });
}

router.post('/registro', testaEmail2, (req, res) => {

  let nomeProjeto = req.body.nomeProjeto
  ,   tipo = req.body.tipo
  ,   categoria = req.body.categoria
  ,   eixo = req.body.eixo

  ,   nomeEscola = req.body.nomeEscola
  ,   cep = req.body.cep
  ,   cidade = req.body.cidade
  ,   estado = req.body.estado

  ,   resumo = req.body.resumo

  ,   email = req.body.email
  ,   password = req.body.password
  ,   password2 = req.body.password2

  ,   tipoOrientador1 = req.body.tipoOrientador1  
  ,   nomeOrientador1 = req.body.nomeOrientador1
  ,   emailOrientador1 = req.body.emailOrientador1
  ,   cpfOrientador1 = req.body.cpfOrientador1
  ,   telefoneOrientador1 = req.body.telefoneOrientador1
  ,   tamCamisetaOrientador1 = req.body.tamCamisetaOrientador1

  ,   tipoOrientador2 = req.body.tipoOrientador2
  ,   nomeOrientador2 = req.body.nomeOrientador2
  ,   emailOrientador2 = req.body.emailOrientador2
  ,   cpfOrientador2 = req.body.cpfOrientador2
  ,   telefoneOrientador2 = req.body.telefoneOrientador2
  ,   tamCamisetaOrientador2 = req.body.tamCamisetaOrientador2

  ,   tipoAluno1 = req.body.tipoAluno1
  ,   nomeAluno1 = req.body.nomeAluno1
  ,   emailAluno1 = req.body.emailAluno1
  ,   cpfAluno1 = req.body.cpfAluno1
  ,   telefoneAluno1 = req.body.telefoneAluno1
  ,   tamCamisetaAluno1 = req.body.tamCamisetaAluno1

  ,   tipoAluno2 = req.body.tipoAluno2
  ,   nomeAluno2 = req.body.nomeAluno2
  ,   emailAluno2 = req.body.emailAluno2
  ,   cpfAluno2 = req.body.cpfAluno2
  ,   telefoneAluno2 = req.body.telefoneAluno2
  ,   tamCamisetaAluno2 = req.body.tamCamisetaAluno2

  ,   tipoAluno3 = req.body.tipoAluno3
  ,   nomeAluno3 = req.body.nomeAluno3
  ,   emailAluno3 = req.body.emailAluno3
  ,   cpfAluno3 = req.body.cpfAluno3
  ,   telefoneAluno3 = req.body.telefoneAluno3
  ,   tamCamisetaAluno3 = req.body.tamCamisetaAluno3;

  	// Validações
  	req.checkBody('email', 'Email is required').notEmpty();
  	req.checkBody('email', 'Email is not valid').isEmail();
  	req.checkBody('password', 'Password is required').notEmpty();
  	req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

	let errors = req.validationErrors();

	if(errors){
		res.status(501).send('error');
    console.log("Errors: "+errors);
	} else {

    let newIntegrante = ({
      tipo: tipoOrientador1,
      nome: nomeOrientador1,
      email: emailOrientador1,
      cpf: cpfOrientador1,
      telefone: telefoneOrientador1,
      tamCamiseta: tamCamisetaOrientador1
    });

    let newIntegrante2 = ({
      tipo: tipoOrientador2,
      nome: nomeOrientador2,
      email: emailOrientador2,
      cpf: cpfOrientador2,
      telefone: telefoneOrientador2,
      tamCamiseta: tamCamisetaOrientador2
    });

    let newIntegrante3 = ({
      tipo: tipoAluno1,
      nome: nomeAluno1,
      email: emailAluno1,
      cpf: cpfAluno1,
      telefone: telefoneAluno1,
      tamCamiseta: tamCamisetaAluno1
    });

    let newIntegrante4 = ({
      tipo: tipoAluno2,
      nome: nomeAluno2,
      email: emailAluno2,
      cpf: cpfAluno2,
      telefone: telefoneAluno2,
      tamCamiseta: tamCamisetaAluno2
    });

    let newIntegrante5 = ({
      tipo: tipoAluno3,
      nome: nomeAluno3,
      email: emailAluno3,
      cpf: cpfAluno3,
      telefone: telefoneAluno3,
      tamCamiseta: tamCamisetaAluno3
    });

		let newProject = new ProjetoSchema({
      nomeProjeto: nomeProjeto,
      tipo: tipo,
      categoria: categoria,
      eixo: eixo,
      
      nomeEscola: nomeEscola,
      cep: cep,
      cidade: cidade,
      estado: estado,
      
      resumo: resumo,
      
      email: email,
      password: password,
      password2: password2,
		});

    if(tipoAluno3 && nomeAluno3 && emailAluno3 && cpfAluno3 && telefoneAluno3 && tamCamisetaAluno3){
      newProject.integrantes.push(newIntegrante5);
    }

    if(tipoAluno2 && nomeAluno2 && emailAluno2 && cpfAluno2 && telefoneAluno2 && tamCamisetaAluno2){
      newProject.integrantes.push(newIntegrante4);
    }
    
    if(tipoOrientador2 && nomeOrientador2 && emailOrientador2 && cpfOrientador2 && telefoneOrientador2 && tamCamisetaOrientador2){
          newProject.integrantes.push(newIntegrante2);
    }

    newProject.integrantes.push(newIntegrante);
    newProject.integrantes.push(newIntegrante3);

		Projeto.createProject(newProject, (err, user) => {});

		res.redirect('/projetos/login');
	}
  res.send('OK');
});

// Setando a estatégia a ser usada no passport
passport.use(new LocalStrategy(
	(email, password, done) => {
	Projeto.getProjectByEmail(email, (err, user) => {
	  	if(err) throw err;
	   	if(!user){
	   		return done(null, false, {message: 'Unknown User'});
	   	}
   	Projeto.comparePassword(password, user.password, (err, isMatch) => {
   		if(err) throw err;
   		if(isMatch){
   			return done(null, user);
   		} else {
   			return done(null, false, {message: 'Invalid password'});
   		}
   	});
   });
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  Projeto.getProjectById(id, (err, user) => {
    done(err, user);
  });
});

// POST na rota de login (/projetos/login)
router.post('/login',
  passport.authenticate('local'), (req, res) => {
    res.send(req.user);
    //res.redirect('/projetos/dados');
    //res.cookie('userid', user.id, { maxAge: 2592000000 });  // Expires in one month
  });

// Função pra validar se está autenticado ou não
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated())
    return next();
  else{
    res.send('0');
    res.redirect('/#/login');
  }
    // Return error content: res.jsonp(...) or redirect: res.redirect('/login')
}

// GET na rota home, redirecionado após logar (/projetos/home) -> vai printar SOMENTE as informações do projeto
router.get('/home', ensureAuthenticated, (req, res) => {
  res.send(req.user);
});

//método ligeiro
    /*
router.get('/home', ensureAuthenticated, function(req, res) {
  res.send(req.isAuthenticated() ? req.user : '0');
});*/

// GET na rota todos para mostrar TODOS os projetos cadastrados (projetos/todos)
router.get('/todos', ensureAuthenticated, (req, res) => {
	//res.set({ 'Content-Type' : 'text/json; charset=utf-8'})
  Projeto.findAll((err, docs) => {
   	res.send(docs);
  })
});

// POST pra dar logout :P (/projetos/logout)
router.post('/logout', (req, res) => {
	req.logout();
  res.send(200);
	//res.clearCookie('userid');
	res.redirect('/#/login');
});

router.get('/update', (req, res) => {
  res.send('Página de update');
});

router.put('/update', ensureAuthenticated, (req, res) => {
  let id = req.user.id;
  let newProject = req.body;
  ProjetoSchema.update({_id:id}, {$set:newProject}, {new: true}, function(err,docs) {
    if(err) {
      console.log("Deu erro");
    } else {
      console.log("Projeto modificado", docs);
      res.status(200).send(newProject);
    }
  });
});

/*router.put("/:id",function (req,res) {
          var newUser = req.body;
          UserModel.update({_id:newUser._id},{$set:newUser},function (err,docs) {
            if(err){
              console.log("some error occurred in update");
            }else{
              console.log("update user",docs);
              res.status(200).json(newUser);
            }
          });
        });﻿*/

module.exports = router;