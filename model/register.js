let sql = require('../model/mySQL');


function register(user){


    sql.connect;
    
   
        sql.register("INSERT INTO users (firstname,lastname,email,pass,city,usernumber) Values (\'"+user.firstname+"\',\'"+user.lastname+"\',\'"+user.email+"\',\'"+user.password+"\',\'"+user.city+"\',\'"+user.numberUser+"\')");
 
  

    
    sql.disconnect;

}

module.exports = {
    register: register
}