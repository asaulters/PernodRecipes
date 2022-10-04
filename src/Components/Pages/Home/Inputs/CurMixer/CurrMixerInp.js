import React from 'react';
import GlobalContextProvider, { useGlobalContext } from '../../../../Store/GlobalContext';

import classes from './CurrMixerInp.module.css'

const CurrMixerInp = () => {
    const {state, dispatch} =  useGlobalContext();
  return (
    <div className={classes.MixerInputs}>
        {state.mixers.map((inputs, i) => (
          <div className={classes.Inputs} key={i}>
                <h3>{inputs}</h3>
                <button 
                    onClick={() => dispatch({type: 'removeMixernput', payload: inputs})}
                >&times;</button>
            </div>
        ))}
    </div>
  )
}

export default CurrMixerInp