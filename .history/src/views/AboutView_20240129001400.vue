<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-gray-100">
    <body class="h-full">
    ```
  -->
  <div class="min-h-full">
    <Sidebar title="Dashboard" />

    <main>
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <!-- Your content -->
        <slot></slot>
      </div>
    </main>
  </div>
</template>

<script setup>
import Sidebar from "@/components/layouts/SideBar.vue"

</script> 