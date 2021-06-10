import React from 'react'
import ReactDom from 'react-dom'
import App from './app'

//mount function para iniciar el app

const mount = (el) => {
    ReactDom.render(
        <App/>,
        el
    )
}

//si estamos en modo desarrollo iniciar mount de una

if(process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#marketing-dev-root')
    if(devRoot){
        mount(devRoot)
    }
}

//asumimos que estamos iniciando desde container
//entonces exportamos mount

export {
    mount
}