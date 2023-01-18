import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import HAlert from '@h-ui/components/alert'
import HRadio from '@h-ui/components/radio'
import { HRadioGroup } from '@h-ui/components/radio'
import { HCheckbox } from '@h-ui/components'

const app = createApp(App)

app.use(HAlert)
app.use(HRadio)
app.use(HRadioGroup)
app.use(HCheckbox)

app.mount('#app')
