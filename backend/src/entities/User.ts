import { Field, ObjectType } from "type-graphql";
import {
	BaseEntity,
	Column,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
} from "typeorm";
import { Post } from "./Post";

@Entity()
@ObjectType()
export class User extends BaseEntity {
	@Field()
	@PrimaryGeneratedColumn()
	id!: string;

	@Field()
	@Column()
	username!: string;

	@Field()
	@Column()
	mail!: string;

	@Field({ nullable: true })
	@Column({ nullable: true })
	avatar?: string;

	@Field(() => [Post])
	@OneToMany(
		() => Post,
		(post) => post.author,
	)
	posts!: Post[];
}

//  TODO
// - follows: [User]
// - subs: [User]
