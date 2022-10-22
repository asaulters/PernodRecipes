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
        console.log(state)
    }

    const addLiqueur = (e) =>{
        e.preventDefault();
        let liqueur = document.getElementById('liqueurInput').value;
        dispatch({type: 'addLiqueurInput', payload:liqueur});
        document.getElementById('liqueurInput').value = '';
        console.log(state)
    }

    const addMixer = (e) =>{
        e.preventDefault();
        let mixer = document.getElementById('mixerInput').value;
        dispatch({type:'addMixerInput', payload:mixer});
        document.getElementById('mixerInput').value = '';
        console.log(state)
    }


    const submitTotalTags = (e)=> {
        e.preventDefault();
        for(const drink of drinkList){
            let filteredLiquors = state.liquors;
            let filteredLiqueurs = state.liqueurs;
            let filteredMixers = state.mixers;

            // console.log(drink);
            // console.log(state)

            let drinkLiq = drink.liquors.toString();
            let drinkLiqu = drink.liqueurs.toString();
            let drinkMix = drink.mixers.toString();

            if(drinkLiq.includes(filteredLiquors)){
                const filteredLiqDrink = drinkList.filter((drink) => {
                    drinkLiq.includes(filteredLiquors);
                })
                console.log(filteredLiquors + ' is found!')
                console.log(filteredLiqDrink)
            } else if(drinkLiqu.includes(filteredLiqueurs)){
                console.log(filteredLiqueurs + ' liqu str is true')
            } else if(drinkMix.includes(filteredMixers)){
                console.log(filteredMixers + ' yeahhh buddy!!!');
                
            } else {
                console.log('not today!')
            }


            
        }
        

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