<template>
    <app-layout>
        <div class="flex">
            <p>Inicio </p>
            <p class="text-blue-400"> > Administradores</p>
        </div>       
        <h1 class="font-bold text-lg">Agregar Administrador</h1>

        <p class="text-sm text-">Sube tu foto con un menos a 2MB</p>
        <div class="grid grid-cols-1 gap-4 mt-5 w-auto">
            <div class="bg-white border w-48 ">
                <div class="flex justify-center bg-gray-200 h-24">
                    <div v-if="imageMuestra === ''" class="p-6">
                        <svg class="w-6 h-6 text-gray-600 rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    </div>
                    <div v-else-if="imageMuestra != ''">
                        <figure class="figure">
                            <img :src="imageMuestraEdit" alt="imagen de muestra" class="figure-img img-fluid rounded">
                        </figure>
                    </div>
                </div>
                <div class="bg-grey-lighter justify-center">
                    <p class="text-center text-sm mt-5">Arastra tu archivo o</p>
                    <label class="flex flex-col items-center px-4 py-2 mb-2 bg-white text-blue rounded-lg  border border-teal-600 shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-green-600">
                        <span class="mt-1 text-base leading-normal">Seleccione</span>
                        <input type='file' class="hidden" />
                    </label>
                </div>
            </div>
            <div class="grid grid-cols-1 gap-4 mt-5 w-1/2">
                <div class="grid inline-block">
                    <label for="nombre" class="text-gray-500">Nombre</label>
                    <input type="text" value="" class="p-2 rounded">
                </div>
                <div class="grid inline-block">
                    <label for="apellidos" class="text-gray-500">Apellidos</label>
                    <input type="text" name="apellidos" id="" value="" class="p-2 rounded">
                </div>
                <div class="grid inline-block">
                    <label for="email" class="text-gray-500">Correo Electronico</label>
                    <input type="email" name="email" value="" class="p-2 rounded">
                </div>
                <div class="grid inline-block">
                    <label for="area" class="text-gray-500">Area</label>
                    <input type="text" name="area" id="" value="" class="p-2 rounded">
                </div>
                <div class="grid inline-block">
                    <label for="estatus" class="text-gray-500">Estatus</label>
                    <input type="text" name="estatus" id="" value="" class="p-2 rounded">
                </div>
            </div>
            <div class="flex mt-4">
                <router-link class="rounded bg-white text-black border border-teal-600 p-2" to="/">
                    Cancelar
                </router-link>
                <router-link class="rounded bg-teal-600 text-white border border-teal-600 p-2 ml-5" to="/confirmation">
                    Agregar Administrador
                </router-link>
            </div>
        </div>
    </app-layout>
</template>

<script setup>
    import { ref } from '@vue/reactivity';
import AppLayout from './AppLayout.vue';

    const imageMuestra = ref('')
</script>

<style>

</style>