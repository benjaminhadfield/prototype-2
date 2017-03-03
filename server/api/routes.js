

module.exports = function(app){

    // Express - Router
    const express = require("express");
    var router = express.Router();
    // Jobs
    var Jobs = require('./jobs');
    var jobs_router = require('./jobs').router;

    router.get('/', function(req, res) {
        res.json({ message: 'Hooray! Welcome to the Peach api!' });
    });

    router.get('/init', function(req, res) {
        Jobs.initTable();
        res.json({ message: "Initialization queries executed." });
    });

     router.post('/',function(req,res,next){
       console.log(req.body);
     });


    //other routes..

    //Add api routes to app
    app.use('/api', router);
    app.use('/api/jobs', jobs_router);
}
