module.exports = function (express) {
  var router = express.Router();

  router.get(['/', '/:page', '/:page/:id'], function (req, res) {
    res.render('main/views/index');
  });

  return router;
};
