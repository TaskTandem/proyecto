//app
import { createApp } from 'vue'
import App from './App.vue'
//styles
import './styles/CSS/main-min.css'
//router
import router from './router'
//pinia
import { createPinia } from 'pinia'
import piniaPersistedState from 'pinia-plugin-persistedstate'
//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faBars, faTimes, faSignIn, faPlus, faPencil, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
const icons = { faSearch, faBars, faTimes, faSignIn, faPlus, faPencil, faCheckCircle, faTimesCircle, faInstagram, faWhatsapp }
{/* <fa icon="bars" />
<fa :icon="['fab', 'instagram']" /> */}

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPersistedState)
library.add(icons)
app.use(pinia)
app.use(router)
app.component('fa', FontAwesomeIcon)
app.mount('#app')
