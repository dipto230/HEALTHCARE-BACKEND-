import dotenv from 'dotenv';
dotenv.config()
interface EnvConfig{
    NODE_ENV: string;
    PORT: string;
    DATABASE_URL: string;
    BETTER_AUTH_SECRET: string;
    BETTER_AUTH_URL: string;


}

const loadEnvVariables = (): EnvConfig => {
    return {
        NODE_ENV: process.env.NODE_ENV,
        PORT: process.env.DATABASE_URL,
        



    }
}