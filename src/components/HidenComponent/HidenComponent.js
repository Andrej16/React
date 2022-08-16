import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateVisibility, selectEnabled } from './hidenComponentSlice';
import styles from './HidenComponent.module.css';

export function HidenComponent() {
    const enabled = useSelector(selectEnabled);
    const dispatch = useDispatch();
    //const [isEnabled, setEnabled] = useState(true);

    return(
        <div className={styles.container}>
            <button className={styles.button} onClick={() => dispatch(updateVisibility())}>
                Set Visibility
            </button>
            <div className={enabled ? styles.visible : styles.invisible}>You clicked on button </div>
        </div>
    );
}