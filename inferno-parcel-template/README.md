# Inferno Template for ParcelJS
Setting up your Inferno-project with the ParcelJS is trivial. All you need is to add a `.babelrc` in the root of your project and include `"jsx": "preserve",` in your `tsconfig.json` file.

## Getting started
```sh
git clone [this/repos] [name-of-your-app]
cd [name-of-your-app]
npm i && npm run dev
```

## ParcelJS and Babel Transforms
Using Babel with Parcel works the same way as using it standalone or with other build tools. Create a Babel config file such as .babelrc and Parcel will pick it up automatically.
https://parceljs.org/languages/javascript/#babel
