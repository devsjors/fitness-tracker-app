// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxtjs/supabase"],

    supabase: {
        redirectOptions: {
            login: "/login",
            callback: "/confirm",
            exclude: ["/"],
        }
    },

    devtools: { enabled: true },
})
