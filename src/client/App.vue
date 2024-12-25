<script setup>
  
  import axios from 'axios';
  import { RouterView, useRoute, useRouter } from 'vue-router';
  import { computed, onMounted, ref, reactive, watch } from 'vue';
  import { useHead } from '@unhead/vue'
  import MainLayout from '@/layouts/MainLayout.vue';
  import SplashLayout from '@/layouts/SplashLayout.vue';

  // const state = reactive({
  //   user: {
  //     username: 'alex'
  //   }
  // });

  const router = useRouter();
  const route = useRoute();
  
  const currentLayout = computed(() => {
    switch (route.name) {
      case 'splash':
        return SplashLayout;
      default:
        return MainLayout;
    }
  })

  onMounted(async () => {
    
    router.beforeEach((to, from, next) => {
      //console.log(`Route changed from ${from.name} to ${to.name}`);
      if (to.meta.requiresAuth) {
        next({ name: 'topics' }); // Redirect to login if not authenticated
      } else{
        next();
      }
    })

    // try {
    //   const response = await axios.post('http://localhost:8000/logintest', {
    //     username: 'jjjjj',
    //     password: 'alexvance',
    //   });
    //   console.log(response.data);
    // } catch (error) {
    //   console.error(error);
    // }

  })


  // onMounted(async () => {
  //   // Check for token in localStorage or cookies
  //   // const token = localStorage.getItem('token')
  //   // if (token) {
  //   //   try {
  //   //     // Validate token with server
  //   //     const response = await axios.get('/api/validate-token', {
  //   //       headers: { Authorization: `Bearer ${token}` }
  //   //     })
  //   //     user.value = response.data.user // Set user data if valid
  //   //   } catch (error) {
  //   //     console.error('Token validation failed:', error)
  //   //     // Handle invalid token (e.g., clear localStorage)
  //   //   }
  //   // }

  //   //const cookie = document.cookie.split(';').some(cookie => cookie.trim().startsWith('connect.sid='));
  //   //console.log(cookie);
    
  //   console.log('mount up');
  // });

  useHead({
    title: 'Weeeeeee',
    //link: [{ href: 'https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css', rel: 'stylesheet' }],
    //script: [{ src: 'https://code.jquery.com/jquery-3.5.1.min.js' }],
    //script: [{ src: 'https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js' }],
    //link: [{ href: 'https://cdn.jsdelivr.net/npm/summernote@0.9.0/dist/summernote.min.css', rel: 'stylesheet' }],
    //script: [{ src: 'https://cdn.jsdelivr.net/npm/summernote@0.9.0/dist/summernote.min.js' }]
  });

  const count = ref(0);

</script>

<template>
  <component :is="currentLayout" />
</template>





