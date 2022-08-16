import React from 'react';
import styles from './NiceControl.module.scss';

export class NiceControl extends React.Component{

    render(){
        return(
            <div className={styles.control}>
                <h2>Stiled nice component</h2>
                <form>
                    <p>
                        <label>I'm label</label><br></br>
                        <input type="text"></input>
                    </p>
                    <p>
                        <label>I'm textarea</label><br></br>
                        <textarea></textarea>
                    </p>
                    <button>Submit button</button>
                </form>
            </div>
        );
    }
}