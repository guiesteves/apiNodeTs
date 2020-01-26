import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import routes from './routes';


class App {
    public express: express.Application

    public constructor() {
      this.express = express();
      this.middlewares();
      this.database();
      this.routes();
    }

    public listen(port: number): void {
      this.express.listen(port);
    }

    private middlewares(): void {
      this.express.use(express.json());
      this.express.use(cors());
    }

    // eslint-disable-next-line class-methods-use-this
    private database(): void {
      mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-fsvqd.mongodb.net/nodejs_ts?authSource=admin&replicaSet=Cluster0-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass%20Community&retryWrites=true&ssl=true', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    }

    private routes(): void {
      this.express.use(routes);
    }
}

export default new App();
