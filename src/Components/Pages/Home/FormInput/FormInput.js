import React, {useState, useEffect} from 'react';
import { useGlobalContext } from '../../../Store/GlobalContext';

import classes from './FormInput.module.css';
import drinkList from '../../../../Data/drinks.json';
// import { submitTotalTags } from './SubmitTotalTags/SubmitTotalTags';

import LiqList from '../Inputs/CurLiquor/CurrentLiquorInputs';
import LiqueurList from '../Inputs/CurLiqueur/CurrLiqueurInp';
import MixerList from '../Inputs/CurMixer/CurrMixerInp';

const FormInput = () => {
    const {state, dispatch} = useGlobalContext();

    // const liqDrinks = [];
    // const liquDrinks = [];
    // const mixerDrinks = [];

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


    // const submitTotalTags = (e)=> {
    //     e.preventDefault();

    //     for (let i =0; i<drinkList.length; i++){

    //         // user inputs
    //         let userInputLiquors = state.liquors;
    //         let userInputLiqueurs = state.liqueurs;
    //         let userInputMixers = state.mixers;

    //         // drinkList drinks var
    //         let drinkLiq = drinkList[i].liquors.toString();
    //         let drinkLiqu = drinkList[i].liqueurs.toString();
    //         let drinkMix = drinkList[i].mixers.toString();

    //         // checking for matches

    //         // if ( drinkLiq.includes(userInputLiquors) && drinkLiqu.includes(userInputLiquors) && drinkMix.includes(userInputMixers)){
    //         //     console.log(drinkList[i].name)
    //         // } else {
    //         //     console.log('nope')
    //         // }

    //         if(userInputLiquors == ""){
    //             console.log('empty')
    //         } else if (drinkLiq.includes(userInputLiquors) ){
    //             console.log(userInputLiquors + ' is found! in ' + drinkList[i].name.toString())
    //         }; 
    //         if(userInputLiqueurs == ""){
    //             console.log('empty Liqueur')
    //         } else if(drinkLiqu.includes(userInputLiqueurs)){
    //             console.log(userInputLiqueurs + ' is found! in ' + drinkList[i].name.toString())
    //         };
    //         if (userInputMixers ==""){
    //             console.log('empty mixers')
    //         } else if(drinkMix.includes(userInputMixers)){
    //             console.log(userInputMixers + ' is found! in ' + drinkList[i].name.toString())
    //         }
    //     }
        

    // }

    const submitTotalTags =(event) => {
        event.preventDefault();
        // Make a single array of all ingredients to search for
        const {liquors, liqueurs, mixers} = state;
        const formIngredients= [...state.liquors, ...state.liqueurs, ...state.mixers];
          // A filter function must return true if you want it to be
  // in the returned set, so lets loop through all possible drinks and...
        const matches = drinkList.filter((drink) => {
        // create a set of all ingredients in the current drink we're checking against
            const drinkIngredients = new Set([...drink.liquors, ...drink.liqueurs, ...drink.mixers])
            // loop through all the form ingredients
            for (let i of formIngredients){
                // if drink doesn't have user provided ingredient, stop and return false
                if(!drinkIngredients.has(i)) return false;
                return true
        }         
    })
    console.log(matches.map(match => match.name))
    }


    


  return (
    <div className={classes.formInputWrapper}>
        <form>
            <div className={classes.formInputs}>
                <div className={classes.liquorsDiv}>
                    <label for='liquor'>Liquors</label>
                    <select name='liquor' id="liquorInput">
                        <option className={classes.liquorInput} value="">Choose Liquors</option>
                        <option className={classes.liquorInput} value="vodka">Vodka</option>
                        <option className={classes.liquorInput} value="jameson">Jameson</option>
                        <option className={classes.liquorInput} value="tequila">Altos</option>
                        <option className={classes.liquorInput} value="tequila">Tequila</option>
                        <option className={classes.liquorInput} value="gin">Gin</option>
                        <option className={classes.liquorInput} value="rum">Rum</option>
                    </select>
                    <button
                        onClick={addLiquor}
                        type='submit'
                    >Add Liquor</button>
                </div>
                <div className={classes.liqueursDiv}>
                    <label for='liqueur'>Liqueurs</label>
                    <select name='liqueur' id="liqueurInput">
                        <option className={classes.liqueurInput} value="">Choose Liqueurs</option>
                        <option className={classes.liqueurInput} value="peach">Peach</option>
                        <option className={classes.liqueurInput} value="triple sec">Triple Sec</option>
                    </select>
                    <button
                        type='submit'
                        onClick={addLiqueur}
                    >Add Liqueur</button>
                </div>
                <div className={classes.mixersDiv}>
                    <label for='mixers'>Mixers</label>
                    <select name='mixers' id="mixerInput">
                        <option className={classes.mixerInput} value="">Choose Mixers</option>
                        <option className={classes.mixerInput} value="sour">Sour</option>
                        <option className={classes.mixerInput} value="oj">Orange Juice</option>
                        <option className={classes.mixerInput} value="coke">Coke</option>
                        <option className={classes.mixerInput} value="ginger beer">Ginger Beer</option>
                        <option className={classes.mixerInput} value="lime juice">Lime Juice</option>
                    </select>
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