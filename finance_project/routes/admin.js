var db=require('../modals/dbmethods')
exports.showaddform=function(req,res){
    res.render('showchitadd');
}
exports.insertchit=function(req,res){
    var input=JSON.parse(JSON.stringify(req.body));
    var i=1;
    var id=i;
    var username=input.username;
    var chitname=input.chitname;
    var members=input.members;
    var months=input.months;
    var installment=input.installment;
    var value=input.totalamount;
    var data=[[id,username,chitname,members,months,installment,value]];
    console.log(data)
    db.addchit(data,function(err,result){
        if(err) console.log('db error');
       
       var check= JSON.stringify(result);
       if(check==1){
           i++;
           res.render('adminpage',{title:'mickymouse'});
       }
       else{
           res.render('showchitadd');
       }
   
    });
    
}