# auth-component



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute           | Description | Type     | Default                                                  |
| ----------------- | ------------------- | ----------- | -------- | -------------------------------------------------------- |
| `proxy`           | `proxy`             |             | `string` | `undefined`                                              |
| `setWrapperState` | `set-wrapper-state` |             | `any`    | `(state: any = 'you') => console.log('hi there', state)` |


## Dependencies

### Depends on

- [login-component](../login-component)
- [register-component](../register-component)

### Graph
```mermaid
graph TD;
  auth-component --> login-component
  auth-component --> register-component
  style auth-component fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
