import 'virtual:svg-icons-register'
import { antComponents } from './antd'
import App from './App.vue'
import { useDirectives } from './directives'
import router from './router'
import store, { storeKey } from './store'
import { CommonComponents } from './use-common-components'
import { createInstance } from '/@/root'
import i18n from '/@/i18n'

import '/@/styles/index.scss'
const app = createInstance(App)

app.use(store, storeKey)
app.use(router)
app.use(i18n)
app.use(CommonComponents)
app.use(antComponents)
app.use(useDirectives)
app.mount('#demo-app')
