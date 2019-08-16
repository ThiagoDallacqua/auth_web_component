import { Component, Prop, h, State, Method } from '@stencil/core';

@Component({
  tag: 'auth-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class authComponent {
  @Prop() proxy: string;
  @State() isLogin: boolean = true;
  @State() wrapperState: {
    [key: string]: any;
  };
  @Method()
  async getToken(state) {
    this.wrapperState = state
  }

  render() {
    return (
      <div>
        {
          this.isLogin
          ? <login-component wrapperState={token => {this.wrapperState['token'] = token}} proxy={this.proxy} changeRoute={() => {this.isLogin = false}}></login-component>
          : <register-component wrapperState={token => {this.wrapperState['token'] = token}} proxy={this.proxy} changeRoute={() => {this.isLogin = true}}></register-component>
        }
      </div>
    )
  }
}
