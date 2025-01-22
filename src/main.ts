import './assets/main.css'

import { VueQueryPlugin } from '@tanstack/vue-query'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import '@/stores/pokemon.store'

const app = createApp(App)

VueQueryPlugin.install(app, {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        // staleTime: 1000 * 30,
        refetchOnReconnect: 'always',
      },
    },
  },
})
app.use(createPinia())
app.use(router)
// app.use(VueQueryPlugin)

app.mount('#app')
