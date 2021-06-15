import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ParkingReservationForm from './ParkingReserveForm'
import css from './parking-reserv.css'

const ParkingReservation = ({ history }) => {
    return (
        <ParkingReservationForm />
    )
}

export default ParkingReservation