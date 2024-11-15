declare global {
  interface EcwidPage {
    type: any
  }

  interface Ecwid {
    OnPageLoaded: {
      add(callback: (page: EcwidPage) => void): void
    }

    openPage(type: string, options: Record<string, unknown>): void

    Cart: {
      addProduct(product: any): void
    }
  }

  function xProductBrowser(params: string): void

  const Ecwid: Ecwid
}

export {}
