import React, {useState, useEffect} from 'react';
import { useGlobalContext } from '../../../Store/GlobalContext';

import classes from './FormInput.module.css';
import drinkList from '../../../../Data/drinks.json'

import LiqList from '../Inputs/CurLiquor/CurrentLiquorInputs';
import LiqueurList from '../Inputs/CurLiqueur/CurrLiqueurInp';
import MixerList from '../Inputs/CurMixer/CurrMixerInp';

const FormInput = () => {
    const {state, dispatch} = useGlobalContext();

    const liqDrinks = [];
    const liquDrinks = [];
    const mixerDrinks = [];

    const addLiquor =(e) => {
        e.preventDefault();
        let liquor= document.getElementById('liquorInput').value;
        dispatch({type: 'addLiquorInput', payload: liquor})
        document.getElementById('liquorInput').value = '';
        var liqDrinks= drinkList.filter((drink) => drink.liquors.includes(liquor));
        console.log(liqDrinks)
    }

    const addLiqueur = (e) =>{
        e.preventDefault();
        let liqueur = document.getElementById('liqueurInput').value;
        dispatch({type: 'addLiqueurInput', payload:liqueur});
        document.getElementById('liqueurInput').value = '';
    }

    const addMixer = (e) =>{
        e.preventDefault();
        let mixer = document.getElementById('mixerInput').value;
        dispatch({type:'addMixerInput', payload:mixer});
        document.getElementById('mixerInput').value = '';
    }

    const submitTotalTags = (e)=> {
        e.preventDefault();
        console.log(state);
        // console.log(drinkList);
        // drinkList.filter

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
                <div className={classes.liquorInputsDiv}>
                    <LiqList />
                </div>
                <div className={classes.liqueurInputsDiv}>
                    <LiqueurList />
                </div>
                <div className={classes.mixerInputsDiv}>
                    <MixerList />
                </div>

            </div>
            <button onClick={submitTotalTags}>Submit</button>
        </form>
    </div>
  )
}

export default FormInput