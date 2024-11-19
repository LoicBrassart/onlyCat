import { Field, ObjectType } from "type-graphql";
import {
	BaseEntity,
	BeforeInsert,
	Column,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@Entity()
@ObjectType()
export class Post extends BaseEntity {
	@Field()
	@PrimaryGeneratedColumn()
	id!: string;

	@Field()
	@Column()
	title!: string;

	@Field()
	@Column()
	content!: string;

	@Field()
	@Column()
	image!: string;

	@Field()
	@Column()
	createdAt!: Date;

	@Field()
	@Column()
	isForSubsOnly!: boolean;

	@Field(() => User)
	@ManyToOne(
		() => User,
		(user) => user.posts,
	)
	author!: User;

	@BeforeInsert()
	updateDates() {
		this.createdAt = new Date();
	}
}

//  TODO
// - author: User
