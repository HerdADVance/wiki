<script setup>
  
  // === IMPORTS ===
  import { RouterView, useRoute, useRouter } from 'vue-router';
  import { computed, onMounted, ref, reactive, watch } from 'vue';
  import { useHead } from '@unhead/vue'
  import MainLayout from '@/layouts/MainLayout.vue';
  import SplashLayout from '@/layouts/SplashLayout.vue';

  // === ROUTER ===
  const router = useRouter();
  const route = useRoute();

  // === USE HEAD ===
  useHead({
    //title: 'Weeeeeee'
  });
  
  // === LAYOUT SWITCH ===
  const currentLayout = computed(() => {
    switch (route.name) {
      case 'splash':
        return SplashLayout;
      default:
        return MainLayout;
    }
  })

  // === LIFECYCLE HOOKS ===
  onMounted(async () => {
    //console.log('app mounted');
  })


</script>

<template>
  <component :is="currentLayout" />
</template>





