/**
 *
 * Created by wb-qyp273848 on 2017/4/5.
 */
'use strict';

import Logo from './components/Logo';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <div style={{padding: '20px'}}>
        <h1>Component discoverer</h1>

        <h2>Logo</h2>
        <div style={{display: 'inline-block', background: 'purple'}}>
            <Logo/>
        </div>
        {/*可以在此处放置更多的组件实例*/}
    </div>,
    document.getElementById('pad')
);