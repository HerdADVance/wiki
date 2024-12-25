
import { createApp } from 'vue'
import { createHead } from '@unhead/vue'
import App from '@/App.vue'
import router from '@/router'

const app = createApp(App);
const head = createHead();

// Global Vars 
app.config.globalProperties.$pagetitle = 'PageTitle';

// Router & Head
app.use(router);
app.use(head);

// Mount App
app.mount('#app');
