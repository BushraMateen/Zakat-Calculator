import React, { useState, useReducer } from "react";
import formReducer from "./Reducer";

export const UserContext = React.createContext()

export const ContextProvider = ({ children }) =>  {

    //useReducer implemented
    const initialFormState = {};
    
    let [table,setTable] = useState([{
        id: "0",
        UserId : "0",
        Year : "0",
        ZakatRate :  "0",
        PW_PersonalCash_Hand_Bank_AmtVal : "0",
        PW_PersonalCash_Hand_Bank_ZakatDue : "0",
        PW_TotalValueof_Gold_silver_AmtVal : "0",
        PW_TotalValueof_Gold_silver_ZakatDue : "0",
        PW_TotalValueof_stocks_shares_bonds_AmtVal : "0",
        PW_TotalValueof_stocks_shares_bonds_ZakatDue : "0",
        PW_TotalcashValueof_retirement_pansion_AmtVal : "0",
        PW_TotalcashValueof_retirement_pansion_ZakatDue : "0",
        PW_Loans_tobe_recievable_AmtVal :  "0",
        PW_Loans_tobe_recievable_ZakatDue  : "0",
        PW_Other_expecected_recievables_AmtVal :  "0",
        PW_Other_expecected_recievables_ZakatDue  : "0",
        BW_BusinessCash_Hand_Bank_AmtVal : "0",
        BW_BusinessCash_Hand_Bank_ZakatDue : "0",
        BW_Netvalueof_business_tradegoods_AmtVal : "0",
        BW_Netvalueof_business_tradegoods_ZakatDue : "0",
        BW_Total_business_recievables_AmtVal : "0",
        BW_Total_business_recievables_ZakatDue : "0",
        BW_NetIncomefrom_business_exploitedassets_duringyear_AmtVal : "0",
        BW_NetIncomefrom_business_exploitedassets_duringyear_ZakatDue : "0",
        BW_Currentvalueof_held_realestateproperties_AmtVal : "0",
        BW_Currentvalueof_held_realestateproperties_ZakatDue : "0",
        BW_Zakat_Total_AmtVal : "0",
        BW_Zakat_Total_ZakatDue : "0",
        D_Outstanding_necessary_debts_AmtVal : "0",
        D_Outstanding_necessary_debts_ZakatDue : "0",
        D_Zakat_paid_in_advance_duringYear_ZakatDue : "0",
        D_Total_Deductions_ZakatDue : "0",
        D_Remaining_Zakat_Due_ZakatDue : "0",
        modified_date : " "
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
