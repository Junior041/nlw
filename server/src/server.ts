import "dotenv/config";
import fastify from "fastify";
import cors from "@fastify/cors";
import jwt from "@fastify/jwt";
import multipart from "@fastify/multipart";
import { memoriesRoutes } from "./routes/memories";
import { authRouter } from "./routes/auth";
import { uploadRouter } from "./routes/upload";
import { resolve } from "path";
const app = fastify();

app.register(cors, {
  origin: true, //todas as urls de fonrt-end poderao acessar nosso back-end
});
app.register(jwt, {
  secret: "spacetime",
});
app.register(require("@fastify/static"), {
  root: resolve(__dirname, "../uploads"),
  prefix:"/uploads",
});
app.register(uploadRouter);
app.register(multipart);
app.register(memoriesRoutes);

app
  .listen({
    port: 3333,
    host: "0.0.0.0",
  })
  .then(() => {
    console.log("HTTP server runing on http://localhost:3333 😊");
  });
