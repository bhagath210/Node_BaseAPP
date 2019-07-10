/** function is called when user enter userid
 * it will send details to db and shows result it got
 * from data base
*/
function check(){
    var element=document.getElementById('userid').value;
    var xhr=new XMLHttpRequest();
    console.log(element);
    /**get resut from method in  back ground and send itto server  */
    xhr.onreadystatechange=function(){
        if(xhr.status==200 && xhr.readyState==4){
            var x=document.getElementById('data2')
            x.innerHTML=xhr.responseText
        }
        else{
            var x=document.getElementById('data2')
            x.innerHTML=xhr.responseText
        }
    }
    /** link used to send user id to main server program to check user validation */
    xhr.open("get",`http://localhost:4300/new/check?loc=${element}`, true);

    xhr.send();
 } 
 
 /** function is called when user enter password and check both verification and 
  * password are seme are not
  */


 function password()
 {
     var one=document.getElementById('psw1').value;
     var two=document.getElementById('psw2').value;
          
    if(two.length== 0 && one.length!=0)
    {
        var x=document.getElementById('psw-data')
        x.innerHTML="enter verification password ";
    }
    else if (two.length!= 0 && one.length==0)
    {
        var x=document.getElementById('psw-data');
        x.innerHTML="enter password ";
    }
   
     else if(one==two)
     {
        var x=document.getElementById('psw-data')
        x.innerHTML="password matched";

     }else{
        var x=document.getElementById('psw-data')
        x.innerHTML="password not matched";
     }
 }
