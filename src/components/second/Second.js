import React from 'react';

import styles from './second.module.css';
import Calc from '../calc/Calc';

function Second() {
    return (
        <div className={styles.secondCont}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <p className={styles.title} >The basic accounting equation</p>
            <p>
                The basic accounting equation is considered to be the foundation of the 
                double-entry accounting system. The basic accounting equation shows 
                on a company's balance sheet whereby the total of all the company's 
                assets equals the sum of the company's liabilities and shareholders' equity.
            </p>
            <Calc />
        </div>
    )
}

export default Second;