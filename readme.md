## Backend
- Graphql
- Apollo
- TypeORM
- SQLite

### Entities
- User
    - id: ID
    - name: String
    - mail: String
    - avatar: String
    - follows: [User]
    - subs: [User]
- Post
    - id: ID
    - title: String
    - content: String
    - images: [String]
    - createdAt: DateTime
    - author: User
    - subsOnly: Boolean

### Resolvers
- UserResolver
    - Mutations
        - login(User)
        - signup({mail, name, avatar})
        - follow(User)
        - sub(User)
    - Queries
        - getUsers
        - getFollows(User)
- postResolver
    - Mutations
        - createPost(?)
    - Queries
        - getPosts
        - getPostsByUser(User)
        - getPostsForUser(User)

## Frontend
- React / Vite
- Apollo

## US: "Je veux..."

### "En tant que visiteur anonyme"
- me "connecter"
- voir la liste des utilisateurs

### "En tant qu'utilisateur connecté"
- follow ou sub un User
- voir les posts de mes follows et subs
- créer un Post

## Design
- Charte graphique / Couleurs

## Todo

## Doing

## Done
- package.json
- tsconfig.json
- index.ts
- datasource
- premiere entité
- premier resolver
- créer liens entité/datasource et resolver/schema
- créer premières données
- ajouter une nouvelle entité
- créer un lien entre entités