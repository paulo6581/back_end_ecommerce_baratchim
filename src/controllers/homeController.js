
exports.index = async (req, res) => {
    if(req.session.user) {
        res.render('index.ejs', );
        return
    }
    res.render('login.ejs');
};
