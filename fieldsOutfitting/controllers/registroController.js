const registroController = function(req, res, next) {
    res.render('registro', { title: 'Express' });
  }

module.exports = registroController;