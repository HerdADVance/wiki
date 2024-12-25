<script setup>
  import { computed, onMounted, ref, reactive, watch } from 'vue';
  import Navbar from '@/components/Navbar.vue';
  
  const state = reactive({
    user: {
      username: 'alex'
    }
  });
</script>

<template>

  <header class="header" id="header">
    <div class="flex flex-spread">
      <h1 class="no-mar"><a href="/">DevPedia</a></h1>
      <nav class="nav">
        <Navbar />
        
        <template v-if="state.user">
          <p>Welcome, <span>{{ state.user.username }}</span></p>
          <form method="POST" action="/logout"><button type="submit">Logout</button></form>
        </template>
        <template v-else>
          <ul>
            <li><a href="/register">Register</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </template>
      
      </nav>
    </div>
  </header>

  <main>
    <div class="con tall">
      <h1>{{ $pagetitle }}</h1>
      <RouterView />
    </div>
  </main>

  <footer class="footer">
    <p>Footer stuff</p>
  </footer>

</template>