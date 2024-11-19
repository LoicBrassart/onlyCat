import { Query, Resolver } from "type-graphql";
import { Post } from "../entities/Post";

@Resolver(Post)
export class PostResolver {
	@Query(() => [Post])
	async getPosts() {
		const posts = await Post.find({ relations: ["author"] });
		return posts;
	}
}
