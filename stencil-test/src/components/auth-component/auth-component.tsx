import { Component, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'auth-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class authComponent {
  @Prop() proxy: string;
  @State() isLogin: boolean = true;

  render() {
    return (
      <div>
        {
          this.isLogin
          ? <login-component proxy={this.proxy} changeRoute={() => {this.isLogin = false}}></login-component>
          : <register-component proxy={this.proxy} changeRoute={() => {this.isLogin = true}}></register-component>
        }
      </div>
    )
  }
}
