<template>
    <div 
        id="app" 
        :class="[getTheme]"
    >
        <NuxtLoadingIndicator />
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
// imports
import { useTheme } from './composables/useTheme';

// constants
const { getTheme } = useTheme();
 
</script>
