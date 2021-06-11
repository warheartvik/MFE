import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

const generateClassName = createGenerateClassName({
    productionPrefix: 'ma'
})

import Landing from './components/Landing'
import Pricing from './components/Pricing'

export default () => {
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/pricing" component={Pricing}></Route>
                        <Route exact path="/" component={Landing}></Route>
                    </Switch>
                </BrowserRouter>
            </StylesProvider>
        </div>
    )
}