import React from 'react';

import classes from './Home.module.css'
import FormInput from './FormInput/FormInput'

const Home = () => {
  return (
    <div className={classes.homeWrapper}>
      <FormInput />
    </div>
  )
}

export default Home