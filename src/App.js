import React from 'react';

import styles from './app.module.css';
import First from './components/first/First';
import Second from './components/second/Second';
import Footer from './components/footer/Footer';

function App() {
    return (
        <div className={styles.appCont}>
            <First />
            <Second />
            <Footer />
        </div>
    )
}

export default App;