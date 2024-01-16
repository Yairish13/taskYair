import React from 'react'
import Button from '../Button/Button'
import { useFetch } from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom';

function Layout({ children, buttonText, headerText, handleClick }) {
    const { isLoading } = useFetch();

    return (
        <div className="app">
            <div className='header'>
                <h1>{headerText}</h1>
            </div>

            <div className="main">
                {children}
            </div>

            <div className='footer'>
                <Button mode="primary" loading={isLoading} onClick={handleClick}>{buttonText}</Button>
            </div>
        </div >
    )
}

export default Layout