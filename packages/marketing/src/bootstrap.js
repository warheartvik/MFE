import React from 'react'
import ReactDom from 'react-dom'
import { createMemoryHistory, createBrowserHistory } from 'history'
import App from './app'

//mount function para iniciar el app

const mount = (el, { onNavigate, defaultHistory }) => {
    const history = defaultHistory || createMemoryHistory()
    if(onNavigate){
        history.listen(onNavigate)
    }

    ReactDom.render(
        <App history={history} />,
        el
    );

    return {
        onParentNavigate({pathname: nextPathName}){
            const { pathname } = history.location
            if(pathname !== nextPathName){
                history.push(nextPathName)
            }
        }
    }
}

//si estamos en modo desarrollo iniciar mount de una

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#marketing-dev-root')
    if (devRoot) {
        mount(devRoot, { defaultHistory: createBrowserHistory()})
    }
}

//asumimos que estamos iniciando desde container
//entonces exportamos mount

export {
    mount
}