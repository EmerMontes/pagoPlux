const  User = require('../models/user.js');

const  getUsers = async (req, res) => {

    try {
      const {email,  password} = req.body
      const user =  await User.findOne({where: {email: email} })
      if (!user) {
          return res.status(404).json({ error: 'Usuario no encontrado' });
       }
     if(user.password === password){
         return res.status(200).json(user);
      }else{
        return res.status(401).json({
            "error": "data incorrect"
        })
      }
    }catch (error) {
     return res.status(500).send(error.message);
   }
};

module.exports = { 
    getUsers
};