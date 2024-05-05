require('dotenv').config()

const config = {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    usernameApi: process.env.USERNAMEAPI,
    passwordApi: process.env.PASSWORDAPI
}
module.exports = config;