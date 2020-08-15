import React, { useState } from 'react';

import styles from './calc.module.css';

function Calc() {
    const [select, setSelect] = useState('Capital');
    const [asset, setAsset] = useState(0);
    const [liab, setLiab] = useState(0);
    const [cap, setCap] = useState(0);

    function handleSelectChange(e) {
        setSelect(e.target.value)
    }

    function assetChange(e) {
        setAsset(e.target.value);

        if (e.target.value === '') {
            return null;
        }

        if (select === 'Liability') {
            const sagot = Number(e.target.value) - Number(asset);
            const lagay = isNaN(sagot) ? sagot : 0;
            setLiab(lagay);
        }

        if (select === 'Capital') {
            const sagot = parseInt(e.target.value) - parseInt(asset);
            const lagay = isNaN(sagot) ? 0 : sagot;
            setCap(lagay);
        }
    }

    function liabChange(e) {
        setLiab(e.target.value === '' ? 0 : parseInt(e.target.value));
        if (select === 'Asset') {
            const sagot = parseInt(e.target.value) + parseInt(cap);
            const lagay = isNaN(sagot) ? 0 : sagot;
            setAsset(lagay);
        }

        if (select === 'Capital') {
            const sagot = parseInt(asset) - parseInt(e.target.value);
            const lagay = isNaN(sagot) ? 0 : sagot;
            setCap(lagay);
        }
    }

    function capChange(e) {
        capChange(e.target.value === '' ? 0 : parseInt(e.target.value));
        if (select === 'Asset') {
            const sagot = parseInt(e.target.value) + parseInt(liab);
            const lagay = isNaN(sagot) ? 0 : sagot;
            setAsset(lagay);
        }

        if (select === 'Liability') {
            const sagot = parseInt(e.target.value) + parseInt(liab);
            const lagay = isNaN(sagot) ? 0 : sagot;

            setLiab(lagay);
        }
    }

    return (
        <div>
            <div className={styles.find}>
                Find
            </div>
            <select className={styles.select} value={select} onChange={handleSelectChange}>
                <option value='Asset' >Asset</option>
                <option valiue='Liability'>Liability</option>
                <option value='Capital'>Capital</option>
            </select>
            <br/>
            <div className={styles.inputsCont}>
                <p>Assets</p>
                <input value={asset} className={`${styles.assetInput} ${styles.input}`} onChange={assetChange} />
                <br />
                <span className={styles.operator}>
                    =
                </span>
                <br />
                <p>Liabilities</p>
                <input value={liab} className={`${styles.liabInput} ${styles.input}`} onChange={liabChange}/>
                <br />
                <span className={styles.operator}>
                    +
                </span>
                <br />
                <p>Capital</p>
                <input value={cap} className={`${styles.capInput} ${styles.input}`} onChange={capChange}/>
            </div>
        </div>
    )
}

export default Calc;