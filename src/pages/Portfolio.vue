<template>
    <div class="relative w-full min-h-screen font-merriweather">
        <div class="fixed top-0 left-0 z-50 flex items-center p-8">
            <router-link class="text-gray-200 transition-colors hover:text-red-500" to="portfolio">
                Tentang
            </router-link>
            <div class="w-12 mx-4 border-t border-gray-200"></div>
            <router-link to="/">
                <img src="../assets/logo.png" alt="Logo BWI" class="h-6" />
            </router-link>
        </div>
        
        <div class="flex flex-col min-h-screen">
            <div class="relative flex flex-col justify-center w-full h-screen" v-for="(work, key) in works" :key="key">
                <img :src="work.backgroundImage" class="absolute top-0 left-0 object-cover w-full h-full" :alt="work.title" />
                <div class="absolute top-0 left-0 z-10 object-cover w-full h-full bg-gray-900 opacity-50"></div>

                <div class="relative z-20 p-8">
                    <p class="text-5xl font-bold text-gray-200 uppercase tracking-ultraWide">{{ work.title }}</p>
                    <p class="mt-6 tracking-wide text-gray-200">{{ work.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import works from '../database/works';

    export default {
        name: 'Portfolio',
        data() {
            return {
                works: works,
            }
        }
    }
</script>