
module.exports = function(app) {
	const UserController = require('../controllers/UserConttroller.js')


    app.route('/user')
        .post (UserController.createOne)

    app.route('user/login')
        .post (UserController.Login)
}
