// The ApolloServer constructor requires two parameters: your schema
import dotenv from 'dotenv'
dotenv.config()
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from '@apollo/server/express4'
import { startStandaloneServer } from '@apollo/server/standalone'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { typeDefs } from "./schemas";
import { resolvers } from "./resolvers";
import { connectDB } from "./database/dbConnection";
import express from 'express'
import bodyParser from 'body-parser'
import http from 'http'
import cors from 'cors'

const app = express()
const httpServer = http.createServer(app)

// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  introspection: true
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
connectDB(async () => {
  await server.start()

  app.use(
    cors(),
    bodyParser.json(),
    expressMiddleware(server)
  )

  const PORT = process.env.PORT || 4000

  await new Promise((resolve: any) => httpServer.listen({ port: PORT }, resolve))

  console.log(`🚀 Server ready at ${PORT}`)
})

