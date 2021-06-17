import { createApp } from 'vue'
import Dashboard from './components/Dashboard.vue'


//mount function para iniciar el app
const mount = (el) => {
    const app = createApp(Dashboard);
    app.mount(el)
}

//si estamos en modo desarrollo iniciar mount de una
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#dashboard-dev-root')
    if (devRoot) {
        mount(devRoot)
    }
}

//asumimos que estamos iniciando desde container
//entonces exportamos mount

export {
    mount
}