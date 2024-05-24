<template>
    <div class="h-full overflow-auto">
        <div>
            <!-- FIRST -->
            <div class="py-20"></div>
            <div class="px-8 py-4 text-center">
                <p class="text-6xl font-bold my-2">Build your future</p>
                <p class="my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae reiciendis facere perferendis.</p>
                <div class="flex flex-wrap justify-center">
                    <span class="block my-4 py-2 px-3 bg-white text-black rounded-full inline-flex items-center gap-3 text-xl">
                        <NuxtLink to="main">
                            Get started <i class='bx bx-right-arrow-alt'></i>
                        </NuxtLink>
                    </span>
                </div>
            </div>
            <div class="py-20"></div>

            <!-- SECOND -->

            <!-- THIRD -->

        </div>
    </div>
</template>

<script setup lang="ts">

useHead({
    title: "AlgoLand"
});

definePageMeta({
    layout: "welcome"
});


</script>
