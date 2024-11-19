import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.tsx";
import HomePage from "./pages/HomePage.tsx";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
		],
	},
]);

const client = new ApolloClient({
	uri: "http://localhost:3000",
	cache: new InMemoryCache(),
});

// biome-ignore lint/style/noNonNullAssertion: There *must* be a #root element for my whole page to work, this has no meaning otherwise
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ApolloProvider client={client}>
			<RouterProvider router={router} />
		</ApolloProvider>
	</StrictMode>,
);
