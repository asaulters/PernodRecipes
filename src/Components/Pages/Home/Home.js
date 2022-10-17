import React, {useState} from 'react';

import drinkList from '../../../Data/drinks.json';

import classes from './Home.module.css'
import FormInput from './FormInput/FormInput';
import OutputedList from './OutputedList/OutputedList';

const Home = () => {

  console.log(drinkList);

  return (
    <div className={classes.homeWrapper}>
      <FormInput />
      <OutputedList />
    </div>
  )
}

export default Home