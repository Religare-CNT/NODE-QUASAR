const User = require("../models/").User;

exports.listAll = (req, res) => {
	user.findAll().then(users => {
		res.send(users)
	}).catch(error =>{

	})
}


exports.createOne = function(req, res) {
	console.log(req.body)
     const{email , password} =req.body
	User.create({email, password}).then(users => {
		let reponse = {
	  message: 'Usuario criado com sucesso',
	  data: req.body	
	}
	res.send(reponse)

	}).catch(error =>{
		res.send(error)
	})
	
}


exports.Login = function(req, res) {
	console.log(req.body)
     const{email , password} =req.body
	User.findOne({where:{email: email}}).then(users => {
		if(user!= undefined) {


		}else{
			alert("email ou senha incorreta")
		}
	});
}


