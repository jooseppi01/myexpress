var express = require('express');
const { route } = require('.');
const { response } = require('../app');
var router = express.Router();

/* GET users listing. */

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  console.log("kukkuluuruu");
});

router.use(function (request,response,next){
  console.log("olen välivehje 1!");
  next();
});



router.get ('/eka/:nimi', function(request, response)
{
  response.send("olenpa vaan "+request.params.nimi);
  console.log(request.params.nimi);

});



router.get ('/toka/:enimi/:snimi', function(request, response)
{
  response.send("olenpa vaan "+request.params.enimi+" "+request.params.snimi);
});


router.post('/',function(request,response)
{
  response.send(request.body);
});

module.exports = router;
