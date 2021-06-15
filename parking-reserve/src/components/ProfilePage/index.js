import React from 'react'
import UserInfo from './UserInfo/index'
import OperationHistory from './OperationsHistory'

const ProfilePage = ({ history }) => {
    return(
        <div className='profile'>
            <h1>Профиль</h1>
            <UserInfo />
            <OperationHistory />
        </div>        
    )
}

export default ProfilePage