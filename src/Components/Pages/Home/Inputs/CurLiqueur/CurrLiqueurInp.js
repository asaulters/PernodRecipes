import React from 'react';
import GlobalContextProvider, { useGlobalContext } from '../../../../Store/GlobalContext';

import classes from './CurLiqueurInp.module.css'

const CurrLiqueurInp = () => {
    const {state, dispatch} = useGlobalContext();

  return (
    <div className={classes.liqueurInputsDiv}>
        {state.liqueurs.map((inputs, i) => (
            <div id='inputOptions' key={i}>
                <h3>{inputs}</h3>
            </div>
        ))}
    </div>
  )
}

export default CurrLiqueurInp