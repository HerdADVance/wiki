
// Imports
import { createApp } from 'vue'
import { createHead } from '@unhead/vue'
import App from '@/App.vue'
import router from '@/router'
import { GlobalEvents } from 'vue-global-events'


// App and Head
const app = createApp(App);
const head = createHead();

// Global Variables
app.config.globalProperties.$pagetitle = 'PageTitle';
app.component('GlobalEvents', GlobalEvents)

// Router & Head
app.use(router);
app.use(head);

// Mount App
app.mount('#app');
