exports.login = function(req, res){
	console.log('Email: '+ req.body.email);
	console.log('Password: '+ req.body.password);
	console.log('===========================');

	res.render('index',{
		title: 'Logged in as ' + req.body.email,
		isLoggedIn: true
	});
};


exports.logout = function(req, res){
	console.log('loggin out of system');

	res.render('index',{
		title: 'logged out',
		isLoggedIn: false
	});
};