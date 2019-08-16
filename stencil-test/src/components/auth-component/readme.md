# auth-component



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type     | Default     |
| -------- | --------- | ----------- | -------- | ----------- |
| `proxy`  | `proxy`   |             | `string` | `undefined` |


## Methods

### `getToken(state: any) => Promise<void>`



#### Returns

Type: `Promise<void>`




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
