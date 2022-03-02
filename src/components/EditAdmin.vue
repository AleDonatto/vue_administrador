<template>
    <app-layout>
        <div class="flex">
            <p>Inicio </p>
            <p class="text-blue-400"> > Administradores</p>
        </div>       
        <h1 class="font-bold text-lg">Editar Administrador</h1>

        <div class="grid grid-cols-1 gap-4 mt-5 w-auto">
            <div>
                <img src="https://images.unsplash.com/photo-1553267751-1c148a7280a1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="" class="rounded-full h-20 w-20 object-cover">
                <p>Cheyenne Kosgaard</p>
            </div>
            <div class="grid grid-cols-1 gap-4 mt-5 w-1/2">
                <div class="grid inline-block">
                    <label for="nombre" class="text-gray-500">Nombre</label>
                    <input type="text" value="Cheyenne kosgaard" class="p-2 rounded">
                </div>
                <div class="grid inline-block">
                    <label for="apellidos" class="text-gray-500">Apellidos</label>
                    <input type="text" name="apellidos" id="" value="Kosgaard" class="p-2 rounded">
                </div>
                <div class="grid inline-block">
                    <label for="email" class="text-gray-500">Correo Electronico</label>
                    <input type="email" name="email" value="correo@gmail.com" class="p-2 rounded">
                </div>
                <div class="grid inline-block">
                    <label for="area" class="text-gray-500">Area</label>
                    <input type="text" name="area" id="" value="Recursos Humanos" class="p-2 rounded">
                </div>
                <div class="grid inline-block">
                    <label for="estatus" class="text-gray-500">Estatus</label>
                    <input type="text" name="estatus" id="" value="Estatus" class="p-2 rounded">
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
    import AppLayout from './AppLayout.vue';
</script>

<style>

</style>