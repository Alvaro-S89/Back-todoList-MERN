const dotenv = require("dotenv")

dotenv.config()

const ENV = process.env.NODE_ENV || "development"

const CONFIG = {
    development:{
        app: {
            PORT: process.env.PORT || 4000
        },
        db:{
            uri: process.env.MONGODB_URI
        }
    },
    production:{}
}


module.exports = CONFIG[ENV]