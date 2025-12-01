const app = Vue.createApp({
    data() {
        return {
            vistaActual: "home"
        }
    },
    methods: {
        cambiarVista(vista) {
            this.vistaActual = vista;
        }
    }
});

// Componentes base (más adelante los llenamos con contenido)
app.component("home", {
    template: '<div><h2 class="text-center">Bienvenid@ a Fogón en Línea</h2></div>'
});

app.component("recetas", {
    template: '<div><h2 class="text-center">Recetas</h2></div>'
});

app.component("contacto", {
    template: '<div><h2 class="text-center">Contacto</h2></div>'
});

app.component("login", {
    template: '<div><h2 class="text-center">Iniciar Sesión</h2></div>'
});

app.mount("#app");
