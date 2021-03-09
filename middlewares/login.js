

let sql = require('../model/mySQL');

function verifyLogins(req, res, next) {

  if (req.session.user == null || req.session.user == undefined) {

    sql.connect;
    
    var accontEmail = sql.get('SELECT email FROM users WHERE email = \''+req.body.email+'\'');

    console.log('esse é  o email: ',req.body.email);
    var accont = accontEmail;

    console.log('this is accont:',accont);

    if (accont.email == req.body.email && accont.pass == req.body.password){ 
      req.session.user = accont
       next();
    }


    res.redirect('/login');
    return;

  }

  next();
}



module.exports = {
  verifyLogins: verifyLogins
}
