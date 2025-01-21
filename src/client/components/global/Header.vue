<script setup>

  // === IMPORTS ===
  import { computed, onMounted, ref, reactive, watch } from 'vue';
  import { useAuthStore } from '@/stores/authStore.js';
  import LiveSearchInput from '@/components/forms/LiveSearchInput.vue';

  // === STORE ====
  const authStore = useAuthStore();
  
  // === REF ===
  const userInfoOpen = ref(false);


  // === EVENTS ===
  // ~ Handle any Click
  const handleGlobalClick = () => {
    if(userInfoOpen.value) userInfoOpen.value = false;
  };

  // ~ LOGOUT User
  const handleLogoutClick = () => {
    authStore.logout();
  }

  const handleResultClick = (topic) => {
    console.log(topic);
  };

  // ~ User Info Options Toggle
  const toggleUserInfoOpen = () => {
    userInfoOpen.value = !userInfoOpen.value;
  };

</script>

<template>
  <!-- Listen for click -->
  <GlobalEvents @click="handleGlobalClick" />
  
  <!-- Header flexed into thirds -->
  <header class="header sticky" id="header">
    <div class="flex thirds tall">
      
      <!-- Logo (1/3) -->
      <h1 class="no-mar left">
        <RouterLink to="/">
          <img src="/assets/img/logo2.png" alt="Devpedia logo">
        </RouterLink>
      </h1>

      <!-- Search input (2/3) -->
      <form class="center">
        <LiveSearchInput
          table="topics"
          classes="wide"
          placeholder="Search pages/topics"
          :limit=5
          @emitClickedResult="handleResultClick"
        />
        <!--input type="text" class="no-mar wide" placeholder="Search Topics/Pages"-->
      </form>
      
      <!-- User Info Toggle & Menu (3/3 if logged in) -->
      <div v-if="authStore.user" id="user-info" class="right">
        <button @click.stop="toggleUserInfoOpen" id="user-info-toggle" title="BallsoHerd" class="center point cir">B</button>
          <transition name="fade">
          <nav v-if="userInfoOpen" id="user-info-menu" class="abs center">
            <ul>
              <li><a href="">Profile</a></li>
              <li><a href="">Settings</a></li>
              <li><a @click="handleLogoutClick">Logout</a></li>
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
</template>

