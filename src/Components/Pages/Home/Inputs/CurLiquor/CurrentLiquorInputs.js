import React from 'react';

import { useGlobalContext } from '../../../../Store/GlobalContext';

import classes from './CurLiqourInp.modules.css';

const CurrentLiquorInputs = () => {
    const {state, dispatch} = useGlobalContext();
    return (
    <div className={classes.liqourInputs}>
        {state.liquors.map((inputs, i) => (
            <div id='liquorOptions' key={i}>
                <h3>{inputs}</h3>
            </div>
        ))}
        
        {/* {state.liquors.map((s) => {
            <div id='liquorOptions'>
                {s}
            </div>
        })} */}
    </div>
  )
}

export default CurrentLiquorInputs