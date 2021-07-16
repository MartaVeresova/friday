import React from 'react';
import s from './App.module.css';
import {SuperComponents} from './SuperComponents/SuperComponents';
import {Header} from './header/Header';
import {Routes} from './routers/Routes';

export const App = () => {
    return (
        <div className={s.App}>
            <Header/>
            <Routes/>
            <SuperComponents/>
        </div>
    );
}
