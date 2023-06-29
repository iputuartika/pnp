import { createApp } from 'vue'

// Import App
import App from './App.vue'

// Import Vue-Roter
import router from './router'

// Import Tailwindcss
import './index.css'

// Import Flowbite Js
import 'flowbite'

// Import Vue-Toasttification
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
const option = {
  position: 'top-right',
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: 'button',
  icon: true,
  rtl: false
}

// Create vue app
const app = createApp(App)
app.use(router).use(Toast, option).mount('#app')
