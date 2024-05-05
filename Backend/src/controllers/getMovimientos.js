const { default: axios } = require('axios');
require("dotenv").config();
const { usernameApi, passwordApi} = require('../config/config.js')

const  getMovimientos = async (req, res) => {
    const username = usernameApi
    const password = passwordApi

    const credentials = `${username}:${password}`;
    const encodedCredentials = btoa(credentials); 

    try {
        const {data} = await axios.post('https://apipre.pagoplux.com/intv1/integrations/getTransactionsEstablishmentResource',{
            numeroIdentificacion: "0992664673001",
            initialDate: "2024-05-01",
            finalDate: "2024-05-03",
            tipoPago: "unico"
            },{
             headers: {
              'Authorization': `Basic ${encodedCredentials}`
            }
         })
      console.log(data.detail.transactionsData)
      return res.status(200).json(data.detail.transactionsData)
    }catch (error) {
     return res.status(500).send(error.message);
   }
};

module.exports = { 
    getMovimientos
};