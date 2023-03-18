declare module 'vue' {
  export interface GlobalComponents {
    HAlert: typeof import('../packages/components/alert')['HAlert']
    HRadio: typeof import('../packages/components/radio')['HRadio']
    HRadioGroup: typeof import('../packages/components/radio')['HRadioGroup']
    HCheckbox: typeof import('../packages/components/checkbox')['HCheckbox']
    HCheckboxGroup: typeof import('../packages/components/checkbox')['HCheckboxGroup']
    HInput: typeof import('../packages/components/input')['HInput']
    HIcon: typeof import('../packages/components/icon')['HIcon']
    HTooltip: typeof import('../packages/components/tooltip')['HTooltip']
  }
}

export {}
