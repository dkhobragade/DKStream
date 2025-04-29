import dotenv from 'dotenv'

dotenv.config()

export const ENV_VAR={
    MONGO_URL:process.env.MONGODB_URL,
    PORT:process.env.PORT ||'5000'
}