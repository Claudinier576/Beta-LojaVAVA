var acconts = require('../src/accont.json');


function verifyCookieLogins(req, res, next){

    console.log(req.cookies.loginPassword)

  if(req.cookies.loginEmail != undefined && req.cookies.loginPassword != undefined){

    console.log(req.cookies.loginPassword)



    connection.query('SELECT * FROM users', function(err,rows,filelds){

        if(!err){
          console.log('Dados da tabela users: ',rows);
        }else{
          console.log(err)
        }
      
      });





    var accont = acconts.filter(function(accont){

        return accont.email == req.cookies.loginEmail ; 
    
     })

        accont.forEach(function(accont){
            if(accont.email == req.cookies.loginEmail && accont.password == req.cookies.loginPassword){
                req.session.user = accont
                console.log('\n\n\n\n\n'+ accont+ '    '+ req.session.user)
                next();
            }
        });
        
    }
    next();


  }

 


module.exports ={
    verifyCookieLogins: verifyCookieLogins
}
