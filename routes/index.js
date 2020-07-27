module.exports = function(app)
{
     app.get('/',function(req,res){
        res.render('index')
     });
     app.get('/Knn', function(req, res){
         res.render('knn')
     });
     app.get('/Linear', function(req, res){
         res.render('linear')
     });
}