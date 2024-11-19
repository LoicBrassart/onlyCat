import { Query, Resolver } from "type-graphql";
import { User } from "../entities/User";

@Resolver(User)
export class UserResolver {
	@Query(() => [User])
	async getUsers() {
		const users = await User.find({ relations: ["posts"] });
		return users;
	}
}
