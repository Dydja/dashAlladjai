<!-- src/components/layouts/SidebarBar.vue -->
<template>
    <aside class="bg-gray-800 text-white w-64 p-4">
        <!-- Contenu de la sidebar -->
        <ul>
            <li><router-link to="/dashboard/users" class="hover:text-gray-300">Utilisateurs</router-link></li>
            <li><router-link to="/dashboard/services" class="hover:text-gray-300">Services</router-link></li>
            <li><router-link to="/dashboard/reservations" class="hover:text-gray-300">Réservations</router-link></li>
        </ul>
    </aside>
</template>
  
<script>
export default {
    // Votre logique si nécessaire
};
</script>
  