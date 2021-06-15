import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
// import NotFoundPage from './NotFoundPage'
import PropTypes from 'prop-types'
import '../App.css'
import Login from './Login/index'
import Register from './Register/index'
import Profile from './ProfilePage/index'
import HomePage from './ReservePlacesPage/index'
import MyParkingPlaces from './ParkingPlacesPage/index'
import About from './About/index'
import NotFoundPage from './universal-components/NotFoundPage'
import PaymentPage from './PaymentPage'
import requireAuth from './HOC/require-auth'
import noRequireAuth from './HOC/no-require-auth'
import Signout from './universal-components/SignOut'
import Navbar from './universal-components/Navbar'
import Footer from './universal-components/Footer'
import ParkingReserve from './ReservePlacesPage/ParkingReservation/index'
import { useSelector } from 'react-redux'

const App = () => {
    const authenticated = useSelector(state => state.get('auth').get('authenticated'))
    let navbar
    let footer
    
    console.log(authenticated)
    if (authenticated){
        navbar = <Navbar />
        footer = <Footer />
    }

    return ( 
        <div className='app'>
            {navbar}
            <Navbar />
                <Switch>
                    <Route exact path="/" component={noRequireAuth(HomePage)} />
                    <Route path='/parking_reserve' component={noRequireAuth(ParkingReserve)} />
                    <Route path='/login' component={noRequireAuth(Login)} />
                    <Route path='/register' component={noRequireAuth(Register)} />
                    <Route path='/signout' component={noRequireAuth(Signout)} />
                    <Route path='/profile' component={noRequireAuth(Profile)} />
                    <Route path='/about' component={noRequireAuth(About)} />
                    <Route path='/my_parking_places' component={noRequireAuth(MyParkingPlaces)} />
                    <Route path='/payment' component={noRequireAuth(PaymentPage)} />
                    <Route component={NotFoundPage} />
                </Switch>
            <Footer />
            {footer}
        </div>
    )
}

export default App