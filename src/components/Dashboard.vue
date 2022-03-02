<template>
    <app-layout>
        <div class="flex">
            <p>Inicio </p>
            <p class="text-blue-400"> > Administradores</p>
        </div>       
        <h1 class="font-bold text-lg">Administradores de la consola</h1>

        <div class="mt-5 flex justify-between">
            <form action="" class="flex">
                <input type="text" v-model="search" placeholder="Buscar" class="p-2">
                <button type="button" class="rounded border bg-gray-300 p-2 ml-2">
                    Buscar
                </button>
                <button type="button" @click="filterSearch =! filterSearch" class="ml-2 rounded border bg-teal-600 p-2">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
                    </svg>
                </button>

                <div v-show="filterSearch" class="absolute mt-10 ml-20 w-64 bg-white rounded-md overflow-hidden shadow-xl z-10">
                    <div class="block px-5 py-5 text-sm text-gray-700">
                        <div class="grid grid-cols-1 divide-y">
                            <div class="m-2">
                                <h1 class="font-bold text-base">Filtros de Busqueda</h1>
                            </div>
                            <div class="m-2">
                                <label for="area" class="w-full mt-5 p-2">Area</label>
                                <select name="area" id="area" class="w-full mt-2 p-2 rounded border-gray-400">
                                    <option value="">Seleccione</option>
                                    <option value="">Administrador</option>
                                </select>

                                <label for="estatus" class="w-full mt-5 p-2">Estatus</label>
                                <select name="estatus" id="estatus" class="w-full mt-2 p-2 rounded">
                                    <option value="">Seleccione</option>
                                    <option value="">Administrador</option>
                                </select>
                            </div>
                            <div class="m-2 flex">
                                <button class="rounded border bg-gray-300 p-2 ml-2">
                                    Limpiar
                                </button>
                                <button class="ml-5 rounded border bg-teal-600 p-2">
                                    Aplicar Filtros
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </form>

            <div class="flex">
                <button class="rounded border border-teal-600 p-1 bg-white">
                    Descargar
                </button>
                <router-link class="ml-5 rounded bg-teal-600 text-white border p-2" to="/addAdmin">
                    Agregar Nuevo Admin
                </router-link>
            </div>
        </div>

        <div class="overflow-x-auto">
            <div class="font-sans overflow-hidden">
                <div class="w-full">
                    <div class="bg-white shadow-md rounded my-6 overflow-x-auto ">
                        <table class="min-w-max w-full">
                            <thead>
                                <tr class="text-back border-slate-400 text-sm leading-normal">
                                    <th class="py-5 px-6 text-left"><input type="checkbox" name="" id=""></th>
                                    <th class="py-5 px-6 text-left">Administradores</th>
                                    <th class="py-5 px-6 text-center">Areas</th>
                                    <th class="py-5 px-6 text-center">Correo</th>
                                    <th class="py-5 px-3 text-center">Estatus</th>
                                    <th class="py-5 px-6 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="text-gray-600 text-sm font-light">
                                <tr class="border-b border-gray-200 bg-white hover:bg-gray-100">
                                    <td class="py-5 px-6 text-left whitespace-nowrap">
                                        <div class="flex items-center">
                                            <div class="mr-2">
                                                <input type="checkbox" name="" id="">
                                            </div>
                                        </div>
                                    </td>
                                    <td class="py-5 px-6 text-left">
                                        <div class="flex items-center">
                                            <div class="mr-2">
                                                <img class="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg"/>
                                            </div>
                                            <span class="font-medium">Eshal Rosas</span>
                                        </div>
                                    </td>
                                    <td class="py-5 px-6 text-center">
                                        <span class="font-medium">Recursos Humanos</span>
                                    </td>
                                    <td class="py-5 px-6 text-center">
                                        <span class="font-medium">correo@gmail.com</span>
                                    </td>
                                    <td class="py-5 px-6 text-center">
                                        <span class="bg-green-200 text-green-600 py-1 px-3 rounded-full font-medium text-sm uppercase">Activo</span>
                                    </td>
                                    <td class="py-5 px-6 text-center">
                                        <div class="flex item-center justify-center">
                                            <router-link to="/editAdmin">
                                                <div class="text-blue-500 w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                                </div>
                                            </router-link>
                                            <button type="button" class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" @click="showModal = !showModal">
                                                <svg class="text-red-500 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                            </button>
                                            <router-link to="/viewAdmin">
                                                <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                    <svg class="text-gray-500 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                                                </div>
                                            </router-link>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                                    <td class="py-5 px-6 text-left">
                                        <div class="flex items-center">
                                            <input type="checkbox" name="" id="">
                                        </div>
                                    </td>
                                    <td class="py-5 px-6 text-left">
                                        <div class="flex items-center">
                                            <div class="mr-2">
                                                <img class="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/women/2.jpg"/>
                                            </div>
                                            <span class="font-medium">Anita Rodriquez</span>
                                        </div>
                                    </td>
                                    <td class="py-5 px-6 text-center">
                                        <span class="font-medium">Recursos Humanos</span>
                                    </td>
                                    <td class="py-5 px-6 text-center">
                                        <span class="font-medium">correo@gmail.com</span>
                                    </td>
                                    <td class="py-5 px-6 text-center">
                                        <span class="bg-green-200 text-green-600 py-1 px-3 rounded-full font-medium text-sm uppercase">Activo</span>
                                    </td>
                                    <td class="py-5 px-6 text-center">
                                        <div class="flex item-center justify-center">
                                            <router-link to="/editAdmin">
                                                <div class="text-blue-500 w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                                </div>
                                            </router-link>
                                            <button type="button" class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" @click="showModal = !showModal">
                                                <svg class="text-red-500 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                            </button>
                                            <router-link to="/viewAdmin">
                                                <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                    <svg class="text-gray-500 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                                                </div>
                                            </router-link>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="border-b border-gray-200 hover:bg-gray-100">
                                    <td class="py-5 px-6 text-left">
                                        <div class="flex items-center">
                                            <input type="checkbox" name="" id="">
                                        </div>
                                    </td>
                                    <td class="py-5 px-6 text-left">
                                        <div class="flex items-center">
                                            <div class="mr-2">
                                                <img class="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/3.jpg"/>
                                            </div>
                                            <span class="font-medium">Taylan Bush</span>
                                        </div>
                                    </td>
                                    <td class="py-5 px-6 text-center">
                                        <span class="font-medium">Recursos Humanos</span>
                                    </td>
                                    <td class="py-5 px-6 text-center">
                                        <span class="font-medium">correo@gmail.com</span>
                                    </td>
                                    <td class="py-5 px-6 text-center">
                                        <span class="bg-red-200 text-red-600 py-1 px-3 rounded-full font-medium text-sm uppercase">Inactivo</span>
                                    </td>
                                    <td class="py-5 px-6 text-center">
                                        <div class="flex item-center justify-center">
                                            <router-link to="/editAdmin">
                                                <div class="text-blue-500 w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                                </div>
                                            </router-link>
                                            <button type="button" class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" @click="showModal = !showModal">
                                                <svg class="text-red-500 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                            </button>
                                            <router-link to="/viewAdmin">
                                                <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                    <svg class="text-gray-500 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                                                </div>
                                            </router-link>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                                    <td class="py-5 px-6 text-left">
                                        <div class="flex items-center">
                                            <input type="checkbox" name="" id="">
                                        </div>
                                    </td>
                                    <td class="py-5 px-6 text-left">
                                        <div class="flex items-center">
                                            <div class="mr-2">
                                                <img class="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/4.jpg"/>
                                            </div>
                                            <span class="font-medium">Tarik Novak</span>
                                        </div>
                                    </td>
                                    <td class="py-5 px-6 text-center">
                                        <span class="font-medium">Recursos Humanos</span>
                                    </td>
                                    <td class="py-5 px-6 text-center">
                                        <span class="font-medium">correo@gmail.com</span>
                                    </td>
                                    <td class="py-5 px-6 text-center">
                                        <span class="bg-green-200 text-green-600 py-1 px-3 rounded-full font-medium text-sm uppercase">Activo</span>
                                    </td>
                                    <td class="py-5 px-6 text-center">
                                        <div class="flex item-center justify-center">
                                            <router-link to="/editAdmin">
                                                <div class="text-blue-500 w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                                </div>
                                            </router-link>
                                            <button type="button" class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" @click="showModal = !showModal">
                                                <svg class="text-red-500 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                            </button>
                                            <router-link to="/viewAdmin">
                                                <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                    <svg class="text-gray-500 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                                                </div>
                                            </router-link>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="border-b border-gray-200 hover:bg-gray-100">
                                    <td class="py-5 px-6 text-left">
                                        <div class="flex items-center">
                                            <input type="checkbox" name="" id="">
                                        </div>
                                    </td>
                                    <td class="py-5 px-6 text-left">
                                        <div class="flex items-center">
                                            <div class="mr-2">
                                                <img class="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/5.jpg"/>
                                            </div>
                                            <span class="font-medium">Oscar Howard</span>
                                        </div>
                                    </td>
                                    <td class="py-5 px-6 text-center">
                                        <span class="font-medium">Recursos Humanos</span>
                                    </td>
                                    <td class="py-5 px-6 text-center">
                                        <span class="font-medium">correo@gmail.com</span>
                                    </td>
                                    <td class="py-5 px-6 text-center">
                                        <span class="bg-green-200 text-green-600 py-1 px-3 rounded-full font-medium text-sm uppercase">Activo</span>
                                    </td>
                                    <td class="py-5 px-6 text-center">
                                        <div class="flex item-center justify-center">
                                            <router-link to="/editAdmin">
                                                <div class="text-blue-500 w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                                </div>
                                            </router-link>
                                            <button type="button" class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" @click="showModal = !showModal">
                                                <svg class="text-red-500 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                            </button>
                                            <router-link to="/viewAdmin">
                                                <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                    <svg class="text-gray-500 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                                                </div>
                                            </router-link>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                                    <td class="py-5 px-6 text-left">
                                        <div class="flex items-center">
                                            <input type="checkbox" name="" id="">
                                        </div>
                                    </td>
                                    <td class="py-5 px-6 text-left">
                                        <div class="flex items-center">
                                            <div class="mr-2">
                                                <img class="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/women/6.jpg"/>
                                            </div>
                                            <span class="font-medium">Melisa Moon</span>
                                        </div>
                                    </td>
                                    <td class="py-5 px-6 text-center">
                                        <span class="font-medium">Recursos Humanos</span>
                                    </td>
                                    <td class="py-5 px-6 text-center">
                                        <span class="font-medium">correo@gmail.com</span>
                                    </td>
                                    <td class="py-5 px-6 text-center">
                                        <span class="bg-green-200 text-green-600 py-1 px-3 rounded-full font-medium text-sm uppercase">Activo</span>
                                    </td>
                                    <td class="py-5 px-6 text-center">
                                        <div class="flex item-center justify-center">
                                            <router-link to="/editAdmin">
                                                <div class="text-blue-500 w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                                </div>
                                            </router-link>
                                            <button type="button" class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" @click="showModal = !showModal">
                                                <svg class="text-red-500 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                            </button>
                                            <router-link to="/viewAdmin">
                                                <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                    <svg class="text-gray-500 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                                                </div>
                                            </router-link>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="showModal" class="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster" style="background: rgba(0,0,0,.7);">
            <div class="border border-teal-500 shadow-lg modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                <div class="modal-content py-4 text-left px-6">
                    <!--Title-->
                    <div class="flex justify-between items-center pb-3">
                        <p class="text-lg text-teal-600 text-center">Eliminar Administrador</p>
                        <div class="modal-close cursor-pointer z-50" @click="showModal = !showModal">
                            <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"> </path>
                            </svg>
                        </div>
                    </div>
                    <!--Body-->
                    <div class="my-5">
                        <p class="text-gray-600 mt-2">¿Esta seguro que desea eliminar este administrador?</p>
                        <div class="flex mt-3">
                            <img class="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1553267751-1c148a7280a1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Your avatar">
                            <div class="ml-2">
                                <h2 class="text-gray-600 text-sm hidden sm:block text-left">Adrian Stefan</h2>
                                <h2 class="text-gray-600 text-sm hidden sm:block text-left">correo@gmail.com</h2>
                            </div>
                        </div>
                    </div>
                    <!--Footer-->
                    <div class="flex justify-end pt-2">
                        <button class="focus:outline-none modal-close rounded bg-white text-black border border-teal-600 p-2" @click="showModal = !showModal">Cancelar</button>
                        <router-link class="rounded bg-teal-600 text-white border border-teal-600 p-2 ml-5" to="/confirmation">
                            Si, eliminar
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

    </app-layout>
</template>

<script setup>
    import { ref } from 'vue';
    import AppLayout from './AppLayout.vue'; 

    const search = ref("")
    const filterSearch = ref(false)
    const showModal = ref(false)
</script>

<style scoped>

</style>