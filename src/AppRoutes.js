import React from 'react';
import {Route, Routes} from 'react-router-dom';

import HomePage from './Components/Pages/Home/Home'

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </>
  )
}

export default AppRoutes