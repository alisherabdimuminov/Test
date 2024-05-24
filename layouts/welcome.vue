<template>
    <div class="w-full h-screen bg-[#fafafa] dark:bg-[#13111c] text-gray-950 dark:text-white">
        <!-- START HEADER -->
        <header class="sticky w-full top-0 border-b border-[#DCDCE0] dark:border-[#33323E] text-sm font-bold">
            <nav class="flex items-center justify-between p-3 lg:px-16 transition-all duration-200">
                <div class="flex">
                    <span class="text-lg font-bold leading-8">AlgoLand</span>
                </div>
                <div class="flex">
                    
                </div>
                <div class="flex gap-2">
                    <div class="relative cursor-pointer inline-flex text-center justify-center">
                        <span 
                            class="py-2 px-3 hover:bg-[#F2F1F3] hover:dark:bg-[#211F2D] rounded-md"
                            @click="toggleMenu('lang-menu')"    
                        >
                            {{ displayLang(getLang) }}
                        </span>
                        <div 
                            id="lang-menu" 
                            class="hidden w-32 absolute top-10 right-20 bg-white dark:bg-[#181622] border border-[#DCDCE0] dark:border-[#33323E] rounded-b-lg rounded-tl-lg py-2 px-3"
                        >
                            <ul>
                                <li 
                                    v-for="(lang, index) in getLangs" :key="index" 
                                    class="hover:bg-[#F2F1F3] hover:dark:bg-[#211F2D] py-1 px-2 rounded-md"
                                    @click="changeLang(lang, 'lang-menu')"
                                >
                                        {{ displayLang(lang) }}
                                </li>
                                <!-- <li class="hover:bg-[#F2F1F3] hover:dark:bg-[#211F2D] py-1 px-2 rounded-md">🇷🇺 Русский</li> -->
                                <!-- <li class="hover:bg-[#F2F1F3] hover:dark:bg-[#211F2D] py-1 px-2 rounded-md">🇬🇧 English</li> -->
                            </ul>
                        </div>
                    </div>
                    <button id="themeToggle" @click="changeTheme" class="cursor-pointer inline-flex items-center justify-center py-2 px-3 hover:bg-[#F2F1F3] hover:dark:bg-[#211F2D] rounded-md text-lg">
                        <i v-if="getTheme === 'dark'" class="bx bx-sun"></i>
                        <i v-if="getTheme === 'light'" class="bx bx-moon"></i>
                    </button>
                    <div class="relative cursor-pointer inline-flex items-center justify-center">
                        <span 
                            class="border py-1 px-3 border-[#DCDCE0] dark:border-[#33323E] bg-white dark:bg-[#181622] rounded-full"
                            @click="toggleMenu('auth-menu')"
                        >
                            Auth
                        </span>
                        <div id="auth-menu" class="hidden w-40 absolute top-10 right-14 bg-white dark:bg-[#181622] border border-[#DCDCE0] dark:border-[#33323E] rounded-b-lg rounded-tl-lg py-2 px-3">
                            <ul>
                                <li class="hover:bg-[#F2F1F3] hover:dark:bg-[#211F2D] py-1 px-2 rounded-md">
                                    <NuxtLink>{{ translate("authLogin") }}</NuxtLink>
                                </li>
                                <li class="hover:bg-[#F2F1F3] hover:dark:bg-[#211F2D] py-1 px-2 rounded-md">
                                    <NuxtLink>{{ translate("authSignUp") }}</NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- <NuxtLink class="cursor-pointer inline-flex items-center justify-center border px-3 border-[#DCDCE0] dark:border-[#33323E] bg-white dark:bg-[#181622] rounded-full">SignUp</NuxtLink> -->
                </div>
            </nav>
        </header>
        <!-- END HEADER -->
        <div class="h-[calc(100%-4.1rem)] overflow-auto">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
// imports
import { useTheme } from '~/composables/useTheme';
import { useLang } from '~/composables/useLang';

// constants
const { getTheme, changeTheme } = useTheme();
const { getLang, changeLang, translate, displayLang, getLangs } = useLang();


// methods
// toggle lang menu
const toggleMenu = (id: string) => {
    document.getElementById(id)?.classList.toggle("hidden");
};

</script>
