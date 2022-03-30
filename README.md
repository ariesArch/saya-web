# SAYA Website

## Useful Links
- design - https://xd.adobe.com/view/a1a47f2d-8c57-483a-8405-6e1e691da002-f4f7
- api - http://54.179.60.41:8002/api

## Build Setup

``` bash
# install dependencies
yarn

# build for development and serve with hot reload at localhost:3000 
yarn dev

# build for production and launch server
yarn build

# check for eslint errors (this also runs pre-commit)
yarn lint
```

For detailed explanation on how things work, check out [Next.js docs](https://nextjs.org/docs/getting-started).


## About the Folder Structure

Next.js isn't opinionated about the project structure except for the pages directory:
This is the folder we have here -

```
/root
  /.next/
  /components/
    /common/  (common components)
      /Button/
        Button.component.tsx
        Button.styles.tsx
      ...  
      /page-name/
        /PageSpecificComponent/ (Can be page Headers, page specific forms etc)
          PageSpecificComponent.component.tsx
          PageSpecificComponent.styles.tsx
        ...
      ... 
  /hooks/
    useHookName.tsx
    ...
  /interfaces/ (for interfaces and types)
    interfacename.interfaces.ts
    ...
  /layouts/
    LayoutNameLayout.tsx
    ...
  /public/
    /css/
      global.css
        ...
    /fonts/
      fontName.woff | fontName.woff2 (Only use woff or woff2 here)
        ...
    /icons/
      iconname.svg
        ...
    /images/
      imgName.png || .svg
        ...
  /store/
    /reducer-name/ (this can also be page name)
      reducer-name.action-types.ts
      reducer-name.actions.ts
      reducer-name.reducer.ts
    . . .
  /utils/    
    utilsFileName.ts
    . . .
  /pages/
    _app.tsx
    _document.tsx
    /about/
      index.tsx
    index.tsx  
    . . .
  .babelrc
  .env
  .eslintignore
  .eslintrc
  .example.env
  .gitignore
  .prettierrc
  next-env.d.ts
  next.config.js
  package.json
  README.md
  tsconfig.json
  yarn.lock
```

Note: we structure the `components` folder just like `pages` folder i.e if a component
is related to a certain page, we put that component inside the folder which has the same name as the page folder (or page name).
And if a components is used by multiple pages or multiple components, we put the under `common` folder.

We also do the same for the `store` directory.

# Plugins Used
|Name|Description|Documentation|Installed

|--|--|--|--|

|@emotion/core @emotion/react | CSS IN JS Library | https://emotion.sh/docs/ | ✅

| axios | For API calls | https://axios-http.com/docs/intro | ✅

| date-fns | For Date Formatting | https://date-fns.org/ | ✅

| framer-motion | For animation | https://www.npmjs.com/package/framer-motion | ✅

| react-loading-skeleton | Skeleton Loaders | https://www.npmjs.com/package/react-loading-skeleton | ✅

| react-tooltip | Tooltips | https://www.npmjs.com/package/react-tooltip | ✅

| react-otp-input | For OTP Input | https://www.npmjs.com/package/react-otp-input | ✅

| @tanem/react-nprogress | For page transition loading indicator | https://www.npmjs.com/package/@tanem/react-nprogress | ✅
