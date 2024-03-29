import { Component, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'auth-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class authComponent {
  @Prop() proxy: string;
  @State() isLogin: boolean = true;
  @Prop() setWrapperState: any = (state: any = 'you') => console.log('hi there', state);

  render() {
    this.setWrapperState()
    return (
      <div>
        {
          this.isLogin
          ? <login-component setWrapperState={token => {this.setWrapperState(token)}} proxy={this.proxy} changeRoute={() => {this.isLogin = false}}></login-component>
          : <register-component setWrapperState={token => {this.setWrapperState(token)}} proxy={this.proxy} changeRoute={() => {this.isLogin = true}}></register-component>
        }
      </div>
    )
  }
}
