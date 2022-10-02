import React from 'react';

import classes from './InputList.module.css';

const InputList = (props) => {
    
  return (
    <div>
        {props.inputs.map((item, i) =>(
            <div className={classes.listDiv} key={i}>
                <h4>{item}</h4>
            </div>)
        )}
        {/* <h4>{props.inputs}</h4> */}
    </div>
  )
}

export default InputList