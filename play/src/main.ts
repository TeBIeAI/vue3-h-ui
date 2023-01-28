import { createApp } from 'vue'
import App from './App.vue'
import {
  HAlert,
  HRadio,
  HRadioGroup,
  HCheckbox,
  HCheckboxGroup,
  HInput,
  HIcon,
  HSelect,
  HOption
} from '@h-ui/components'

const app = createApp(App)

app.use(HAlert)
app.use(HRadio)
app.use(HRadioGroup)
app.use(HCheckbox)
app.use(HCheckboxGroup)
app.use(HInput)
app.use(HIcon)
app.use(HSelect)
app.use(HOption)

app.mount('#app')
