var mysql=require("mysql");
var con=mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'srujan',
        database:'project',
});
//creating function to createdb
var createDb=function(name){
    con.connect(function(err){
        if(err) return err;
        let sql="create Database"
    })
}
//
function insert(values,callback){
        console.log(values);

        var sql="INSERT INTO user_registration(id,firstname,lastname,username,password,email,phone_no,user_type) values ?";

        con.query(sql,[values], function (err, result, fields) {
          // if any error while executing above query, throw error
          if (err) throw err;
          // if there is no error, you have the result
         // console.log("Number of records inserted: " + result.affectedRows);
          callback(null,result.affectedRows);
        });
      
}





function validate(unme,callback){
    var sql="select password,user_type from user_registration where username= ?";
    con.query(sql,[unme],function(err,result){
        if(err) throw err;
        callback(null,result);
    })
}

function validatetypechange(callback){
    var sql="select * from user_typechange";
    con.query(sql,function(err,result){
        if(err) throw err;
        callback(null,result);
    })
}

function updateusertype(change,callback){
    var sql="update user_registration set user_type='admin' where username=?"
    con.query(sql,[change],function(err,result){
        if(err) throw err;
        callback(null,result);
    })
}


function list(u,callback){
    console.log('in db');
    con.query("select * from plans where username=?",u,function(err,rows){
        if(err){
            console.log('The error is due to : ',err);
        }
        else{
            console.log(rows);
            callback(null,rows);
        }
    });
}

    /** check in database user exit are not  for validation
     * and  send result back using allback function */
    function check(value,callback){
    
        var sql="select username from user_registration where username = ?"
        con.query(sql,[value],function(err,result){
            if(err) {throw err;}
            else if(result.length==0){
                
                callback(null,"valid user unique userid creates")
            }else{
            callback(null,"userid all ready exit change to unique one");
            }
        })
    }



    
    function addchit(value,callback){
        console.log(value);
        var sql="insert into plans(id,username,chitname,members,months,monthly_installments,total_value) values ?"
        con.query(sql,[value],function(err,result){
            if(err) throw err;
            callback(null,result.affectedRows);
        });
    }

module.exports={insert,validate,validatetypechange,updateusertype,list,check,addchit};