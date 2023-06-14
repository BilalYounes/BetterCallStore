# BetterCallStore

BetterCallStore is a modern e-commerce store built with React, TypeScript, and Redux Toolkit. The app allows users to browse a selection of products, add items to their cart, and view the total cost of their order.

## Features

- Browse a selection of products
- Add items to your cart
- View the total cost of your order


## Getting Started

To get started with the project, you can follow these steps:

1. Clone the repository to your local machine: `git clone https://github.com/bilalyounes/BetterCallStore.git`
2. Install the dependencies: `npm install`
3. Start the development server: `npm start`
4. Open your browser and navigate to `http://localhost:3000`

## Technologies Used

- React
- TypeScript
- Redux Toolkit
- Sass

## Project Structure

The project has been structured using a modern approach to file organization, with components, styles, and utilities grouped together in separate directories. Here's a brief overview of the project structure:
src/
├── assets/
│   ├── images/
│   ├── fonts/
│   └── ...
├── features/
│   ├── cart/
│   │   ├── cartServices.ts
│   │   ├── CartView.tsx
│   │   ├── style.scss
│   │   └── ...
│   ├── products/
│   │   ├── productsServices.ts
│   │   ├── ProductView.tsx
│   │   ├── style.scss
│   │   └── ...
│   └── ...
├── layouts/
│   ├── NavBar.tsx
│   ├── SideBar.tsx
│   ├── Subheader.tsx
│   └── ...
├── pages/
│   ├── CartPage.tsx
│   ├── HomePage.tsx
│   └── ...
├── routes/
│   ├── index.tsx
│   └── ...
└── styled/
    ├── GlobalStyle.ts
    ├── theme.ts
    └── ...
## Deployment

The app has been deployed to Github Pages and can be accessed at https://bilalyounes.github.io/BetterCallStore/

To deploy the app yourself, you can follow these steps:

1. Install the `gh-pages` package: `npm install gh-pages`
2. Add a `homepage` field to your `package.json` file: `"homepage": "https://your-username.github.io/your-repo-name"`
3. Add a `predeploy` script to your `package.json` file: `"predeploy": "npm run build"`
4. Add a `deploy` script to your `package.json` file: `"deploy": "gh-pages -d build"`
5. Run `npm run deploy` to deploy your app to Github Pages.

## Contributing

If you'd like to contribute to the project, you can follow these steps:

1. Fork the repository to your own Github account
2. Create a new branch: `git checkout -b my-new-feature`
3. Make your changes and commit them: `git commit -am 'Add some feature'`
4. Push your branch to Github: `git push origin my-new-feature`
5. Create a new Pull Request and describe your changes in detail.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
