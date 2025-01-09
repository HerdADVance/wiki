<script setup>
  import { computed, onMounted, ref, reactive, watch } from 'vue';
  import { RouterLink } from 'vue-router';
  
  const user = ref(true);

  // Global Click
  const handleGlobalClick = () => {
    if(userInfoOpen.value) userInfoOpen.value = false;
  };

  // User Info Options Toggle
  const userInfoOpen = ref(false);
  const toggleUserInfoOpen = () => {
    userInfoOpen.value = !userInfoOpen.value;
  };

</script>


<template>
  <GlobalEvents @click="handleGlobalClick" />
  
  <!-- Header flexed into thirds -->
  <header class="header sticky" id="header">
    <div class="flex thirds tall">
      
      <!-- Logo (1/3) -->
      <h1 class="no-mar left"><a href="/"><img src="/assets/img/logo2.png" alt="Devpedia logo"></a></h1>

      <!-- Search input (2/3) -->
      <form class="center">
        <input type="text" class="no-mar wide" placeholder="Search Topics/Pages">
      </form>
      
      <!-- User Info Toggle & Menu (3/3 if logged in) -->
      <div v-if="user" id="user-info" class="right">
        <button @click.stop="toggleUserInfoOpen" id="user-info-toggle" title="BallsoHerd" class="center point cir">B</button>
          <transition name="fade">
          <nav v-if="userInfoOpen" id="user-info-menu" class="abs center">
            <ul>
              <li><a href="">Profile</a></li>
              <li><a href="">Settings</a></li>
              <li><a href="">Logout</a></li>
            </ul>
          </nav>
          </transition>
        <!--form method="POST" action="/logout"><button type="submit">Logout</button></form-->
      </div>

      <!-- Login/Register button (3/3 if logged out) -->
      <ul v-else class="right">
        <li><a href="/splash">Login/Register</a></li>
      </ul>
      
    </div>
  </header>

  <!-- Nav Bar -->
  <nav class="admin sticky">
    <ul class="flex">
      <li><RouterLink to="/page/create">Create Page</Routerlink></li>
      <li><a href="">Edit Page</a></li>
      <li><a href="">Create Topic</a></li>
      <li><a href="">Edit Topic</a></li>
    </ul>
  </nav>

  <!-- Main Content -->
  <main>
    <div class="con tall">
      <RouterView />
    </div>
  </main>

  <!-- Footer -->
  <footer class="footer">
    <p>Footer stuff</p>
  </footer>

</template>