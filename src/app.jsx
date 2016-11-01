/**
 * Include CSS
 * -----------
 * We do this here so that we can hot-reload it later with webpack-dev-server, and for simplicity in development.
 * In production, however, this needs to be included from the HTML file as a separate css file.
 */
import styles from './styles'; // eslint-disable-line no-unused-vars
import toggleBlockStyles from './styles/react-toggle-block.scss'; // eslint-disable-line no-unused-vars

// JavaScript dependencies
import React from 'react'; // eslint-disable-line no-unused-vars
import { render } from 'react-dom';

import Demo from './demo.jsx';

render((
    <div className="container">
        <div className="row">
            <div className="col-sm-12 header">
                <h1>React Toggle Block</h1>
                <p>An easy way to hide and show stuff with React JS</p>
            </div>
            <div className="col-sm-12">
                <Demo />
            </div>
        </div>
    </div>
), document.getElementById('react-wrapper'))
