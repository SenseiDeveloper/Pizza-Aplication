import React from 'react';

export const Logo = () => {
    return (
        <div className="logoWrapper">
            <h4>Angry Pizza</h4>
            <img src={process.env.PUBLIC_URL + 'images/logo.svg'} alt="Angry Pizza"/>
        </div>
    )
}
