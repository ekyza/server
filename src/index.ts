import express from "express";
import cors from "cors";
import { config } from "dotenv";

import * as RouteNotFoundHandlerMiddleware from "@/middlewares/routeNotFound.middleware.js";

config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/", RouteNotFoundHandlerMiddleware.routeNotFoundHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
