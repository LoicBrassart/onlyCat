import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Post } from "../entities/Post";

export const dataSource = new DataSource({
	type: "sqlite",
	database: "./onlyCat.sqlite",
	entities: [User, Post],
	synchronize: true,
});
