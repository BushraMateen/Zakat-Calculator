import React, { useState, useReducer } from "react";
import formReducer from "./Reducer";

export const UserContext = React.createContext()



export const ContextProvider = ({ children }) =>  {

    // let [dbObject, setdbObject] = useState({
    //     A1: '',
    //     A2: '',
    //     A3: ''
    // });

    //useReducer implemented
    const initialFormState = {};

    const [formState, dispatch] = useReducer(formReducer, initialFormState)

    return (
        <div>
            <UserContext.Provider value={{formState, dispatch}}>
                {children}
            </UserContext.Provider>
        </div>
    )
}
