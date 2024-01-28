<template>
    <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <!-- <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" /> -->
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">{{ title }}</h2>

        </div>

        <slot></slot>



    </div>
</template>

<script setup>

const { title } = defineProps({

    title: String
})



</script>

<style >
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

main {
    height: 100vh;
    background-color: antiquewhite;
}
</style>
