import React, { useState, useReducer } from "react";
import formReducer from "./Reducer";

export const UserContext = React.createContext()

export const ContextProvider = ({ children }) =>  {

    //useReducer implemented
    const initialFormState = {};
    let [table,setTable] = useState([{
        id: "",
        UserId : "",
        Year : "",
        ZakatRate :  "",
        PW_PersonalCash_Hand_Bank_AmtVal : "",
        PW_PersonalCash_Hand_Bank_ZakatDue : "",
        PW_TotalValueof_Gold_silver_AmtVal : "",
        PW_TotalValueof_Gold_silver_ZakatDue : "",
        PW_TotalValueof_stocks_shares_bonds_AmtVal : "",
        PW_TotalValueof_stocks_shares_bonds_ZakatDue : "",
        PW_TotalcashValueof_retirement_pansion_AmtVal : "",
        PW_TotalcashValueof_retirement_pansion_ZakatDue : "",
        PW_Loans_tobe_recievable_AmtVal :  "",
        PW_Loans_tobe_recievable_ZakatDue  : "",
        PW_Other_expecected_recievables_AmtVal :  "",
        PW_Other_expecected_recievables_ZakatDue  : "",
        BW_BusinessCash_Hand_Bank_AmtVal : "",
        BW_BusinessCash_Hand_Bank_ZakatDue : "",
        BW_Netvalueof_business_tradegoods_AmtVal : "",
        BW_Netvalueof_business_tradegoods_ZakatDue : "",
        BW_Total_business_recievables_AmtVal : "",
        BW_Total_business_recievables_ZakatDue : "",
        BW_NetIncomefrom_business_exploitedassets_duringyear_AmtVal : "",
        BW_NetIncomefrom_business_exploitedassets_duringyear_ZakatDue : "",
        BW_Currentvalueof_held_realestateproperties_AmtVal : "",
        BW_Currentvalueof_held_realestateproperties_ZakatDue : "",
        BW_Zakat_Total_AmtVal : "",
        BW_Zakat_Total_ZakatDue : "",
        D_Outstanding_necessary_debts_AmtVal : "",
        D_Outstanding_necessary_debts_ZakatDue : "",
        D_Zakat_paid_in_advance_duringYear_ZakatDue : "",
        D_Total_Deductions_ZakatDue : "",
        D_Remaining_Zakat_Due_ZakatDue : "",
        modified_date : ""
    }]);

    const [formState, dispatch] = useReducer(formReducer, initialFormState)

    return (
        <div>
            <UserContext.Provider value={{table, setTable, formState, dispatch}}>
                {children}
            </UserContext.Provider>
        </div>
    )
}
