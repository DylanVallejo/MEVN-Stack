/* eslint-disable */
  // podemos declarar varibales globales aqui
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
