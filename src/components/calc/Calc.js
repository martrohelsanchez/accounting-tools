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
        setAsset(e.target.value === '' ? 0 : parseInt(e.target.value));

        if (select === 'Liability') {
            const sagot = Number(e.target.value) - Number(asset);
            const lagay = sagot === NaN ? sagot : 0;
            setLiab(lagay);
        }

        if (select === 'Capital') {
            const sagot = parseInt(e.target.value) - parseInt(asset);
            const lagay = sagot === 'NaN' ? 0 : sagot;
            setCap(lagay);
        }
    }

    function liabChange(e) {
        setLiab(e.target.value === '' ? 0 : parseInt(e.target.value));
        if (select === 'Asset') {
                setAsset(Number(e.target.value) + Number(cap));
        }

        if (select === 'Capital') {
                setCap( Number(asset) - Number(e.target.value));
        }
    }

    function capChange(e) {
        capChange(e.target.value === '' ? 0 : parseInt(e.target.value));
        if (select === 'Asset') {
                setAsset(Number(e.target.value) + Number(liab));
        }

        if (select === 'Liability') {
                setLiab(Number(asset) - Number(e.target.value));
        }
    }

    return (
        <div>
            <select value={select} onChange={handleSelectChange}>
                <option value='Asset' >Asset</option>
                <option valiue='Liability'>Liability</option>
                <option value='Capital'>Capital</option>
            </select>
            <br/>
            <div className={styles.inputsCont}>
                <input value={asset} className={styles.assetInput} onChange={assetChange} />
                <span>
                    =
                </span>
                <input value={liab} className={styles.liabInput} onChange={liabChange}/>
                <span>
                    +
                </span>
                <input value={cap} className={styles.capInput} onChange={capChange}/>
            </div>
        </div>
    )
}

export default Calc;