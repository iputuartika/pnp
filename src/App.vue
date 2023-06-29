<script setup>
import { ref, reactive } from 'vue'
// import { RouterView } from 'vue-router'
// import axios from 'axios'
// import { baseUrl } from './api'
// import { useToast } from 'vue-toastification'
import NavigationComponent from './components/NavigationComponent.vue'
import SidebarComponent from './components/SidebarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
// // import { RouterLink, RouterView } from 'vue-router'
// // import HelloWorld from './components/HelloWorld.vue'
// // import { Button } from 'flowbite-vue'
</script>

<template>
  <NavigationComponent />
  <SidebarComponent />
  <main class="md:pl-64 bg-sky-500 min-h-screen w-full py-14 dark:bg-gray-900 antialiased">
    <div class="px-2 py-2">
      <RouterView />
    </div>
  </main>
  <FooterComponent />
</template>
