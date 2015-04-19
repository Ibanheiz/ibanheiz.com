module.exports = function (express) {
  var router = express.Router();

  router.get('/:module/:name', function (req, res) {
    var module = req.params.module;
    var name = req.params.name;
    res.render(module + '/views/' + name);
  });

  return router;
}