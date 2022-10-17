import React, {useEffect} from 'react';
import { useGlobalContext } from '../../../Store/GlobalContext';

import drinkList from '../../../../Data/drinks.json';

const OutputedList = () => {
    const {dispatch} = useGlobalContext();

    useEffect(() => {
        fetch('../../../../Data/drinks.json')
            .then((data) => data.json())
            .then((payload) => dispatch({type:'loadDrinks', payload}))
    }, [])



  return (
    <div>OutputedList</div>
  )
}

export default OutputedList