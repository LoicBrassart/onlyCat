import { useGetUsersQuery } from "../lib/graphql/generated/graphql-types";

export default function HomePage() {
	const { loading, error, data } = useGetUsersQuery();

	if (loading) return <>{"Loading... ┬┴┬┴┤(･_├┬┴┬┴"}</>;
	if (error) return <>{"Something broke (;⌣̀_⌣́)"}</>;
	if (!data?.getUsers) return <>{"No users ¯\\_(ツ)_/¯"}</>;

	return (
		<ul>
			{data.getUsers.map((user) => (
				<li key={user.id}>{user.username}</li>
			))}
		</ul>
	);
}
