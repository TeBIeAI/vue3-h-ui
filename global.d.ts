declare module 'vue' {
  export interface GlobalComponents {
    HAlert: typeof import('@h-ui/components/alert')['HAlert']
  }
}

export {}
