var db = require('./database');
var express = require("express");
var router = express.Router();

// ---------JOBS CRUD Functions-----------

var Job = {

  // id, status, title, comment, who_assigned_id, due_date, assigned_date, user_id

  getAllJobs:function(callback){
    return db.query("Select * from jobs",callback);
  },
  getJobById:function(id,callback){
    return db.query("select * from jobs where job_id=?",[id],callback);
  },
  addJob:function(Job,callback){
    console.log(Job);
    return db.query("Insert into jobs values(?,?,?,?,?,?,?,?,?)",[null,Job.title,0,Job.comment,Job.assigned_by_id,Job.assigned_to_id,Job.patient_id,null,null],callback);
  },
  deleteTask:function(id,callback){
    return db.query("delete from jobs where Id=?",[id],callback);
  },
  updateTask:function(id,Task,callback){
    return db.query("update jobs set Title=?,Status=? where Id=?",[Task.Title,Task.Status,id],callback);
  },
  initTable:function(){
    var init = db.query(`CREATE TABLE IF NOT EXISTS jobs
    (job_id MEDIUMINT NOT NULL AUTO_INCREMENT, title varchar(500) NOT NULL, status INT NOT NULL DEFAULT 0, comment MEDIUMTEXT NOT NULL,
    assigned_by_id MEDIUMINT NOT NULL,assigned_to_id MEDIUMINT NOT NULL, patient_id MEDIUMINT, due_date DATETIME, assigned_date TIMESTAMP, PRIMARY KEY (job_id))
     ENGINE=InnoDB DEFAULT CHARSET=latin1;` , function (error, results, fields) {
      if (error) {
        console.log(error);
      }
    });
  }

};

// ----------JOBS ROUTES----------

// Get a job by id - Get all jobs if id not specified
router.get('/:id?',function(req,res,next){

  if(req.params.id){
    Job.getJobById(req.params.id,function(err,rows){
      if(err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else{
    Job.getAllJobs(function(err,rows){
      if(err){
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});

// Insert job
router.post('/',function(req,res,next){
  console.log(req.body);
  Job.addJob(req.body,function(err,count){
    if(err) {
      res.json(err);
    } else{
      res.json(req.body);
    }
  });
 });



module.exports=Job;
module.exports.router = router;
