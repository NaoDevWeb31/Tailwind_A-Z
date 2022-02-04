module.exports = {
    /* Tailwind n'utilise plus PurgeCSS => purge remplacé par content */
    content: ["./index.html", "./pages/*/*.html"],
    darkMode: "class",
    theme: {
        /* Ne garde uniquement que ces styles dans le projet et efface ceux de Tailwind */
        // colors: {
        //     customColors: "#000",
        // },

        /* Ajoute ces styles au projet en plus de ceux de Tailwind */
        extend: {
            spacing: {
                enorme: "900px",
            },
            colors: {
                customColors: "#000",
            },
            screens: {
                customRes: "1000px",
            },
        },
    },
    plugins: [],
};
