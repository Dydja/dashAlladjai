<!-- src/views/Dashboard.vue -->
<template>
  <div>
    <h1>Mon Dashboard</h1>
    <nav>
      <router-link to="/users">Utilisateurs</router-link>
      <router-link to="/services">Services</router-link>
      <router-link to="/reservations">Réservations</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>
