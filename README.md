# SAYA Website

## Useful Links
- design - https://xd.adobe.com/view/a1a47f2d-8c57-483a-8405-6e1e691da002-f4f7
- API - https://staging.saya.education/api/docs

### Caveats of Next.js
- docs - https://nextjs.org/docs

Next.js can also handle writing API logics. You can write the APIs using API routes feature - https://nextjs.org/docs/api-routes/introduction

In this project, we have 2 API routes, for vdocipher and for zoom.

The reason for that is both **vdocipher** and **zoom** requires to use API keys that cannot be exposed on the client side.

Regarding the .env file -
There are 2 types of environmental variables in .env file, public and private.

Public variable names starts with NEXT_PUBLIC. Use public variables for the keys that can be exposed on the client side and the private variables for the otherwise.

You can learn more about it here - https://nextjs.org/docs/basic-features/environment-variables

Next.js has opinionated way for rendering images, you can use html image tags but Next.js will throw warnings because Next.js Image Component `next/image` provides excellent optimizations for loading Images which is the main selling point for Next.js

So, please always use `next/image` component whenever rendering images in this project.

You can learn more about it here - https://nextjs.org/docs/basic-features/image-optimization


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

Global CSS and fonts can't be found in `public/css` and `public/fonts` folders.
CSS variables being used in the entire app can be found inside `public/css/global.css`

# Packages Used
| Name | Description | Documentation | Installed

|--|--|--|--|

|@emotion/core @emotion/react | CSS IN JS Library | https://emotion.sh/docs/ | ✅

| axios | For API calls | https://axios-http.com/docs/intro | ✅

| date-fns | For Date Formatting | https://date-fns.org/ | ✅

| framer-motion | For animation | https://www.npmjs.com/package/framer-motion | ✅

| react-loading-skeleton | Skeleton Loaders | https://www.npmjs.com/package/react-loading-skeleton | ✅

| react-tooltip | Tooltips | https://www.npmjs.com/package/react-tooltip | ✅

| react-otp-input | For OTP Input | https://www.npmjs.com/package/react-otp-input | ✅

| @tanem/react-nprogress | For page transition loading indicator | https://www.npmjs.com/package/@tanem/react-nprogress | ✅

| lottie-react | For Rendering SVG Animations | https://www.npmjs.com/package/lottie-react | ✅

| react-timekeeper | For Rendering SVG Animations | https://www.npmjs.com/package/lottie-react | ✅

| react-toastify | For Displaying Toasts (success/error, etc) | https://www.npmjs.com/package/react-toastify | ✅

| simplebar-react | For Rendering Customized Scrollbars | https://www.npmjs.com/package/simplebar-react | ✅

| use-sound | useSound Hook. For playing sounds | https://www.npmjs.com/package/use-sound | ✅

| react-otp-input | OTP Input for React | https://www.npmjs.com/package/react-otp-input | ✅

| localstorage | For storing the data(token, etc) in IndexDB | https://www.npmjs.com/package/localforage | ✅

| @zoomus/websdk | For Live Class feature, to join zoom call with Web | https://www.npmjs.com/package/@zoomus/websdk | ✅

| react-responsive | Determining screen size in Javascript, provides css media query like features | https://www.npmjs.com/package/react-responsive | ✅

# Firebase Messaging
Firebase messaging service-worker file is located in `public/firebase` as `firebase-message-sw.js` file. **This file shouldn't be touched since updating credentials or logic in the file wouldn't be affected to the existing users**

The logic for listening and showing notifications for **firebase** through **service worker** is located in _app.tsx

# Code Quality Optimization tools
| Name | Description | Documentation | Installed

|--|--|--|--|

| eslint | To reinforce Javascript and React best practices(the configurations are in `.eslintrc` file | https://eslint.org/docs/latest/use/getting-started | ✅

| prettier | For code formatting and reinforcing code formats(the configurations are in `.prettierrc` file) | https://prettier.io/docs/en/index.html | ✅

| husky | For ensuring there's no errors when committing the changes (husky hooks will run eslint rules check, and Type Check for Typescript) (the configurations are in `.husky` folder) | https://typicode.github.io/husky/#/ | ✅


# Error Tracking Tools
| Name | Description | Documentation | Installed

|--|--|--|--|

| Sentry - @sentry/nextjs | To Log the Errors happening on Production (currently disabled due to limitations of the free plan) (configs in - sentry.client.config.js, sentry.client.config.js, next.config.js, _error.tsx, api folder in pages) (all the configs are currently commented out) | https://docs.sentry.io/platforms/javascript/guides/nextjs/ | ❌


# Deployment
The development version of this project is deployed on Vercel. https://saya-web.vercel.app/

The Production version is deployed on AWS EC2 (used nginx and pm2) - https://saya.education

Please contact Binary Team for the Credentials of the Production Server
