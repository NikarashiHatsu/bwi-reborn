<template>
    <div class="w-screen h-screen p-8 overflow-hidden bg-gray-800 font-merriweather">
        <div class="relative flex items-center justify-between w-full h-full bg-gray-900 shadow-2xl">
            <div class="absolute top-0 z-20 flex justify-between w-full">
                <router-link class="p-6 text-gray-200 transition-colors duration-300 ease-in-out hover:text-red-500" to="tentang">
                    Tentang
                </router-link>
                <router-link class="p-6 text-gray-200 transition-colors duration-300 ease-in-out hover:text-blue-500" to="portfolio">
                    Portfolio
                </router-link>
            </div>
            
            <!-- Particles -->
            <div class="absolute grid w-full h-full grid-cols-2">
                <div class="relative flex items-center h-full">
                    <img src="../assets/vertical-lines.png" class="absolute -mt-28 right-8" />
                </div>
                <div class="relative flex items-center h-full">
                    <img src="../assets/dots.png" class="absolute ml-8 -mt-4" width="550" height="550" />
                    <div class="absolute bottom-0 flex flex-col w-20 sm:w-40 -left-10 sm:-left-20">
                        <div class="w-full h-0.5 bg-gray-600"></div>
                        <div class="w-full h-0.5 bg-gray-600 mt-2"></div>
                        <div class="w-full h-0.5 bg-gray-600 mt-2"></div>
                        <div class="w-full h-0.5 bg-gray-600 mt-2"></div>
                        <div class="w-full h-0.5 bg-blue-500 mt-2"></div>
                        <div class="w-full h-0.5 bg-gray-600 mt-2"></div>
                        <div class="w-full h-1 mt-2 bg-gray-600"></div>
                        <div class="w-full h-2 mt-2 bg-gray-600"></div>
                        <div class="w-full h-3 mt-2 bg-red-500"></div>
                        <div class="w-full h-5 mt-2 bg-gray-600"></div>
                        <div class="w-full h-8 mt-2 bg-gray-600"></div>
                    </div>
                </div>
            </div>

            <!-- Social Media -->
            <div class="absolute bottom-0 left-0 flex p-6">
                <a href="javascript:void(0)">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-200 fill-current" viewBox="0 0 320 512">
                        <!-- Font Awesome Free 5.15.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) -->
                        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                    </svg>
                    <span class="sr-only">
                        Facebook
                    </span>
                </a>
                <a href="javascript:void(0)" class="ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-200 fill-current" viewBox="0 0 448 512">
                        <!-- Font Awesome Free 5.15.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) -->
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                    </svg>
                    <span class="sr-only">
                        Instagram
                    </span>
                </a>
                <a href="javascript:void(0)" class="ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-200 fill-current" viewBox="0 0 512 512">
                        <!-- Font Awesome Free 5.15.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) -->
                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                    </svg>
                    <span class="sr-only">
                        Twitter
                    </span>
                </a>
            </div>

            <!-- Social Media -->
            <div class="absolute bottom-0 right-0 flex p-6">
                <a href="javascript:void(0)" class="text-gray-200">
                    ID
                    <span class="sr-only">
                        Terjemahan: Bahasa Indonesia
                    </span>
                </a>
                <span class="mx-2 text-gray-200">
                    |
                </span>
                <a href="javascript:void(0)" class="text-gray-200">
                    EN
                    <span class="sr-only">
                        Translation: English
                    </span>
                </a>
            </div>
            
            <!-- About -->
            <router-link to="tentang" class="relative items-center justify-end hidden w-48 px-3 py-4 -ml-4 overflow-hidden text-white border border-gray-100 sm:flex group focus:outline-none">
                <div class="absolute right-0 w-full h-full transition-transform duration-300 ease-in-out transform -translate-x-full bg-gray-100 group-hover:translate-x-0"></div>
                <div class="absolute z-10 w-5/12 -left-4">
                    <div class="absolute top-0 right-0 w-full transition-colors duration-300 ease-in-out border-t border-gray-100 group-hover:border-red-500"></div>
                    <div class="absolute right-0 w-1 h-1 bg-gray-100 transition-colors duration-300 ease-in-out group-hover:bg-red-500 rounded-full -top-0.5"></div>
                    <div class="absolute right-6 w-1 h-1 bg-gray-100 transition-colors duration-300 ease-in-out group-hover:bg-red-500 rounded-full -top-0.5"></div>
                    <div class="absolute right-12 w-1 h-1 bg-gray-100 transition-colors duration-300 ease-in-out group-hover:bg-red-500 rounded-full -top-0.5"></div>
                </div>
                <span class="z-10 tracking-wider uppercase transition-colors duration-300 ease-in-out group-hover:text-red-500">
                    Tentang
                </span>
            </router-link>
            
            <!-- Main -->
            <div class="flex flex-col mx-auto text-center sm:mx-0">
                <img src="../assets/logo.png" height="50" class="h-8 mx-auto">
                <p class="my-2 text-gray-100">itu</p>
                <p class="z-10 mt-6 text-2xl font-bold text-gray-100 uppercase tracking-ultraWide md:text-4xl lg:text-5xl">
                    {{ text }}
                </p>
            </div>

            <!-- Works -->
            <router-link to="portfolio" class="relative items-center justify-start hidden w-48 px-3 py-4 -mr-4 overflow-hidden text-white border border-gray-100 sm:flex group focus:outline-none">
                <div class="absolute right-0 w-full h-full transition-transform duration-300 ease-in-out transform translate-x-full bg-gray-100 group-hover:translate-x-0"></div>
                <div class="absolute z-10 w-5/12 -right-4">
                    <div class="absolute top-0 left-0 w-full transition-colors duration-300 ease-in-out border-t border-gray-100 group-hover:border-blue-500"></div>
                    <div class="absolute left-0 w-1 h-1 bg-gray-100 transition-colors duration-300 ease-in-out group-hover:bg-blue-500 rounded-full -top-0.5"></div>
                    <div class="absolute left-6 w-1 h-1 bg-gray-100 transition-colors duration-300 ease-in-out group-hover:bg-blue-500 rounded-full -top-0.5"></div>
                    <div class="absolute left-12 w-1 h-1 bg-gray-100 transition-colors duration-300 ease-in-out group-hover:bg-blue-500 rounded-full -top-0.5"></div>
                </div>
                <span class="z-10 tracking-wider uppercase transition-colors duration-300 ease-in-out group-hover:text-blue-500">
                    Portfolio
                </span>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'index',
    data() {
        return {
            index: 0,
            text: 'Terbuka',
            texts: [
                'Terpercaya',
                'Cepat',
                'Jelas',
                'Terbuka',
            ],
        }
    },
    mounted() {
        setInterval(() => {
            this.text = this.texts[this.index];

            this.index + 1 >= this.texts.length ? this.index = 0 : this.index++;
        }, 500);
    }
}
</script>