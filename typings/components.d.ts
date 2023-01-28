declare module 'vue' {
  export interface GlobalComponents {
    HAlert: typeof import('../packages/components/alert')['HAlert']
    HRadio: typeof import('../packages/components/radio')['HRadio']
    HRadioGroup: typeof import('../packages/components/radio')['HRadioGroup']
    HCheckbox: typeof import('../packages/components/checkbox')['HCheckbox']
    HCheckboxGroup: typeof import('../packages/components/checkbox')['HCheckboxGroup']
    HInput: typeof import('../packages/components/input')['HInput']
    HIcon: typeof import('../packages/components/icon')['HIcon']
    HSelect: typeof import('../packages/components/select')['HSelect']
    HOption: typeof import('../packages/components/select')['HOption']
    // HPopper: typeof import('../packages/components/popper')['HPopper']
  }
}

export {}
