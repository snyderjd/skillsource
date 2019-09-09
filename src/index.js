import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import SkillSource from './components/SkillSource';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Router>
        <SkillSource />
    </Router>
    , document.getElementById('root')
)
