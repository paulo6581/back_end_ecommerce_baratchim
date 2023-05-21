const Login = require('../models/loginModel');

exports.index = (req, res) => {
    res.render('cadastrar.ejs');

};

exports.register = async (req, res) => {
    try {
        const login = new Login(req.body);
        await login.register();
    
        if (login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(() => {
                return res.redirect('../cadastrar/index');
            });
            return;
        }
    
        req.flash('success', 'Seu usuário foi criado com sucesso.');
        req.session.save(() => {
            return res.redirect('../login/index');
        });
    } catch(e) {
        console.log(e);
        return res.render('404.ejs');
    }
  
};