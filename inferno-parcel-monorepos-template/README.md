# Inferno Monorepo Template for ParcelJS
Setting up your Inferno monorepo-project with the ParcelJS is trivial. The trick is to add a `babel.config.json` file in your project root which tells BabelJS to pick up local `.babelrc` files from your workspaces.

## Getting started
```sh
git clone [this/repos] [name-of-your-app]
cd [name-of-your-app]
npm i && npm run dev
```

## ParcelJS and Babel Transforms
Using Babel with Parcel works the same way as using it standalone or with other build tools. Create a Babel config file such as .babelrc and Parcel will pick it up automatically.
https://parceljs.org/languages/javascript/#babel

## ParcelJS and Monorepo
One way is to use a monorepo setup via Yarn Workspaces or NPM Workspaces. This allows you to depend on other packages within your repo the same way you depend on published packages.
https://parceljs.org/features/plugins/#yarn-and-npm-workspaces

## Babel and Monorepo
With monorepo setups, the core thing to understand is that Babel treats your working directory as its logical "root", which causes problems if you want to run Babel tools within a specific sub-package without having Babel apply to the repo as a whole.
https://babeljs.io/docs/en/config-files#monorepos