

module.exports = function(app){

    // Express - Router
    const express = require("express");
    var router = express.Router();
    // -- Jobs
    var Jobs = require('./jobs');
    var jobs_router = require('./jobs').router;

    // -- Scheduler
    // ------Meetings
    var Meetings = require('./scheduler/meetings');
    var meetings_router = require('./scheduler/meetings').router;

    // ------MeetingOccurence
    var MeetingsOccurences = require('./scheduler/meetings_occurences');
    var meetings_occurences_router = require('./scheduler/meetings_occurences').router;

    router.get('/', function(req, res) {
        res.json({ message: 'Hooray! Welcome to the Peach api!' });
    });

    router.get('/init', function(req, res) {
        Jobs.initTable();
        Meetings.initTable();
        MeetingsOccurences.initTable();
        res.json({ message: "Initialization queries executed." });
    });

     router.post('/',function(req,res,next){
       console.log(req.body);
     });


    //other routes..

    //Add api routes to app
    app.use('/api', router);
    app.use('/api/jobs', jobs_router);
    app.use('/api/meetings', meetings_router);
    app.use('/api/meetings_occurences', meetings_occurences_router);

}
