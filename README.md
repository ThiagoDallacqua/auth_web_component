# Web components study

## Setting up

If you just want to try the `<auth-component></auth-component>` web component all you need to do is to `npm i stencil-auth-component` from you project root, configure it for [React](https://stenciljs.com/docs/react), [Angular](https://stenciljs.com/docs/angular), [Vue](https://stenciljs.com/docs/vue), [Ember](https://stenciljs.com/docs/ember) or directly into your [Javascript/HTML structure](https://stenciljs.com/docs/javascript).


You also have to run your local frontend application from `localhost:3000`, as this has been added to the CORS exeption, and and add a proxy configuration for the `https://proxy-sever.herokuapp.com` api, as it will behave as if it were your own backend. On React you simple add a `"proxy": "https://proxy-sever.herokuapp.com"` to your `package.json`, if you are using `create-react-app` and that will do the trick.

You can always have your own backend to play with or use the two "fake" backend that comes with this repo: `auth_web_component`, which works as the `<auth-component></auth-component>` own backend, and `proxy-server` which works as your application backend. Then you change the `/config/express.js` file to add your `localhost` address to the cors.

**In order to run both servers locally you also would have to [install mongo db](https://docs.mongodb.com/manual/administration/install-community/), all the configuration is already in place fo it to run locally.**

## Using the web component in your application

After the set up is done you can simply use the `<auth-component></auth-component>` component whenever you need passing a `proxy` prop to it with the address to your own backend endpoint, localhost from the "fake" backend or the heroku application created just for this purpose: `https://proxy-sever.herokuapp.com`, which you will have to proxy first and then just pass the `/register` endpoint as prop like this:

`package.json` of a React application
```javascript
{
  "name": "<your-app-name>",
  "proxy": "https://proxy-sever.herokuapp.com",
  "version": "<your-app-version>",
  //...,
  "dependencies": {
    //...,
    "stencil-auth-component": "0.0.5",
    //...
  }
  //... the rest of your package.json
}
```

Using the web component in React
```javascript
import React from 'react';

import 'stencil-auth-component'

class App extends React.Component {
  render() {
    return (
      <div>
        <auth-component proxy="/register"></auth-component>
      </div>
    );
  }
};

export default App;
```