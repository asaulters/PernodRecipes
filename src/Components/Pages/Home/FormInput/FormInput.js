import React, {useState} from 'react';

import classes from './FormInput.module.css';

const FormInput = () => {

    // const[liquors, setLiquors] = useState([])

    let liquorInputs = [];
    let liqueurInputs = [];
    let mixerInputs = [];

    const addLiquor =(e) => {
        e.preventDefault();
        let liquor= document.getElementById('liquorInput').value;
        console.log(liquor);
        liquorInputs.push(liquor);
        document.getElementById('liquorInput').value = '';
        console.log(liquorInputs);
    }

    const addLiqueur = (e) =>{
        e.preventDefault();
        let liqueur = document.getElementById('liqueurInput').value;
        console.log(liqueur);
        liqueurInputs.push(liqueur);
        document.getElementById('liqueurInput').value = '';
        console.log(liqueurInputs);
    }

    const addMixer = (e) =>{
        e.preventDefault();
        let mixer = document.getElementById('mixerInput').value;
        console.log(mixer);
        mixerInputs.push(mixer);
        document.getElementById('mixerInput').value = '';
        console.log(mixerInputs);
    }


  return (
    <div className={classes.formInputWrapper}>
        <form>
            <div className={classes.formInputs}>
                <div className={classes.liquorsDiv}>
                    <label for='liquor'>Liquors</label>
                    <input 
                        type='text' 
                        name='liquor' 
                        className={classes.liquorInput}
                        id="liquorInput"
                        />
                    <button
                        onClick={addLiquor}
                        type='submit'
                    >Add Liquor</button>
                </div>
                <div className={classes.liqueursDiv}>
                    <label for='liqueur'>Liqueurs</label>
                    <input 
                        type='text' 
                        name='liqueur' 
                        className={classes.liqueurInput}
                        id='liqueurInput'
                        />
                    <button
                        type='submit'
                        onClick={addLiqueur}
                    >Add Liqueur</button>
                </div>
                <div className={classes.mixersDiv}>
                    <label for='mixers'>Mixers</label>
                    <input 
                        type='text' 
                        name='mixers' 
                        className={classes.mixersInput} 
                        id='mixerInput'    
                        />
                    <button
                        type='submit'
                        onClick={addMixer}
                    >Add mixers</button>
                </div>
            </div>
            <div className={classes.inputsDiv}>
                <div className={classes.liqInputsDiv}>

                </div>
                <div className={classes.liqInputsDiv}>

                </div>
                <div className={classes.liqInputsDiv}>

                </div>

            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default FormInput