import React, { createContext, useContext, useReducer } from "react";

// create context where data layer lives
export const StateContext = createContext();

//StateProvider is the data layer which is a higher Order component that takes in 3 values
//reducer,initialState and children
// the intialState is the what the data layer looks like when the app is loaded and the reducer listens to changes in the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//a Hook which allows us to pull information from the data layer
export const useStateValue = () => useContext(StateContext);
