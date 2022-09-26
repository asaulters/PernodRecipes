import React from 'react';

import classes from './FormInput.module.css';

const FormInput = () => {

    const addLiquor =(e) => {
        e.preventDefault();
        console.log(e.target.value);
    }


  return (
    <div className={classes.formInputWrapper}>
        <form>
            <div className={classes.liquorsDiv}>
                <label for='liquor'>Liquors</label>
                <input type='text' name='liquor' className={classes.liquorInput}/>
                <button
                    onClick={addLiquor}
                >Add Liquor</button>
            </div>
            <div className={classes.liqueursDiv}>
                <label for='liqueur'>Liqueurs</label>
                <input type='text' name='liqueur' className={classes.liqueurInput}/>
                <button>Add Liqueur</button>
            </div>
            <div className={classes.liquorsDiv}>
                <label for='mixers'>Mixers</label>
                <input type='text' name='mixers' className={classes.mixersInput} />
                <button>Add mixers</button>
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default FormInput