declare module 'vue' {
  export interface GlobalComponents {
    HAlert: typeof import('../packages/components/alert')['HAlert']
    HRadio: typeof import('../packages/components/radio')['HRadio']
    HRadioGroup: typeof import('../packages/components/radio')['HRadioGroup']
  }
}

export {}
