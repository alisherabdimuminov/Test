<template>
    <ClientOnly>
        <div class="border border-[#DCDCE0] dark:border-[#33323E] rounded-t-lg">
            <div class="flex py-2 px-2 gap-x-2 w-full overflow-auto">
                <p
                    v-for="(code, index) in codes" :key="index"
                    @click="changeTab(code.id, code.lang)" 
                    class="cursor-pointer py-px px-2 inline-flex items-center justify-center"
                    :class="{
                        'bg-[#F2F1F3] dark:bg-[#211F2D] rounded-md': code.active
                    }"
                >
                    <i v-if="code.icon" :class="[code.icon]"></i>
                    {{ code.title }}
                </p>                
            </div>
            <div class="relative">
                <Codemirror
                    v-if="getTheme === 'dark'"
                    v-model="code"
                    :code="code"
                    :indent-with-tab="true"
                    :tab-size="4"
                    :extensions="dark_extensions"
                    :style="{
                        fontSize: '18px',
                        height: '400px'
                    }"
                    placeholder="Code goes here..."
                >
                </Codemirror>
                <Codemirror
                    v-if="getTheme === 'light'"
                    v-model="code"
                    :code="code"
                    :indent-with-tab="true"
                    :tab-size="4"
                    :extensions="light_extensions"
                    :disabled="true"
                    :style="{
                        fontSize: '18px',
                        height: '400px'
                    }"
                    :language="'js'"
                    placeholder="Code goes here..."
                >
                </Codemirror>
                <button @click="copy($event)" class="text-lg absolute top-0 right-0 mr-6 py-1 px-2 hover:bg-slate-900/10 hover:dark:bg-gray-300/10 rounded-md">
                    <i class='bx bx-copy'></i>
                </button>
                <button @click="run" class="text-lg absolute top-0 right-0 py-1 px-2 hover:bg-slate-900/10 hover:dark:bg-gray-300/10 rounded-md">
                    <i class='bx bx-play'></i>
                </button>
            </div>
        </div>
    </ClientOnly>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTheme } from '~/composables/useTheme';

// languages
import { go } from '@codemirror/lang-go';
import { zig } from "codemirror-lang-zig";
import { sql } from '@codemirror/lang-sql';
import { cpp } from '@codemirror/lang-cpp';
import { css } from '@codemirror/lang-css';
import { php } from '@codemirror/lang-php';
import { xml } from '@codemirror/lang-xml';
import { vue } from '@codemirror/lang-vue';
import { rust } from '@codemirror/lang-rust';
import { yaml } from '@codemirror/lang-yaml';
import { html } from '@codemirror/lang-html';
import { java } from '@codemirror/lang-java';
import { json } from '@codemirror/lang-json';
import { less } from '@codemirror/lang-less';
import { wast } from '@codemirror/lang-wast';
import { python } from '@codemirror/lang-python';
import { liquid } from '@codemirror/lang-liquid';
import { markdown } from '@codemirror/lang-markdown';
import { csharp } from "@replit/codemirror-lang-csharp";
import { javascript } from '@codemirror/lang-javascript';

// themes
import { Codemirror } from 'vue-codemirror';
import { EditorState } from '@codemirror/state'
import { oneDark } from '@codemirror/theme-one-dark';
import { basicLight } from '@fsegurai/codemirror-theme-basic-light';


// constantas
const { getTheme } = useTheme();
const props = defineProps({
    codes: {
        type: Array,
    }
});

const code = ref(props.codes?.[0].code);


let light_extensions = [cpp(), basicLight];
let dark_extensions = [cpp(), oneDark];


const copy = (event: Event) => {
    let copyButton = <HTMLElement> event.target;
    if (copyButton.tagName === "BUTTON") {
        copyButton = <HTMLElement> event.target;
    } else {
        if (copyButton.parentElement) {
            copyButton = copyButton.parentElement;
        }
    }
    // copy to clipboard
    navigator.clipboard.writeText(code.value);
    if (copyButton) {
        // change copy icon to checked icon
        copyButton.innerHTML = "<i class='bx bx-check-double text-green-500'></i>";
    }
    setTimeout(() => {
        if (copyButton) {
            // change checked icon to copy icon
            copyButton.innerHTML = "<i class='bx bx-copy'></i>";
        }
    }, 2000);
}

const run = () => {
    console.log(code.value);
}

