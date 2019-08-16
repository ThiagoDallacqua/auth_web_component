# Web components study

**Disclaimer: This by all means shouldn't be used in production or be taken as real world situation. It is only a naive approach of using web components in other frameworks/libs and how to simplistically build one.**

**Although the purpose were achieved, surely the actual real world web component and its backend should be writen in a propper way with validations, security, etc...**

## Setting up

If you just want to try the `<auth-component></auth-component>` web component all you need to do is to `npm i stencil-auth-component` from you project root, configure it for [React](https://stenciljs.com/docs/react), [Angular](https://stenciljs.com/docs/angular), [Vue](https://stenciljs.com/docs/vue), [Ember](https://stenciljs.com/docs/ember) or directly into your [Javascript/HTML structure](https://stenciljs.com/docs/javascript).


You also have to run your local frontend application from `localhost:3000`, as this has been added to the CORS exeption, and and add a proxy configuration for the `https://proxy-sever.herokuapp.com` api, as it will behave as if it were your own backend. On React you simple add a `"proxy": "https://proxy-sever.herokuapp.com"` to your `package.json`, if you are using `create-react-app` and that will do the trick.

You can always have your own backend to play with or use the two "fake" backend that comes with this repo: `auth-web-component-be`, which works as the `<auth-component></auth-component>` own backend, and `proxy-server` which works as your application backend. Then you change the `/config/express.js` file to add your `localhost` address to the cors.

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
  state = {
    token: {}
  }
  componentDidMount() {
    this.refs.auth_component.setWrapperState = (token) => this.setState({ token })
  }
  render() {
    return (
      <div>
        <auth-component ref="auth_component" proxy="/register"></auth-component>
      </div>
    );
  }
};

export default App;
```

Here we decided to pass in the prop `setWrapperState` using the `ref`, which will be in charge of updating the state with the token received from the reponse of the login/register.

Another way to do it outside of the React world is to `document.querySelector('auth-component').setWrapperState = "<your callback function>"`.

It will work like this, if you don't want to create a new user just use `some@email.com` and `123` to login, after click the button `Login` or pressing enter the web component will fire one request to its own server, creating a jwt token containing the user information and forwarding it to "your" server using the proxy prop passed to it. After that the user should be treated as "logged in" by your server and all requests from that moment until the token expires should be accepted.

It's recommended to leave the javascript console open to follow the logs fired by the web componets.

## Colaboration

If you wish to colaborate to this demo project here's some points that could be added:

* Validations (User, password, etc).
* Proper routing on the web component frontend (it was written using [Stencil](https://stenciljs.com/docs/introduction)).
* More flows
* whatever you feel like 😃