<!-- src/views/Dashboard.vue -->
<template>
  <div>
    <h1>Mon Dashboard</h1>
    <div class="flex">
      <SideBar /> <!-- Ajoutez le composant SidebarBar ici -->
      <div class="flex-1 p-4">
        <!-- Le contenu principal de votre dashboard -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/layouts/SideBar.vue';

export default {
  components: {
    SideBar,
  },
};
</script>
