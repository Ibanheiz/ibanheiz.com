module.exports = function (express) {
  'use strict';
  var router = express.Router();
  var _controller = require('./controller');

  router.route('/')
    .get(function (req, res) {
      _controller.buscaPortfolios(req, res);
    });

  return router;
};
