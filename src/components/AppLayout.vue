<template>
    <!-- component -->
    <div>
        <div class="">
            <div class="flex h-screen bg-gray-100 font-roboto">
                <div :class="sidebarOpen ? 'block' : 'hidden'" @click="sidebarOpen = false" class="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"></div>
        
                <div :class="sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
                class="fixed z-30 inset-y-0 left-0 w-60 transition duration-300 transform bg-white overflow-y-auto lg:translate-x-0 lg:static lg:inset-0">
                    <div class="flex items-center justify-center mt-8">
                        <div class="flex items-center">
                            <span class="text-gray-800 text-2xl font-semibold">Dashboard</span>
                        </div>
                    </div>
        
                    <nav class="flex flex-col mt-10 px-4 text-center">
                        <a href="#" class="flex items-center py-2 text-sm text-gray-700 bg-gray-200 rounded">
                            <svg class="w-6 h-6 text-sky-400 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                            </svg>
                            <p>Administrador</p> 
                        </a>
                        <a href="#" class="flex items-center mt-3 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-200 rounded">
                            <svg class="w-6 h-6 text-sky-400 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                            </svg>
                            <p>Catalogo</p>
                        </a>
                        <a href="#" class="flex items-center mt-3 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-200 rounded">
                            <svg class="w-6 h-6 text-sky-400 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                            <p>Lideres</p>
                        </a>
                        <a href="#" class="flex items-center mt-3 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-200 rounded">
                            <svg class="w-6 h-6 text-sky-400 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                            </svg>
                            <p>Usuarios</p>
                        </a>
                        <a href="#" class="flex items-center mt-3 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-200 rounded">
                            <svg class="w-6 h-6 text-sky-400 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                            <p>Mi Empresa</p>
                        </a>
                        <a href="#" class="flex items-center mt-3 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-200 rounded">
                            <svg class="w-6 h-6 text-sky-400 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                            <p>Cursos</p>
                        </a>
                        <a href="#" class="flex items-centermt-3 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-200 rounded">
                            <svg class="w-6 h-6 text-sky-400 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                            <p>Recompensas</p>
                        </a>
                        <a href="#" class="flex items-center mt-3 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-200 rounded">
                            <svg class="w-6 h-6 text-sky-400 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                            </svg>
                            <p>Eventos</p>
                        </a>
                        <a href="#" class="flex items-center mt-3 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-200 rounded">
                            <svg class="w-6 h-6 text-sky-400 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                            </svg>
                            <p>Notificaciones</p>
                        </a>
                        <a href="#" class="flex items-center mt-3 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-200 rounded">
                            <svg class="w-6 h-6 text-sky-400 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                            </svg>
                            <p>Reportes</p>
                        </a>
                    </nav>
                </div>
        
                <div class="flex-1 flex flex-col overflow-hidden">
                    <header class="flex justify-between items-center p-6 bg-teal-600">
                        <div class="flex items-center space-x-4 lg:space-x-0">
                            <button @click="sidebarOpen = true" class="text-gray-500 dark:text-gray-300 focus:outline-none lg:hidden">
                                <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
        
                            <div>
                                <h1 class="text-2xl font-medium text-gray-800 dark:text-white"></h1>
                            </div>
                        </div>
        
                        <div class="flex items-center space-x-4 divide-x">
                            
                            <button class="flex text-white dark:text-gray-300 focus:outline-none px-5">
                                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none">
                                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
        
                            <div class="relative">
                                <button @click="dropdownOpen =! dropdownOpen" class="flex items-center space-x-2 relative focus:outline-none px-5">
                                    <img class="h-9 w-9 rounded-full border-2 border-purple-500 object-cover" src="https://images.unsplash.com/photo-1553267751-1c148a7280a1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Your avatar">
                                    <div>
                                        <h2 class="text-white text-sm hidden sm:block text-left">Adrian Stefan</h2>
                                        <h2 class="text-white text-sm hidden sm:block text-left">Administrador</h2>
                                    </div>

                                    <div>
                                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                                        </svg>
                                    </div>
                                    
                                </button>
        
                                <div v-show="dropdownOpen" class="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10"
                                    @click="dropdownOpen = false">
                                    <a href="#"
                                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-600 hover:text-white">Profile</a>
                                    <a href="#"
                                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-600 hover:text-white">Tickets</a>
                                    <a href="/login"
                                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-600 hover:text-white">Logout</a>
                                </div>
                            </div>
                        </div>
                    </header>
        
                    <main class="flex-1 overflow-x-hidden overflow-y-auto bg-slate-50">
                        <div class="container mx-auto px-6 py-8">
                            <slot></slot>
                            
                        </div>
                    </main>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
    import { ref } from 'vue'

    const dropdownOpen = ref(false)
    const sidebarOpen = ref(false)
</script>

<style scoped>

</style>