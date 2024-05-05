const express = require('express')
const dotenv = require('dotenv')
const app = express();
const cors = require('cors')
const PORT = process.env.PORT || 3000;
const { conn } = require('./src/db.js');
const routes = require('./src/routes/index.js')

dotenv.config()
app.use(cors())
app.use(express.json())


app.name = 'PagoPlux'
app.use('/', routes)

conn.sync({ force: false }).then(() => {
  console.log('Connect to DB')
app.listen(PORT, () => {
  console.log(`Server listen in port ${PORT}`);
})
}).catch(error => console.error(error))