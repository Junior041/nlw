import 'dotenv/config'
import fastify from "fastify";
import cors from "@fastify/cors";
import jwt from '@fastify/jwt';
import { memoriesRoutes } from "./routes/memories";
import { authRouter } from "./routes/auth";
const app = fastify()

app.register(memoriesRoutes)
app.register(authRouter)
app.register(cors,{
    origin: true, //todas as urls de fonrt-end poderao acessar nosso back-end
})
app.register(jwt, {
    secret: 'spacetime'
})
app.listen({
    port: 3333,
    host:'0.0.0.0',
}).then(() => {
    console.log('HTTP server runing on http://localhost:3333 😊');
})
