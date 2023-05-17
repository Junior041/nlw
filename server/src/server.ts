import fastify from "fastify";
import { cors } from "@fastify/cors";
import { memoriesRoutes } from "./routes/memories";
const app = fastify()

app.register(memoriesRoutes)
app.register(cors,{
    origin: true, //todas as urls de fonrt-end poderao acessar nosso back-end
})
app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP server runing on http://localhost:3333 😊');
})
