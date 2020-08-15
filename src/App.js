import React from 'react';

import Calc from './components/calc/Calc';
import styles from './app.module.css';
import First from './components/first/First';
import Second from './components/second/Second';

function App() {


    return (
        <div className={styles.appCont}>
            <First />
            <Second />
        </div>
    )
}

export default App;