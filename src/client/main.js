
// Imports
import App from '@/App.vue';
import router from '@/router';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createHead } from '@unhead/vue';
import { GlobalEvents } from 'vue-global-events';
import { useAuthStore } from '@/stores/authStore.js';

// App and Head
const app = createApp(App);
const pinia = createPinia();
const head = createHead();

// Global Variables
app.config.globalProperties.$pagetitle = 'PageTitle';
app.component('GlobalEvents', GlobalEvents);

// Pinia, Router, Unhead
app.use(pinia);
app.use(router);
app.use(head);

// Auth Store and API Composable
const authStore = useAuthStore();

// Route Guard
router.beforeEach(async (to, from, next) => {
  
  // If no user in store, check if validated and set in store if so
  if(!authStore.user){
    await authStore.validateUser();
  }
  
  if (to.meta.requiresAuth) {
    //const user = await authStore.validateUser();
    //next({ name: 'topics' });
    next();
  } else{
  	//console.log('no auth');
    //next({ name: 'splash' });
    next();
  }
});


// Mount App
app.mount('#app');
