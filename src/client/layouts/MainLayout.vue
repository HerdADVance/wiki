<script setup>
  import { RouterLink } from 'vue-router';
  import Header from '@/components/global/Header.vue';
</script>


<template>

  <Header />

  <!-- Nav Bar -->
  <nav class="admin sticky">
    <ul class="flex">
      <li><RouterLink :to="{ name: 'PageCreate'}">Create Page</Routerlink></li>
      <li><RouterLink :to="{ name: 'PageEdit', params:{ id: 69 } }">Edit Page</Routerlink></li>
      <li><RouterLink :to="{ name: 'Users'}">Users</Routerlink></li>
    </ul>
  </nav>

  <!-- Main Content -->
  <main>
    <div class="con tall rel">
      <RouterView />
    </div>
  </main>

  <!-- Footer -->
  <footer class="footer">
    <p>Footer stuff</p>
  </footer>

</template>