const changeTab = (id: string, lang: string) => {
    let newCode = props.codes?.filter((el) => {
        if (el.id === id) {
            el.active = true;
        } else {
            el.active = false;
        }
        return el.id === id
    })[0];
    code.value = newCode.code;
    if (lang === 'py') {
        light_extensions = [python(), basicLight];
        dark_extensions = [python(), oneDark];
    }
    else if (lang === 'cpp') {
        light_extensions = [cpp(), basicLight];
        dark_extensions = [cpp(), oneDark];
    }
    else if (lang === 'c') {
        light_extensions = [cpp(), basicLight];
        dark_extensions = [cpp(), oneDark];
    }
    else if (lang === 'rust') {
        light_extensions = [rust(), basicLight];
        dark_extensions = [rust(), oneDark];
    }
    else if (lang === 'java') {
        light_extensions = [java(), basicLight];
        dark_extensions = [java(), oneDark];
    }
    else if (lang === 'js') {
        light_extensions = [javascript(), basicLight];
        dark_extensions = [javascript(), oneDark];
    }
    else if (lang === 'csharp') {
        light_extensions = [csharp(), basicLight];
        dark_extensions = [csharp(), oneDark];
    }
    else if (lang === 'html') {
        light_extensions = [html(), basicLight];
        dark_extensions = [html(), oneDark];
    }
    else if (lang === 'zig') {
        light_extensions = [zig(), basicLight];
        dark_extensions = [zig(), oneDark];
    }
    else if (lang === 'sql') {
        light_extensions = [sql(), basicLight];
        dark_extensions = [sql(), oneDark];
    }
    else if (lang === 'css') {
        light_extensions = [css(), basicLight];
        dark_extensions = [css(), oneDark];
    }
    else if (lang === 'go') {
        light_extensions = [go(), basicLight];
        dark_extensions = [go(), oneDark];
    }
    else if (lang === 'zig') {
        light_extensions = [zig(), basicLight];
        dark_extensions = [zig(), oneDark];
    }
    else if (lang === 'php') {
        light_extensions = [php(), basicLight];
        dark_extensions = [php(), oneDark];
    }
    else if (lang === 'wast') {
        light_extensions = [wast(), basicLight];
        dark_extensions = [wast(), oneDark];
    }
    else if (lang === 'vue') {
        light_extensions = [vue(), basicLight];
        dark_extensions = [vue(), oneDark];
    }
    else if (lang === 'liquid') {
        light_extensions = [liquid(), basicLight];
        dark_extensions = [liquid(), oneDark];
    }
    else if (lang === 'json') {
        light_extensions = [json(), basicLight];
        dark_extensions = [json(), oneDark];
    }
    else if (lang === 'markdown') {
        light_extensions = [markdown(), basicLight];
        dark_extensions = [markdown(), oneDark];
    }
    else if (lang === 'less') {
        light_extensions = [less(), basicLight];
        dark_extensions = [less(), oneDark];
    }
    else if (lang === 'yaml') {
        light_extensions = [yaml(), basicLight];
        dark_extensions = [yaml(), oneDark];
    }
    else if (lang === 'xml') {
        light_extensions = [xml(), basicLight];
        dark_extensions = [xml(), oneDark];
    }
    else {
        light_extensions = [basicLight];
        dark_extensions = [oneDark];
    }
    console.log("changed")
}

onMounted(() => {
    let lang = props.codes[0].lang;
    if (lang === 'py') {
        light_extensions = [python(), basicLight];
        dark_extensions = [python(), oneDark];
    }
    else if (lang === 'cpp') {
        light_extensions = [cpp(), basicLight];
        dark_extensions = [cpp(), oneDark];
    }
    else if (lang === 'c') {
        light_extensions = [cpp(), basicLight];
        dark_extensions = [cpp(), oneDark];
    }
    else if (lang === 'rust') {
        light_extensions = [rust(), basicLight];
        dark_extensions = [rust(), oneDark];
    }
    else if (lang === 'java') {
        light_extensions = [java(), basicLight];
        dark_extensions = [java(), oneDark];
    }
    else if (lang === 'js') {
        light_extensions = [javascript(), basicLight];
        dark_extensions = [javascript(), oneDark];
    }
    else if (lang === 'csharp') {
        light_extensions = [csharp(), basicLight];
        dark_extensions = [csharp(), oneDark];
    }
    else if (lang === 'html') {
        light_extensions = [html(), basicLight];
        dark_extensions = [html(), oneDark];
    }
    else if (lang === 'zig') {
        light_extensions = [zig(), basicLight];
        dark_extensions = [zig(), oneDark];
    }
    else if (lang === 'sql') {
        light_extensions = [sql(), basicLight];
        dark_extensions = [sql(), oneDark];
    }
    else if (lang === 'css') {
        light_extensions = [css(), basicLight];
        dark_extensions = [css(), oneDark];
    }
    else if (lang === 'go') {
        light_extensions = [go(), basicLight];
        dark_extensions = [go(), oneDark];
    }
    else if (lang === 'zig') {
        light_extensions = [zig(), basicLight];
        dark_extensions = [zig(), oneDark];
    }
    else if (lang === 'php') {
        light_extensions = [php(), basicLight];
        dark_extensions = [php(), oneDark];
    }
    else if (lang === 'wast') {
        light_extensions = [wast(), basicLight];
        dark_extensions = [wast(), oneDark];
    }
    else if (lang === 'vue') {
        light_extensions = [vue(), basicLight];
        dark_extensions = [vue(), oneDark];
    }
    else if (lang === 'liquid') {
        light_extensions = [liquid(), basicLight];
        dark_extensions = [liquid(), oneDark];
    }
    else if (lang === 'json') {
        light_extensions = [json(), basicLight];
        dark_extensions = [json(), oneDark];
    }
    else if (lang === 'markdown') {
        light_extensions = [markdown(), basicLight];
        dark_extensions = [markdown(), oneDark];
    }
    else if (lang === 'less') {
        light_extensions = [less(), basicLight];
        dark_extensions = [less(), oneDark];
    }
    else if (lang === 'yaml') {
        light_extensions = [yaml(), basicLight];
        dark_extensions = [yaml(), oneDark];
    }
    else if (lang === 'xml') {
        light_extensions = [xml(), basicLight];
        dark_extensions = [xml(), oneDark];
    }
    else {
        light_extensions = [basicLight];
        dark_extensions = [oneDark];
    }
    // light_extensions = [python(), basicLight, EditorState.readOnly.of(true)];
    // dark_extensions = [python(), oneDark, EditorState.readOnly.of(true)];
    document.querySelector("#editor .cm-content")?.classList.add("cm-editor-readonly");
})

</script>
