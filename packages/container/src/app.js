import React, { lazy, Suspense, useState, useEffect } from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
// import MarketingApp from './components/MarketingApp'
// import AuthApp from './components/AuthApp'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import { createBrowserHistory } from 'history'
import Header from './components/Header'
import Progress from './components/Progress'

const history = createBrowserHistory()
const MarketingLazy = lazy(() => import('./components/MarketingApp'))
const AuthLazy = lazy(() => import('./components/AuthApp'))
const DashboardLazy = lazy (() => import('./components/DashboardApp'))

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})
export default () => {

    const [isSignedIn, setIsSignedIn] = useState(false)

    useEffect(() =>{
        if(isSignedIn){
            history.push('/dashboard')
        }
    }, [isSignedIn])
    return (

        <Router history={history}>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header 
                    onSignOut={()=> setIsSignedIn(false)}
                    isSignedIn={isSignedIn}/>
                    <Suspense fallback={<Progress/>}>
                        <Switch>
                            <Route path="/auth">
                                <AuthLazy onSignIn={()=> setIsSignedIn(true)}></AuthLazy>
                            </Route>
                            <Route path="/dashboard">
                                { !isSignedIn && <Redirect to="/"/>}
                                <DashboardLazy/>
                            </Route>
                            <Route path="/" component={MarketingLazy}></Route>
                        </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </Router>
    )
}