import { Component, Prop, State, h } from '@stencil/core';
export type ChangeRoute = () => void;
export type WrapperState = (token: any) => void;
@Component({
  tag: 'login-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class loginComponent {
  @State() email: string | number | string[];
  @State() password: string | number | string[];
  @Prop() proxy: string;
  @Prop() changeRoute: ChangeRoute;
  @Prop() wrapperState: WrapperState;

  hadleEmailChange(e) {
    const { target: { value } } = e
    this.email = value
  }

  hadlePasswordChange(e) {
    const { target: { value } } = e
    this.password = value
  }

  handle_click = async () => {
    const response = await fetch('https://auth-component-be.herokuapp.com/login', { // If you want to setup your own local server change here to you localhost address.
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.email,
        password: this.password
      })
    })

    const data = await response.json()

    console.log(data, this.proxy)

    if (this.proxy && data.token) {
      this.wrapperState(data.token)
      const config = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          token: data.token
        })
      }
      fetch(this.proxy, config)
        .then(response => response.json())
        .then(result => console.log(result))
    }
    return data
  }

  onKeyPress = e => {
    const { keyCode } = e
    if (keyCode === 13) this.handle_click()
  }

  render() {
    return (
      <div class='container' onKeyDown={this.onKeyPress}>
        <h2>Login</h2>
        <input
          onInput={e => this.hadleEmailChange(e)}
          type='text'
          value={this.email}
          placeholder='Type your email.'
        />
        <input
          onInput={e => this.hadlePasswordChange(e)}
          type='password'
          value={this.password}
          placeholder='Type your password.'
        />
        <p class='no_account'>No account yet? <span onClick={this.changeRoute}>Register</span></p>
        <button onClick={this.handle_click} class='submit_button'>Login</button>
      </div>
    )
  }
}