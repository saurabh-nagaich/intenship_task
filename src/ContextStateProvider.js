import React, { createContext, useContext, useReducer } from "react";

const StateContext = createContext();

export const StateProvider=({initailState,reducer,children})=>(
    <StateContext.Provider value={useReducer(reducer,initailState)}>
        {children}
    </StateContext.Provider>
)

export const useCountState=()=>useContext(StateContext);
