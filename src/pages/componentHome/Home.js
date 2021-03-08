import React from 'react';
import './Home.scss';
import {Header} from "../../components/componentHeader/Header";
import {Main} from "../../components/componentMain/Main";


export const Home = () => {
    return (
        <div className="appBackground">
            <Header />
            <Main/>
        </div>
    )
}
