import React, { lazy, Suspense, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import MarketingApp from './components/MarketingApp'
// import AuthApp from './components/AuthApp'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import Header from './components/Header'
import Progress from './components/Progress'

const MarketingLazy = lazy(() => import('./components/MarketingApp'))
const AuthLazy = lazy(() => import('./components/AuthApp'))
const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})
export default () => {

    const [isSignedIn, setIsSignedIn] = useState(false)
    return (

        <BrowserRouter generateClassName={generateClassName}>
            <StylesProvider>
                <div>
                    <Header 
                    onSignOut={()=> setIsSignedIn(false)}
                    isSignedIn={isSignedIn}/>
                    <Suspense fallback={<Progress/>}>
                        <Switch>
                            <Route path="/auth">
                                <AuthLazy onSignIn={()=> setIsSignedIn(true)}></AuthLazy>
                            </Route>
                            <Route path="/" component={MarketingLazy}>
                                <MarketingLazy></MarketingLazy>
                            </Route>
                        </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </BrowserRouter>
    )
}