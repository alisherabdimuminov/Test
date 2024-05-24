export default defineNuxtConfig({
    devtools: { enabled: true },

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        }
    },

    css: [
        '~/assets/css/main.css'
    ],

    app: {
        head: {
            link: [
                { href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css", rel: "stylesheet" },
                { href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap", rel: "stylesheet" },
            ]
        }
    },

    modules: []
});