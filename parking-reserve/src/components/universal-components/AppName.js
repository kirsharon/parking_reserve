import React from 'react'
import mainLogo from '../../resourse/images/name.svg'
import styled from 'styled-components'

const AppName = () => {
    return (
        <div className='header'>
                <img src={mainLogo} />
                <h1>PARKING RESERVATION</h1>
        </div>
    )
}

export default AppName