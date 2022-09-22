import { jsx, jsxs, VElement } from '@textbus/core'

export {
  jsxs,
  jsx
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface Element extends VElement {
      [name: string]: any
    }

    interface IntrinsicElements {
      [name: string]: any
    }

    interface IntrinsicAttributes {
      [name: string]: any
    }

    interface ElementAttributesProperty {
    }
  }
}
