import React from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { Buttons, Inputs } from '../../components';
import { LOGIN, TOKEN } from '../../constant';
import { useForm } from '../../hooks/useForm';
import { delay } from '../../utils';
import './style.scss';
export default function Loginpage() {
    let token = JSON.parse(localStorage.getItem(TOKEN));
    let navigate = useNavigate()
    const dispatch = useDispatch();
    let { form, register, error, validate } = useForm({
        username: '',
        password: ''
    });
    if (token) {
        return <Navigate to='/' />
    }
    function handleSubmit() {
        let obj = validate();
        if (Object.keys(obj).length == 0) {
            dispatch({
                type: LOGIN,
                payload: form
            })
            delay(2000)
                .then(() => {
                    navigate('/')
                })
        }
    }
    return (
        <div className='login'>
            <div className='login_box'>
                <h1 className='login_box-title'>Login</h1>
                <Inputs label='Username' {...register('username')} error={error.username} />
                <br />
                <Inputs type='password' label='Password' {...register('password')} error={error.password} />
                <Buttons handleSubmit={handleSubmit} bg='main' color='bright' radius >Submit</Buttons>
            </div>
        </div>
    )
}
