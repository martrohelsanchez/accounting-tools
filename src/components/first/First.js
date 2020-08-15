import React from 'react';

import styles from './first.module.css';

function First() {
    return (
        <div className={styles.firstView}>
            <div className={styles.titleCont}>
                <h1 className={styles.title}>Accounting Tools</h1>
                <h1 className={styles.title}>Calculator</h1>
            </div>
        </div>
    )
}

export default First;