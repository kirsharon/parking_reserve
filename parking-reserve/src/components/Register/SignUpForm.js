import React, { useState } from 'react'
import { useForm, useField } from 'react-final-form-hooks'
import { registerAction } from '../../store/features/auth/index'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import pswImg from '../../resourse/images/password.svg'
import emailImg from '../../resourse/images/mail.svg'
import loginImg from '../../resourse/images/login.svg'
import styled from 'styled-components'


const ImgInInput = styled.img`
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    bottom: 0;
    margin: auto;
`

const validate = values => {
    const errors = {}

    if (!values.login) {
        errors.login = 'Введите логин или email!'
    }

    if (!values.email) {
        errors.email = 'Введите почту!'
    }

    if (!values.password) {
        errors.password = 'Введите пароль!'
    }

    return errors
}

const SignUpForm = () => {

    const history = useHistory() 
    const dispatch = useDispatch()

    const onSubmit = async values => {
        console.log(JSON.stringify(values, 0, 3))
        dispatch(registerAction(values))
        history.push('/login')
    }
 
    const { form, handleSubmit, values, pristine, submitting } = useForm({
        onSubmit,
        validate
    })

    const login = useField('login', form)
    const email = useField('email', form)
    const password = useField('password', form)

    return (
        <div className='sign'>
            <h2 className='sign-header'>Регистрация</h2>
            <form onSubmit={handleSubmit}>
                <div className='in' style={{ paddingBottom: '5%' }}>
                    <p>
                        <ImgInInput src={loginImg} />
                        <input {...login.input}
                            type='text'
                            placeholder='Ваш логин' />
                        {login.meta.touched &&
                            login.meta.error && <span>{login.meta.error}</span>}
                    </p>
                    <p>
                        <ImgInInput src={emailImg} />
                        <input {...email.input}
                            type='email'
                            placeholder='Ваша почта' />
                        {email.meta.touched &&
                            email.meta.error && <span>{email.meta.error}</span>}
                    </p>
                    <p>
                        <ImgInInput src={pswImg} />
                        <input {...password.input}
                            type='password'
                            placeholder='Ваш пароль' />
                        {password.meta.touched &&
                            password.meta.error && <span>{password.meta.error}</span>}
                    </p>
                    <button type='submit'
                        style={{ margin: 'auto', marginTop: '4%' }}
                        disabled={submitting}>
                        Зарегистрироваться
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SignUpForm