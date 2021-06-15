import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ParkingPlaces from './ParkingPlaces/index'
import plusImg from '../../resourse/images/plus.svg'
import style from './parking-places-page.css'
import AddParkingPlaces from './AddParkingPlaceForm/index'

const MyParkingPlaces = ({ history }) => {
    return (
        <div className='my-parking-places-page'>
            <h1>Мои парковочные места</h1>
            <div id='button-content' className='button-content'>
                <AddParkingPlaces />
            </div>
            <ParkingPlaces />
        </div>
    )
}

export default MyParkingPlaces