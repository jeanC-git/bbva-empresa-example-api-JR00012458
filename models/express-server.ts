import express, { Application } from 'express';
import cors from 'cors';

import db from '../database/sequelize/connection-pgsql';

import { router } from '../routes';
import config from '../config';


class ExpressServer {

    private app: Application;
    private readonly port: string;

    constructor() {
        this.app = express();
        this.port = config.PORT;

        // this.dbConnection().then(r => {}).catch(error => console.log("DB Error: "+error.message, error));
        this.middlewares();
        this.routes();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port => ${this.port}`);
        })
    }

    async dbConnection() {
        try {

            await db.authenticate();
            console.log("DATABASE ONLINE");

        } catch (e) {
            throw new Error("Error!!");
        }
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Body reading
        this.app.use(express.json());

        // Public folder
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(router);
    }
}

export default ExpressServer;
