import express from 'express';
import cors from 'cors';
import routes from './routes';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.cors();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

  cors() {
    this.server.use(cors());
  }
}

export default new App().server;
