<template>
    <div class="relative w-full min-h-screen font-merriweather">
        <div class="fixed top-0 left-0 z-50 flex items-center p-8">
            <router-link class="text-gray-200 transition-colors hover:text-red-500" to="tentang">
                Tentang
            </router-link>
            <div class="w-12 mx-4 border-t border-gray-200"></div>
            <router-link to="/">
                <img src="../assets/logo.png" alt="Logo BWI" class="h-6" />
            </router-link>
        </div>
        
        <!-- <div class="fixed top-0 right-0 z-20 sections-menu">
            <span
                class="w-4 h-4 bg-gray-100"
                v-bind:class="{active: activeSection == index}"
                v-on:click="scrollToSection(index)"
                v-for="(offset, index) in offsets"
                v-bind:key="index">
            </span>
        </div> -->
        <div class="fixed top-0 right-0 z-50 hidden mt-3 mr-8 sm:block">
            <div class="flex flex-row items-center justify-end text-gray-300 cursor-pointer " v-for="(work, index) in works" :key="index">
                <p :class="{'text-gray-100 font-bold': activeSection == index}" class="mr-4 -mb-3 tracking-widest text-right uppercase">{{ work.title }}</p>
                <div class="relative flex flex-col justify-center h-10 mt-3">
                    <div class="absolute top-0 w-1 h-1 bg-gray-400 rounded-full"></div>
                    <div :class="activeSection == index ? 'h-4' : 'h-1'" class="w-1 duration-300 ease-in-out bg-gray-200 rounded transition-height transform-gpu"></div>
                    <div class="absolute bottom-0 w-1 h-1 bg-gray-400 rounded-full"></div>
                </div>
            </div>
        </div>
        
        <div class="flex flex-col min-h-screen">
            <section class="relative flex flex-col justify-center w-full h-screen" v-for="(work, key) in works" :key="key">
                <img :src="work.backgroundImage" class="absolute top-0 left-0 object-cover w-full h-full" :alt="work.title" />
                <div class="absolute top-0 left-0 z-10 object-cover w-full h-full bg-gray-900 opacity-50"></div>

                <div class="relative z-20 p-8">
                    <p class="text-5xl font-bold text-gray-200 uppercase tracking-ultraWide">{{ work.title }}</p>
                    <p class="mt-6 tracking-wide text-gray-200">{{ work.description }}</p>
                </div>
            </section>
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
                inMove: false,
                activeSection: 0,
                offsets: [],
                touchStartY: 0,
                touchMoveY: 0,
                touchedElement: undefined,
            }
        },
        mounted() {
            this.calculateSectionOffsets();
            window.addEventListener('DOMMouseScroll', this.handleMouseWheelDOM);  // Mozilla Firefox
            window.addEventListener('mousewheel', this.handleMouseWheel, { passive: false }); // Other browser
            window.addEventListener('touchstart', this.touchStart, { passive: false, cancellable: true }); // mobile devices
            window.addEventListener('touchmove', this.touchMove, { passive: false, cancellable: true }); // mobile devices
            window.addEventListener('touchend', this.touchEnd, { passive: false, cancellable: true }); // mobile devices
        },
        unmounted() {
            window.removeEventListener('mousewheel', this.handleMouseWheel, { passive: false });  // Other browsers
            window.removeEventListener('DOMMouseScroll', this.handleMouseWheelDOM); // Mozilla Firefox
            window.removeEventListener('touchstart', this.touchStart); // mobile devices
            window.removeEventListener('touchmove', this.touchMove); // mobile devices
            window.removeEventListener('touchend', this.touchEnd); // mobile devices
        },
        methods: {
            calculateSectionOffsets() {
                let sections = document.getElementsByTagName('section');
                let length = sections.length;

                for(let i = 0; i < length; i++) {
                    let sectionOffset = sections[i].offsetTop;
                    this.offsets.push(sectionOffset);
                }
            },

            handleMouseWheel(e) {
                if (e.wheelDelta < 30 && !this.inMove) {
                    this.moveUp();
                } else if (e.wheelDelta > 30 && !this.inMove) {
                    this.moveDown();
                }
                    
                e.preventDefault();
                return false;
            },

            handleMouseWheelDOM(e) {
                if (e.detail > 0 && !this.inMove) {
                    this.moveUp();
                } else if (e.detail < 0 && !this.inMove) {
                    this.moveDown();
                }
                
                return false;
            },

            moveDown() {
                this.activeSection--;
                this.inMove = true;
                    
                if(this.activeSection < 0) this.activeSection = this.offsets.length - 1;
                    
                this.scrollToSection(this.activeSection, true);
            },

            moveUp() {
                this.activeSection++;
                this.inMove = true;

                if(this.activeSection > this.offsets.length - 1) this.activeSection = 0;
                    
                this.scrollToSection(this.activeSection, true);
            },

            scrollToSection(id, force = false) {
                if(this.inMove && !force) return false;
                
                this.activeSection = id;
                this.inMove = true;
                
                document.getElementsByTagName('section')[id].scrollIntoView({behavior: 'smooth'});
                
                setTimeout(() => {
                    this.inMove = false;
                }, 400);  
            },

            touchStart(e) {
                e.preventDefault();
                
                this.touchStartY = e.touches[0].clientY;
                this.touchedElement = e.touches[0].target;
            },

            touchMove(e) {
                e.preventDefault();

                this.touchMoveY = e.touches[0].clientY;
            },

            touchEnd(e) {
                if(this.inMove) return false;

                if(this.touchMoveY != 0 && ((this.touchMoveY - this.touchStartY) > 30 || (this.touchMoveY - this.touchStartY) < -30)) {
                    e.preventDefault();
                    
                    if(this.touchStartY < this.touchMoveY) {
                        this.moveDown();
                    } else {
                        this.moveUp();
                    }
                    
                    this.touchStartY = 0;
                    this.touchMoveY = 0;
                } else {
                    this.touchedElement.click();
                }
                
                return false;
            }
        }
    }
</script>