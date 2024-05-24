<template>
    <div class="relative">
        <input 
            type="password"
            class="block w-full bg-white dark:bg-[#181622] py-2 px-3 outline-none rounded-md border border-[#DCDCE0] dark:border-[#33323E] focus:ring-1 focus:ring-blue-800"
            @input="$emit('update:modelValue', $event.target?.value)"
        />
        <div class="absolute inset-y-0 right-0 flex items-center outline-none">
            <button @click="handleClick($event)" type="button" class="rounded py-1 px-2 mr-3 hover:bg-hover-light dark:hover:bg-hover-dark hover:bg-[#F2F1F3] hover:dark:bg-[#211F2D]">
                <i class='bx bx-show-alt'></i>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
const handleClick = (event: any) => {
    let input = event.target.offsetParent.parentNode.firstChild
    let button = event.target.parentNode
    if (input.type === "password") {
        if (button.nodeName === "BUTTON") {
            button.innerHTML = `<i class='bx bx-low-vision'></i>`
            input.type = "text"
        }
    } else {
        if (button.nodeName === "BUTTON") {
            button.innerHTML = `<i class='bx bx-show-alt'></i>`
            input.type = "password"
        }
    }
}
</script>