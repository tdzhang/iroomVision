
/*
* GET home page.
*/

exports.index = function(req, res){
	res.render('index', { title: 'Express' });
};

exports.json =function(req,res){
	s=[];
	for(var i=0;i<10;i++){
		x=Math.floor((Math.random()*500)+1);
		y=Math.floor((Math.random()*330)+1);
		s.push([x,y])
	}
	res.json(s);
};