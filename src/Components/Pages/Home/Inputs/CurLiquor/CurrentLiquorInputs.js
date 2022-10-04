import React from 'react';

import { useGlobalContext } from '../../../../Store/GlobalContext';

import classes from './CurLiqourInp.module.css';

const CurrentLiquorInputs = () => {
    const {state, dispatch} = useGlobalContext();
    return (
    <div className={classes.InputDiv}>
        {state.liquors.map((inputs, i) => (
            <div className={classes.Inputs} key={i}>
                <h3>{inputs}</h3>
                <button 
                    onClick={() => dispatch({type: 'removeLiquorInput', payload: inputs})}
                >&times;</button>
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