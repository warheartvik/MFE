import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

const generateClassName = createGenerateClassName({
    productionPrefix: 'ma'
})

import Landing from './components/Landing'
import Pricing from './components/Pricing'

export default ({history}) => {
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/pricing" component={Pricing}></Route>
                        <Route exact path="/" component={Landing}></Route>
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
}