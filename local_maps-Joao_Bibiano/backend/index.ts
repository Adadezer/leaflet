import "reflect-metadata";
import express from "express";
import {createConnection} from "typeorm";
import cors from "cors";

const storeRoutes = require('./src/api/routers/StoreRoutes.routes')

const PORT = 3000;

async function startup() {
  await createConnection();

  const app = express();
  app.use(express.json());

  app.use(cors());

  app.use('/store', storeRoutes)

  app.listen(PORT, () => {
    console.log("App running on port " + PORT)
  })
}

startup();