import React from 'react';
import GlobalContextProvider, { useGlobalContext } from '../../../../Store/GlobalContext';

import classes from './CurrMixerInp.module.css'

const CurrMixerInp = () => {
    const {state, dispatch} =  useGlobalContext();
  return (
    <div className={classes.MixerInputs}>
        {state.mixers.map((inputs, i) => (
            <div id='mixerOption' key={i}>
                <h3>{inputs}</h3>
            </div>
        ))}
    </div>
  )
}

export default CurrMixerInp