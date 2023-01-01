import dotenv from "dotenv";
dotenv.config();

const config = {
    PORT: process.env.PORT || "3001",
    DB_NAME : process.env.DB_NAME || "configure on config.ts",
};


export default config;