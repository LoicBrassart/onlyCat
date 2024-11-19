import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { dataSource } from "./config/db";
import { UserResolver } from "./resolvers/UserResolver";
import { PostResolver } from "./resolvers/PostResolver";

const port = 3000;

const start = async () => {
	await dataSource.initialize();

	const schema = await buildSchema({
		resolvers: [UserResolver, PostResolver],
	});

	const apiServer = new ApolloServer({ schema });

	const { url } = await startStandaloneServer(apiServer, {
		listen: { port: port },
	});
};
start();
