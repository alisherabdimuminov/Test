<template>
    <input 
        type="text"
        class="block w-full bg-white dark:bg-[#181622] py-2 px-3 outline-none rounded-md border border-[#DCDCE0] dark:border-[#33323E] focus:ring-1 focus:ring-blue-800"
        @input="$emit('update:modelValue', $event.target?.value)"
    >
</template>