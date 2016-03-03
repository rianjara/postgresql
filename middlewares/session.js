"use strict";

module.exports = function(req, res, next) {

    if(req.session){
        if(!req.session.usuario){
            res.redirect('/login');
        }else{
            next();
        }
    }else{
        next();
    }


    /*
    if(!req.session.usuario){
        res.redirect('/login');
    }else{
        next();
    }
    */
}