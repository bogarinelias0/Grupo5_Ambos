const controlador= {
    login:(req, res) => {
        res.render('login');
    },

    registro:(req, res)=>{
        res.render('register');
    },
};

module.exports=controlador;