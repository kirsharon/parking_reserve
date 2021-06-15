import React, { useCallback } from 'react'
import PaymentForm from './PaymentForm/index'

const PaymentPage = ({ history }) => {
    return (
        <div className='payment-page'>
            <h2 className='page-header'>Оплата и подтверждение</h2>
            <PaymentForm />
        </div>
    )
}

export default PaymentPage