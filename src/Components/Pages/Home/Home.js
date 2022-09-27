import React, {useState} from 'react';

import classes from './Home.module.css'
import FormInput from './FormInput/FormInput'

const Home = () => {
  const [liquors, setLiquors] = useState([]);
  const [liqueurs, setLiqueurs] = useState([]);
  const [mixers, setMixers] = useState([]);


  const addLiquor=()=>{
    
  }

  return (
    <div className={classes.homeWrapper}>
      <FormInput />
    </div>
  )
}

export default Home