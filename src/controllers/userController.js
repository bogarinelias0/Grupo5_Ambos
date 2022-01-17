const controlador= {
    login:(req, res) => {
        res.sendFile('login.html',{root:"./views"});
    },

    registro:(req, res)=>{
        res.sendFile('register.html',{root:"./views"});
    },
};

module.exports=controlador;