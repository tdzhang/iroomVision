
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.json =function(req,res){
  var s=[1,2,3,4];
  res.json(s);
};