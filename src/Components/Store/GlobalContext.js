import React, {createContext, useContext, useReducer} from 'react';

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const initialState= {
    liquors: [],
    liqueurs: [],
    mixers: []
}

const reducer = (state, action) => {
    switch(action.type){
        case 'addInput':
            return {
                ...state,

            };

}

const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <GlobalContext.Provider value={{ state, dispatch }}>
        {children}
      </GlobalContext.Provider>
    );
  };
  
  export default GlobalContextProvider;