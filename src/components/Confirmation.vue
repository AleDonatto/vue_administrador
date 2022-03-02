<template>
    <app-layout>

        <div class="flex">
            <p>Inicio </p>
            <p class="text-blue-400"> > Administradores</p>
        </div>       
        <h1 class="font-bold text-lg">Adminstradores de consola</h1>

        <div>
            <div class="">
                <svg class="w-8 h-8 bg-green-600 text-white rounded-full p-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <p class="font-bold text-normal mt-2">Cambios Guardados</p>
                <p class="text-gray-500 text-base mb-5">Tu Administrador se a guardado con exito</p>

                <router-link class="rounded bg-teal-600 text-white border border-teal-600 p-2" to="/">
                    Regresar a mis Administradores
                </router-link>
            </div>
        </div>

    </app-layout>
</template>

<script setup>
    import AppLayout from './AppLayout.vue';
</script>

<style scoped>

</style>